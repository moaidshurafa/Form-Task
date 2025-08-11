const PreviousAndNext = ({ setCurrentPage, currentPage, totalPages }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded bg-blue-600 text-white disabled:bg-blue-300"
      >
        previous
      </button>

      <span className="flex items-center px-3">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded bg-blue-600 text-white disabled:bg-blue-300"
      >
        next
      </button>
    </div>
  );
};
export default PreviousAndNext;
