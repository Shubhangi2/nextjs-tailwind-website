import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  changePage: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, changePage }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 7) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <button
        onClick={() => currentPage > 1 && changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        aria-label="Previous page"
      >
        Previous
      </button>
      
      <div className="flex items-center space-x-1">
        {getPageNumbers().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === '...' ? (
              <span className="px-3 py-1">...</span>
            ) : (
              <button
                onClick={() => typeof pageNumber === 'number' && changePage(pageNumber)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
                  ${currentPage === pageNumber 
                    ? 'bg-orange-600 text-white' 
                    : 'hover:bg-gray-100'
                  }`}
              >
                {pageNumber}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => currentPage < totalPages && changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;