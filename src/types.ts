export type SlideType =
  | 'title'
  | 'section'
  | 'content'
  | 'comparison'
  | 'table'
  | 'quote'
  | 'image-focus';

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string | string[];
  bullets?: string[];
  leftColumn?: { title: string; items: string[] };
  rightColumn?: { title: string; items: string[] };
  tableHeaders?: string[];
  tableRows?: string[][];
  quote?: string;
  attribution?: string;
  background?: 'dark' | 'gradient' | 'light' | 'accent';
  accentColor?: string;
  contact?: string;
}
