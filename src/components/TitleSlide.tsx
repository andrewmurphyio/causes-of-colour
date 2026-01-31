import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface TitleSlideProps {
  slide: Slide;
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <SlideWrapper slide={slide}>
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent leading-tight">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light">
            {slide.subtitle}
          </p>
        )}
        {slide.contact && (
          <p className="mt-8 text-lg md:text-xl text-slate-400">
            {slide.contact}
          </p>
        )}
      </div>
    </SlideWrapper>
  );
}
