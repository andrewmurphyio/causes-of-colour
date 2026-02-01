import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';
import { assetUrl } from '../utils';

interface QuoteSlideProps {
  slide: Slide;
}

export function QuoteSlide({ slide }: QuoteSlideProps) {
  const hasImage = slide.image?.url;
  const isBackground = slide.image?.position === 'background';

  // Background image layout
  if (hasImage && isBackground) {
    return (
      <SlideWrapper slide={slide}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${assetUrl(slide.image!.url)})`,
            backgroundPosition: slide.image!.objectPosition || 'center',
          }}
        >
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: slide.image!.overlayOpacity ?? 0.6 }}
          />
        </div>
        <div className="relative z-10 text-center">
          <div className="text-5xl md:text-6xl text-cyan-500/30 font-serif mb-2">"</div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-4xl mx-auto italic">
            {slide.quote}
          </blockquote>
          {slide.attribution && (
            <p className="mt-6 text-lg text-slate-400">— {slide.attribution}</p>
          )}
          <div className="text-5xl md:text-6xl text-cyan-500/30 font-serif mt-2 rotate-180">"</div>
        </div>
        {slide.image?.credit && (
          <span className="absolute bottom-4 right-4 text-xs text-slate-400/60 bg-black/70 px-2 py-0.5 rounded z-10">
            {slide.image.credit}
          </span>
        )}
      </SlideWrapper>
    );
  }

  // Side-by-side layout
  return (
    <SlideWrapper slide={slide}>
      <div className={hasImage ? 'flex flex-col lg:flex-row gap-8 items-center' : 'text-center'}>
        <div className={hasImage ? 'flex-1 text-center' : ''}>
          <div className="text-5xl md:text-6xl text-cyan-500/30 font-serif mb-2">"</div>
          <blockquote className={`${hasImage ? 'text-xl md:text-2xl lg:text-3xl' : 'text-2xl md:text-3xl lg:text-4xl'} text-white font-light leading-relaxed max-w-4xl mx-auto italic`}>
            {slide.quote}
          </blockquote>
          {slide.attribution && (
            <p className="mt-6 text-lg text-slate-400">— {slide.attribution}</p>
          )}
          <div className="text-5xl md:text-6xl text-cyan-500/30 font-serif mt-2 rotate-180">"</div>
        </div>
        {hasImage && (
          <div className="flex-1 relative">
            <img
              src={assetUrl(slide.image!.url)}
              alt={slide.image!.alt}
              className="rounded-lg shadow-2xl max-h-[50vh] w-auto mx-auto object-contain"
              style={slide.image!.objectPosition ? { objectPosition: slide.image!.objectPosition } : undefined}
            />
            {slide.image?.caption && (
              <p className="text-sm text-slate-400 mt-2 text-center italic">
                {slide.image.caption}
              </p>
            )}
            {slide.image?.credit && (
              <span className="absolute bottom-1 right-1 text-xs text-slate-400/60 bg-black/70 px-1.5 py-0.5 rounded">
                {slide.image.credit}
              </span>
            )}
          </div>
        )}
      </div>
    </SlideWrapper>
  );
}
