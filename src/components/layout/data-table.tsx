"use client"

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, } from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CustomPagination } from "@/components/layout/custom-pagination";

// D - Table Data, V - Table Value
interface TableProps<D, V> {
  columns: ColumnDef<D, V>[]
  data: D[]
}
export interface PaginationType {
  pageIndex: number
  pageSize: number
}

export function DataTable<D, V>({
                                  columns,
                                  data
                                }: TableProps<D, V>) {

  const [pagination, setPagination] = useState<PaginationType>({
    pageIndex: 0,
    pageSize: 5
  })

  useEffect(() => {
    console.log(pagination)
  }, [pagination]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination
    }
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <CustomPagination
        pagination={pagination}
        setPagination={setPagination}
        rowCount={data.length}/>
    </div>
  )
}
