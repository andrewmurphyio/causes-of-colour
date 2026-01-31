import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface ComparisonSlideProps {
  slide: Slide;
}

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  return (
    <SlideWrapper slide={slide}>
      <div>
        {slide.title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-display text-white text-center">
            {slide.title}
          </h2>
        )}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {slide.leftColumn && (
            <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-amber-400 font-display">
                {slide.leftColumn.title}
              </h3>
              <ul className="space-y-4">
                {slide.leftColumn.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-slate-300"
                  >
                    <span className="text-amber-400 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {slide.rightColumn && (
            <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-400 font-display">
                {slide.rightColumn.title}
              </h3>
              <ul className="space-y-4">
                {slide.rightColumn.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-slate-300"
                  >
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </SlideWrapper>
  );
}
