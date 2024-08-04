"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import React, { useEffect, useState } from "react";
import { PaginationType } from "@/types";
import { companyColumn } from "@/app/[locale]/dashboard/companies/company-column";
import { CustomPagination } from "@/components/ui/custom-pagination";
import { Searchbar } from "@/components/layout/searchbar";
import { Filter } from "@/components/layout/filter";
import { AddButton } from "@/components/layout/add-button";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";


interface TableProps<D, V> {
  columns: ColumnDef<D, V>[]
  data: D[],
  hasFilter: boolean,
  hasSearchbar: boolean,
  hasAddButton: boolean,
  addButtonLink: string,
  hasPagination: boolean
}

export function DataTable<D, V>({
                                  columns,
                                  data,
                                  hasFilter,
                                  hasSearchbar,
                                  hasPagination,
                                  hasAddButton,
                                  addButtonLink
                                }: TableProps<D, V>) {
  const [pagination, setPagination] = useState<PaginationType>({
    pageIndex: 0,
    pageSize: 5,
  })
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  useEffect(() => {
    console.log(table.getColumn("company")?.getFilterValue())
    console.log(table.getFilteredRowModel())
    // console.log("Work")
  }, [columnFilters]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    manualFiltering: false,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    }
  })

  return (
    <div className={"w-full flex flex-col gap-y-4"}>
      <div className="flex items-center justify-between">
        {/*{hasSearchbar && (*/}
        {/*  <Searchbar<D, V> table={table} />*/}
        {/*)}*/}

        {/*Mana bu joyda Search componenetini emas Shadcn da yozilgan kodni olib kelib tashladim bari bir ishlamayapti*/}
        <div className={"relative"}>
          <Input
            placeholder="Filter companies..."
            value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("company")?.setFilterValue(event.target.value)
            }
            className="max-w-sm peer block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
          <LuSearch
            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>


        {hasFilter && (
          <Filter table={table} />
        )}
        {hasAddButton && (
          <AddButton link={addButtonLink} />
        )}
      </div>
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
                  );
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={companyColumn.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className={"flex justify-between"}>
        <div>
          {hasPagination && (
            <CustomPagination
              pagination={pagination}
              setPagination={setPagination}
              rowCount={data.length} />
          )}
        </div>
      </div>
    </div>
  )
}