import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface ContentSlideProps {
  slide: Slide;
}

function ImageCredit({ credit }: { credit?: string }) {
  if (!credit) return null;
  return (
    <span className="absolute bottom-1 right-2 text-xs text-slate-400/60 bg-black/70 px-2 py-0.5 rounded">
      {credit}
    </span>
  );
}

export function ContentSlide({ slide }: ContentSlideProps) {
  const hasImage = slide.image?.url;
  const imagePosition = slide.image?.position || 'right';

  // Background image layout
  if (hasImage && imagePosition === 'background') {
    return (
      <SlideWrapper slide={slide}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image!.url})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10">
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
                  className="flex items-baseline gap-4 text-lg md:text-xl text-slate-300"
                >
                  <span className="text-cyan-400 text-sm">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ImageCredit credit={slide.image?.credit} />
      </SlideWrapper>
    );
  }

  // Side-by-side layout (left or right image)
  if (hasImage && (imagePosition === 'right' || imagePosition === 'left')) {
    const contentOrder = imagePosition === 'right' ? 'order-1' : 'order-2';
    const imageOrder = imagePosition === 'right' ? 'order-2' : 'order-1';

    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full">
          <div className={`flex-1 ${contentOrder}`}>
            {slide.title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-white">
                {slide.title}
              </h2>
            )}
            {slide.content && (
              <p className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-6 leading-relaxed">
                {slide.content}
              </p>
            )}
            {slide.bullets && slide.bullets.length > 0 && (
              <ul className="space-y-3">
                {slide.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-base md:text-lg lg:text-xl text-slate-300"
                  >
                    <span className="text-cyan-400 text-sm">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={`flex-1 ${imageOrder} relative`}>
            <img
              src={slide.image!.url}
              alt={slide.image!.alt}
              className="rounded-lg shadow-2xl max-h-[60vh] w-full object-cover"
              style={{ backgroundColor: slide.image!.bgColor || 'transparent' }}
            />
            {slide.image?.caption && (
              <p className="text-sm text-slate-400 mt-2 text-center italic">
                {slide.image.caption}
              </p>
            )}
            <ImageCredit credit={slide.image?.credit} />
          </div>
        </div>
      </SlideWrapper>
    );
  }

  // Bottom image layout
  if (hasImage && imagePosition === 'bottom') {
    return (
      <SlideWrapper slide={slide}>
        <div className="flex flex-col h-full">
          <div className="mb-6">
            {slide.title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">
                {slide.title}
              </h2>
            )}
            {slide.content && (
              <p className="text-lg md:text-xl text-slate-200 mb-4 leading-relaxed max-w-4xl">
                {slide.content}
              </p>
            )}
            {slide.bullets && slide.bullets.length > 0 && (
              <ul className="space-y-2">
                {slide.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-base md:text-lg text-slate-300"
                  >
                    <span className="text-cyan-400 text-sm">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative flex-1 flex items-center justify-center">
            <img
              src={slide.image!.url}
              alt={slide.image!.alt}
              className="rounded-lg shadow-2xl max-h-[40vh] w-auto object-contain"
            />
            {slide.image?.caption && (
              <p className="absolute -bottom-6 left-0 right-0 text-sm text-slate-400 text-center italic">
                {slide.image.caption}
              </p>
            )}
            <ImageCredit credit={slide.image?.credit} />
          </div>
        </div>
      </SlideWrapper>
    );
  }

  // Default: no image
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
                className="flex items-baseline gap-4 text-lg md:text-xl text-slate-300"
              >
                <span className="text-cyan-400 text-sm">●</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SlideWrapper>
  );
}
