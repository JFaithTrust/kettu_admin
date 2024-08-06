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
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import React, {useEffect, useState} from "react";
import {PaginationType} from "@/types";
import {companyColumn} from "@/app/[locale]/dashboard/companies/company-column";
import {CustomPagination} from "@/components/ui/custom-pagination";
import {Searchbar} from "@/components/layout/searchbar";
import {Filter} from "@/components/layout/filter";
import {AddButton} from "@/components/layout/add-button";
import {Input} from "@/components/ui/input";
import {LuSearch} from "react-icons/lu";
import {clsx} from "clsx";


interface TableProps<D, V> {
  columns: ColumnDef<D, V>[]
  data: D[]
  hasFilter?: boolean
  hasSearchbar?: boolean
  hasPagination?: boolean
  hasAddButton?: boolean
  addButtonLink?: string
  searchedBy?: string
  isReportPage?: boolean
}

export function DataTable<D, V>({
                                  columns,
                                  data,
                                  hasFilter = false,
                                  hasSearchbar = false,
                                  hasPagination = false,
                                  hasAddButton = false,
                                  addButtonLink = "",
                                  searchedBy = "",
                                  isReportPage = false
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
      <div className={clsx("flex items-center", {
        "justify-between": !isReportPage,
        "justify-end gap-x-2": isReportPage
      })}>
        {hasSearchbar && (
          <Searchbar<D> table={table} searchedBy={searchedBy}/>
        )}

        <div className={"flex gap-x-2 items-center"}>
          {hasFilter && (
            <Filter table={table}/>
          )}
          {hasAddButton && (
            <AddButton link={addButtonLink}/>
          )}
        </div>
      </div>
      <div className="rounded-md border border-secondary dark:border-dark-secondary">
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
              rowCount={data.length}/>
          )}
        </div>
      </div>
    </div>
  )
}