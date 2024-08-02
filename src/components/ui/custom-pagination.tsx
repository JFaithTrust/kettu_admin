import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import {PaginationType} from "@/types";


interface PaginationProps {
  pagination: PaginationType
  setPagination: (pagination: PaginationType) => void;
  rowCount: number
}

export function CustomPagination(props: PaginationProps) {
  const [pageCount, setPageCount] = useState(Math.ceil(props.rowCount / props.pagination.pageSize))
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.rowCount / props.pagination.pageSize); i++) {
    pageNumbers.push(i);
  }

  const maxPageNum = 5; // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible

  let activePages = pageNumbers.slice(
    Math.max(0, props.pagination.pageIndex - pageNumLimit),
    Math.min(props.pagination.pageIndex + pageNumLimit + 1, pageNumbers.length)
  );


  function nextPage() {
    if (!isLastPage())
      props.setPagination({ pageIndex: props.pagination.pageIndex + 1, pageSize: props.pagination.pageSize });
  }

  function prevPage() {
    if (!isFirstPage())
      props.setPagination({ pageIndex: props.pagination.pageIndex - 1, pageSize: props.pagination.pageSize });
  }

  function isLastPage() {
    return props.pagination.pageIndex + 1 === pageCount;
  }

  function isFirstPage() {
    return props.pagination.pageIndex === 0;
  }

  function setCurrentPage(page: number) {
    props.setPagination({ pageIndex: page - 1, pageSize: props.pagination.pageSize });
  }

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        // className={currentPage === page ? "bg-blue-500 rounded-lg text-white border border-blue-500 hover:bg-blue-500" : "bg-white rounded-lg text-blue-500 border border-blue-500 hover:text-blue-500"}
      >
        <PaginationLink
          onClick={() => setCurrentPage(page)}
          className="cursor-pointer"
          isActive={props.pagination.pageIndex === page - 1}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      );
    }

    return renderedPages;
  };

  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={prevPage}
              disabled={isFirstPage()}
            />
          </PaginationItem>

          {renderPages()}

          <PaginationItem>
            <PaginationNext
              onClick={nextPage}
              disabled={isLastPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}