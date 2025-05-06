import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const canGoPrev = currentPage > 1
  const canGoNext = currentPage < totalPages

  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <button
        onClick={() => canGoPrev && onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        className={`p-2 rounded-md ${
          canGoPrev
            ? 'bg-rick-blue text-white hover:bg-opacity-90'
            : 'bg-gray-200 cursor-not-allowed'
        }`}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      <span className="font-medium text-gray-700">
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => canGoNext && onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className={`p-2 rounded-md ${
          canGoNext
            ? 'bg-rick-blue text-white hover:bg-opacity-90'
            : 'bg-gray-200 cursor-not-allowed'
        }`}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  )
}