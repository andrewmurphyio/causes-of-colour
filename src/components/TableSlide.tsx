import type { Slide } from '../types';
import { SlideWrapper } from './SlideWrapper';

interface TableSlideProps {
  slide: Slide;
}

export function TableSlide({ slide }: TableSlideProps) {
  return (
    <SlideWrapper slide={slide}>
      <div>
        {slide.title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display text-white">
            {slide.title}
          </h2>
        )}
        {slide.tableHeaders && slide.tableRows && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-600">
                  {slide.tableHeaders.map((header, index) => (
                    <th
                      key={index}
                      className="py-4 px-4 text-sm md:text-base font-semibold text-cyan-400 uppercase tracking-wide"
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
                        className={`py-4 px-4 text-sm md:text-base ${
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
      </div>
    </SlideWrapper>
  );
}
