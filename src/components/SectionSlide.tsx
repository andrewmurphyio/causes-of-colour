import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';
import { assetUrl } from '../utils';

interface SectionSlideProps {
  slide: Slide;
  build?: number;
}

const accentColors: Record<string, string> = {
  orange: 'from-orange-500 to-red-500',
  green: 'from-green-500 to-emerald-500',
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  cyan: 'from-cyan-500 to-blue-500',
};

export function SectionSlide({ slide, build = 0 }: SectionSlideProps) {
  const accentGradient = slide.accentColor
    ? accentColors[slide.accentColor] || 'from-white to-slate-300'
    : 'from-white to-slate-300';

  const hasBackgroundImage = slide.image?.url;

  // For text reveal: build 0 = nothing, build 1 = all text
  const showText = !slide.textReveal || build >= 1;

  // No overlay when no text is shown (textReveal mode at build 0)
  const overlayOpacity = slide.textReveal && !showText ? 0 : 0.5;

  return (
    <SlideWrapper slide={slide}>
      {hasBackgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${assetUrl(slide.image!.url)})`,
              backgroundPosition: slide.image!.objectPosition || 'center',
            }}
          />
          <div
            className="absolute inset-0 bg-black transition-opacity duration-300"
            style={{ opacity: overlayOpacity }}
          />
          {slide.image?.credit && (
            <span className="absolute bottom-4 right-4 text-xs text-slate-400/60 bg-black/70 px-2 py-0.5 rounded z-10">
              {slide.image.credit}
            </span>
          )}
        </>
      )}
      <div className="text-center relative z-10">
        {slide.title && showText && (
          <p className={`text-xl md:text-2xl uppercase tracking-widest mb-4 font-medium bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
            {slide.title}
          </p>
        )}
        {slide.subtitle && showText && (
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight">
            {slide.subtitle}
          </h2>
        )}
      </div>
    </SlideWrapper>
  );
}
