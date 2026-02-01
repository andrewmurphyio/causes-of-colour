import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface TableSlideProps {
  slide: Slide;
}

export function TableSlide({ slide }: TableSlideProps) {
  const hasImage = slide.image?.url;

  return (
    <SlideWrapper slide={slide}>
      <div>
        {slide.title && (
          <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">
            {slide.title}
          </h2>
        )}
        <div className={hasImage ? 'flex flex-col lg:flex-row gap-6 lg:gap-8' : ''}>
          {slide.tableHeaders && slide.tableRows && (
            <div className={`overflow-x-auto ${hasImage ? 'lg:flex-1' : ''}`}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-600">
                    {slide.tableHeaders.map((header, index) => (
                      <th
                        key={index}
                        className="py-3 px-3 text-xs md:text-sm font-semibold text-cyan-400 uppercase tracking-wide"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slide.tableRows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`py-3 px-3 text-xs md:text-sm ${
                            cellIndex === 0
                              ? 'text-white font-medium'
                              : 'text-slate-300'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {hasImage && (
            <div className="lg:w-80 relative flex-shrink-0 h-full">
              <img
                src={slide.image!.url}
                alt={slide.image!.alt}
                className="rounded-lg shadow-2xl w-full h-full object-cover object-center"
                style={slide.image!.objectPosition ? { objectPosition: slide.image!.objectPosition } : undefined}
              />
              {slide.image?.caption && (
                <p className="text-xs text-slate-400 mt-2 text-center italic">
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
      </div>
    </SlideWrapper>
  );
}
