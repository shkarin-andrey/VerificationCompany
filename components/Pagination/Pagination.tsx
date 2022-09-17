import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { PaginationProps } from "./Pagination.interface";

const Pagination: FC<PaginationProps> = ({
  setPage,
  pageCount,
  pageRangeDisplayed = 2,
}) => {
  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return (
    <nav className="rounded-full border shadow px-2">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel="<"
        className={"flex items-center"}
        disabledLinkClassName="cursor-not-allowed text-gray-400 hover:text-gray-400"
        pageClassName={"hover:text-blue-500"}
        activeClassName={
          "bg-blue-500 text-white hover:text-white rounded-lg shadow shadow-blue-500 transition-colors duration-500"
        }
        pageLinkClassName={
          "flex justify-center items-center px-2 py-1 text-xs sm:text-base"
        }
        previousLinkClassName={
          "flex justify-center items-center sm:px-2 sm:py-1 hover:text-blue-500"
        }
        nextLinkClassName={
          "flex justify-center items-center sm:px-2 sm:py-1 hover:text-blue-500"
        }
        breakLinkClassName={
          "flex justify-center items-end sm:px-2 sm:py-1 hover:text-blue-500"
        }
      />
    </nav>
  );
};

export default Pagination;
