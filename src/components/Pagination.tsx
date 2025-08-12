import React from "react";
import { generatePageNumbers } from "../utils/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() =>
              typeof page === "number" ? onPageChange(page) : undefined
            }
            disabled={page === "..."}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              page === currentPage
                ? "bg-indigo-600 text-white"
                : page === "..."
                ? "text-gray-400 cursor-default"
                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
