import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PaginationType } from "@/components/layout/data-table";


interface PaginationProps {
  pagination: PaginationType
  setPagination: (pagination: PaginationType) => void;
  rowCount: number,
  leftVisiblePages: number
  rightVisiblePages: number
}

export function Pagination({
                             pagination,
                             setPagination,
                             rowCount,
                             leftVisiblePages,
                             rightVisiblePages
                           }: PaginationProps) {
  const [pageCount, setPageCount] = useState(Math.ceil(rowCount / pagination.pageSize))


  function nextPage() {
    return { pageIndex: pagination.pageIndex + 1, pageSize: pagination.pageSize };
  }

  function prevPage() {
    return { pageIndex: pagination.pageIndex - 1, pageSize: pagination.pageSize };
  }

  function isLastPage() {
    return pagination.pageIndex + 1 === pageCount;
  }

  function isFirstPage() {
    return pagination.pageIndex === 0;
  }

  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setPagination(prevPage())}
        disabled={isFirstPage()}
      >
        {"<"}
      </Button>
      {

      }
      <Button
        variant="outline"
        size="sm"
        onClick={() => setPagination(nextPage())}
        disabled={isLastPage()}
      >
        {">"}
      </Button>
    </div>
  )
}