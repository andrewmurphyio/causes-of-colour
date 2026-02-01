import type { Slide } from '../types';
import { TitleSlide } from './TitleSlide';
import { SectionSlide } from './SectionSlide';
import { ContentSlide } from './ContentSlide';
import { ComparisonSlide } from './ComparisonSlide';
import { TableSlide } from './TableSlide';
import { QuoteSlide } from './QuoteSlide';

interface SlideRendererProps {
  slide: Slide;
  build?: number;
}

export function SlideRenderer({ slide, build = 0 }: SlideRendererProps) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'section':
      return <SectionSlide slide={slide} />;
    case 'content':
      return <ContentSlide slide={slide} build={build} />;
    case 'comparison':
      return <ComparisonSlide slide={slide} />;
    case 'table':
      return <TableSlide slide={slide} />;
    case 'quote':
      return <QuoteSlide slide={slide} />;
    default:
      return <ContentSlide slide={slide} build={build} />;
  }
}
