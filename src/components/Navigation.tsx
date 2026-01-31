interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export function Navigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: NavigationProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-sm text-slate-300 font-mono">
          {currentSlide + 1} / {totalSlides}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-3 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-6 right-6 text-xs text-slate-500 hidden md:block">
        ← → or Space to navigate
      </div>
    </>
  );
}
