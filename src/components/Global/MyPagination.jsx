import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function MyPagination({ totalPosts, postsPerPage, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  const handlePageClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };
  return (
    <div className={"mt-6"}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <div onClick={handlePrev}>
              <PaginationPrevious
                className={`hover:bg-caribbean-current dark:hover:bg-turquoise/70 hover:text-blue-100 ${
                  currentPage === 1 && "opacity-50 cursor-not-allowed"
                }`}
              />
            </div>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationLink
              href="#"
              className={
                "bg-caribbean-current dark:bg-turquoise/70 hover:bg-gunmetal/70 dark:hover:bg-caribbean-current text-blue-100 hover:text-blue-100"
              }
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className={
                "hover:bg-caribbean-current dark:hover:bg-turquoise/70 hover:text-blue-100"
              }
            >
              2
            </PaginationLink>
          </PaginationItem> */}
          {pageNumbers.map((number) => (
            <PaginationItem key={number}>
              <div onClick={() => handlePageClick(number)}>
                <PaginationLink
                  className={`hover:bg-caribbean-current dark:hover:bg-turquoise/70 hover:text-blue-100 ${
                    currentPage === number &&
                    "bg-caribbean-current dark:bg-turquoise/70 hover:bg-gunmetal/70 dark:hover:bg-caribbean-current text-blue-100 hover:text-blue-100"
                  }`}
                >
                  {number}
                </PaginationLink>
              </div>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <div onClick={handleNext}>
              <PaginationNext
                className={`hover:bg-caribbean-current dark:hover:bg-turquoise/70 hover:text-blue-100 ${
                  currentPage === totalPages && "opacity-50 cursor-not-allowed"
                }`}
              />
            </div>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
