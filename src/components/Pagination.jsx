const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getVisiblePages = () => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        if (currentPage === 1) {
            return [1, 2, 3];
        } else if (currentPage === totalPages) {
            return [totalPages - 2, totalPages - 1, totalPages];
        } else {
            return [currentPage - 1, currentPage, currentPage + 1];
        }
    };

    const visiblePages = getVisiblePages();

    return (
        <div className="flex items-center my-4 gap-2">
            {visiblePages.map(page => (
                <button
                    key={page}
                    className={`py-2 px-3 text-base bg-[#f4f4f4] border border-[#ccc] rounded-md cursor-pointer transition-all ${currentPage === page ? 'bg-[#28a745] text-[#fff] border-[#28a745]' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
