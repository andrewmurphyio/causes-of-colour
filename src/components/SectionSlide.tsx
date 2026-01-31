import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface SectionSlideProps {
  slide: Slide;
}

const accentColors: Record<string, string> = {
  orange: 'from-orange-500 to-red-500',
  green: 'from-green-500 to-emerald-500',
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  cyan: 'from-cyan-500 to-blue-500',
};

export function SectionSlide({ slide }: SectionSlideProps) {
  const accentGradient = slide.accentColor
    ? accentColors[slide.accentColor] || 'from-white to-slate-300'
    : 'from-white to-slate-300';

  return (
    <SlideWrapper slide={slide}>
      <div className="text-center">
        {slide.title && (
          <p className={`text-xl md:text-2xl uppercase tracking-widest mb-4 font-medium bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
            {slide.title}
          </p>
        )}
        {slide.subtitle && (
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight">
            {slide.subtitle}
          </h2>
        )}
      </div>
    </SlideWrapper>
  );
}
