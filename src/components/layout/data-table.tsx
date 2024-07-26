"use client"

import {
  ColumnDef, ColumnFiltersState,
  flexRender,
  getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel, getSortedRowModel,
  SortingState,
  useReactTable, VisibilityState,
} from "@tanstack/react-table"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import {PaginationType} from "@/types";
import {Input} from "@/components/ui/input";
import {LuListFilter, LuPlus, LuSearch} from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {companyColumn} from "@/app/[locale]/dashboard/companies/company-column";
import {CustomPagination} from "@/components/ui/custom-pagination";


interface TableProps<D, V> {
  columns: ColumnDef<D, V>[]
  data: D[]
}

export function DataTable<D, V>({columns, data}: TableProps<D, V>) {
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
    console.log(pagination)
  }, [pagination]);

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
        <div className={"relative"}>
          <Input
            placeholder="Search..."
            className="max-w-sm peer block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
          <LuSearch
            className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
        </div>
        <div className="flex gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto font-medium rounded-lg py-3 px-4">
                <LuListFilter className="mr-2 h-4 w-4"/>
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/dashboard/companies/create"}>
            <Button
              className="py-3 px-4 flex gap-x-2 bg-primary rounded-lg text-white hover:bg-primary/80"
            >
              <LuPlus className={"h-6 w-6"}/>
              Add new
            </Button>
          </Link>
        </div>
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
          <CustomPagination
            pagination={pagination}
            setPagination={setPagination}
            rowCount={data.length}/>
        </div>
      </div>
    </div>
  )
}