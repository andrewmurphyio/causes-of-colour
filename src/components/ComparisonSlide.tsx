import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';
import { assetUrl } from '../utils';

interface ComparisonSlideProps {
  slide: Slide;
}

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  return (
    <SlideWrapper slide={slide}>
      <div>
        {slide.title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display text-white text-center">
            {slide.title}
          </h2>
        )}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {slide.leftColumn && (
            <div className="bg-slate-800/50 rounded-2xl p-5 md:p-6 border border-slate-700">
              {slide.leftColumn.image && (
                <div className="mb-4 relative">
                  <img
                    src={assetUrl(slide.leftColumn.image.url)}
                    alt={slide.leftColumn.image.alt}
                    className="w-full h-32 md:h-40 object-cover rounded-lg"
                    style={slide.leftColumn.image.objectPosition ? { objectPosition: slide.leftColumn.image.objectPosition } : undefined}
                  />
                  {slide.leftColumn.image.credit && (
                    <span className="absolute bottom-1 right-1 text-xs text-slate-400/60 bg-black/70 px-1.5 py-0.5 rounded">
                      {slide.leftColumn.image.credit}
                    </span>
                  )}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-amber-400 font-display">
                {slide.leftColumn.title}
              </h3>
              <ul className="space-y-3">
                {slide.leftColumn.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-base md:text-lg text-slate-300"
                  >
                    <span className="text-amber-400">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {slide.rightColumn && (
            <div className="bg-slate-800/50 rounded-2xl p-5 md:p-6 border border-slate-700">
              {slide.rightColumn.image && (
                <div className="mb-4 relative">
                  <img
                    src={assetUrl(slide.rightColumn.image.url)}
                    alt={slide.rightColumn.image.alt}
                    className="w-full h-32 md:h-40 object-cover rounded-lg"
                    style={slide.rightColumn.image.objectPosition ? { objectPosition: slide.rightColumn.image.objectPosition } : undefined}
                  />
                  {slide.rightColumn.image.credit && (
                    <span className="absolute bottom-1 right-1 text-xs text-slate-400/60 bg-black/70 px-1.5 py-0.5 rounded">
                      {slide.rightColumn.image.credit}
                    </span>
                  )}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-400 font-display">
                {slide.rightColumn.title}
              </h3>
              <ul className="space-y-3">
                {slide.rightColumn.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-base md:text-lg text-slate-300"
                  >
                    <span className="text-cyan-400">→</span>
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
