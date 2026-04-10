import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getVisiblePages = (currentPage, totalPages) => {
    const delta = 1; // pages before & after current
    const range = [];

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    // हमेशा पहला page
    range.push(1);

    // left dots
    if (left > 2) {
      range.push("...");
    }

    // middle pages
    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    // right dots
    if (right < totalPages - 1) {
      range.push("...");
    }

    // last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <nav aria-label="Pagination">
      <ul className="flex items-center -space-x-px text-sm">

        {/* Previous */}
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className={`flex items-center justify-center px-3 h-9 border border-gray-300 rounded-l-md
              ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="flex items-center justify-center w-9 h-9 text-gray-500">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={`flex items-center justify-center w-9 h-9 border border-gray-300
                  ${
                    page === currentPage
                      ? "bg-blue-500 text-white z-10"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className={`flex items-center justify-center px-3 h-9 border border-gray-300 rounded-r-md
              ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            Next
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Pagination;