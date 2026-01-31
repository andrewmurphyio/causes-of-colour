import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface QuoteSlideProps {
  slide: Slide;
}

export function QuoteSlide({ slide }: QuoteSlideProps) {
  return (
    <SlideWrapper slide={slide}>
      <div className="text-center">
        <div className="text-6xl md:text-8xl text-cyan-500/30 font-serif mb-4">"</div>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-4xl mx-auto italic">
          {slide.quote}
        </blockquote>
        {slide.attribution && (
          <p className="mt-8 text-lg text-slate-400">— {slide.attribution}</p>
        )}
        <div className="text-6xl md:text-8xl text-cyan-500/30 font-serif mt-4 rotate-180">"</div>
      </div>
    </SlideWrapper>
  );
}
