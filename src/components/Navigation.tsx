import { useState, useRef, useEffect } from 'react';
import type { Slide } from '../types';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  slides: Slide[];
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export function Navigation({
  currentSlide,
  totalSlides,
  slides,
  onPrevious,
  onNext,
  onGoToSlide,
}: NavigationProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  // Close picker on outside click or Escape
  useEffect(() => {
    if (!pickerOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPickerOpen(false);
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [pickerOpen]);

  // Scroll to current slide when picker opens
  useEffect(() => {
    if (pickerOpen && activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: 'center' });
    }
  }, [pickerOpen]);

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

        <div className="relative" ref={pickerRef}>
          <button
            onClick={() => setPickerOpen(!pickerOpen)}
            className="px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 text-sm text-slate-300 font-mono hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
          >
            {currentSlide + 1} / {totalSlides}
          </button>

          {pickerOpen && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-72 max-h-80 overflow-y-auto rounded-xl bg-slate-800/95 backdrop-blur-lg border border-slate-700 shadow-2xl">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  ref={index === currentSlide ? activeItemRef : undefined}
                  onClick={() => {
                    onGoToSlide(index);
                    setPickerOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-slate-700/60 transition-colors ${
                    index === currentSlide
                      ? 'bg-cyan-500/15 text-cyan-300'
                      : 'text-slate-300'
                  } ${slide.type === 'section' ? 'border-t border-slate-700' : ''}`}
                >
                  <span className="text-xs font-mono text-slate-500 w-6 text-right shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm truncate">
                    {slide.title || slide.id}
                  </span>
                </button>
              ))}
            </div>
          )}
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
