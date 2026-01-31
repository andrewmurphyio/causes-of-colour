import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface ContentSlideProps {
  slide: Slide;
}

export function ContentSlide({ slide }: ContentSlideProps) {
  return (
    <SlideWrapper slide={slide}>
      <div>
        {slide.title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display text-white">
            {slide.title}
          </h2>
        )}
        {slide.content && (
          <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed max-w-4xl">
            {slide.content}
          </p>
        )}
        {slide.bullets && slide.bullets.length > 0 && (
          <ul className="space-y-4">
            {slide.bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-lg md:text-xl text-slate-300"
              >
                <span className="text-cyan-400 mt-1.5 text-sm">●</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SlideWrapper>
  );
}
