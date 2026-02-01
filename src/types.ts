export type SlideType =
  | 'title'
  | 'section'
  | 'content'
  | 'comparison'
  | 'table'
  | 'quote'
  | 'image-focus';

export interface SlideImage {
  url: string;
  alt: string;
  caption?: string;
  position?: 'right' | 'left' | 'background' | 'bottom';
  credit?: string;
  objectPosition?: string; // e.g. 'center 60%' to shift image down
  bgColor?: string; // e.g. 'white' for transparent images
  overlayOpacity?: number; // 0-1, default 0.6 for background images
}

export interface Slide {
  id: string;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string | string[];
  bullets?: string[];
  leftColumn?: { title: string; items: string[]; image?: SlideImage };
  rightColumn?: { title: string; items: string[]; image?: SlideImage };
  tableHeaders?: string[];
  tableRows?: string[][];
  quote?: string;
  attribution?: string;
  background?: 'dark' | 'gradient' | 'light' | 'accent';
  accentColor?: string;
  contact?: string;
  image?: SlideImage;
  // Multiple images: cycle through on each build (replaces single image)
  images?: SlideImage[];
  // Overlay images: shown on top of background image on subsequent builds
  overlayImages?: SlideImage[];
}
