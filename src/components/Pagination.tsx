import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="bg-white ...">
    <div className="flex justify-center items-center py-8">
      {/* Left Arrow */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded border text-gray-500 mr-2"
        tabIndex={-1}
        type="button"
      >
        <ChevronLeft />
      </button>
      {/* Page Numbers */}
      <div className="flex gap-2">
        {/* Page 1: Always active/filled */}
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-black bg-black text-white text-base font-bold"
          tabIndex={-1}
          type="button"
        >
          1
        </button>
        {/* Pages 2-11: only show circle on hover */}
        {[...Array(10)].map((_, i) => (
          <button
            key={i + 2}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center text-base 
              bg-white text-gray-800 
              hover:border-2 hover:border-black hover:bg-black hover:text-white
              border border-transparent
              transition
            `}
            tabIndex={-1}
            type="button"
          >
            {i + 2}
          </button>
        ))}
        <span className="w-10 h-10 flex items-center justify-center text-gray-500 select-none">...</span>
        <button
          className={`
            w-10 h-10 rounded-full flex items-center justify-center text-base
            bg-white text-gray-800 
            hover:border-2 hover:border-black hover:bg-black hover:text-white
            border border-transparent
            transition
          `}
          tabIndex={-1}
          type="button"
        >
          150
        </button>
      </div>
      {/* Right Arrow */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded border text-gray-500 ml-2"
        tabIndex={-1}
        type="button"
      >
        <ChevronRight />
      </button>
    </div>
    </div>
  );
}
