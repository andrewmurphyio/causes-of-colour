import type { ReactNode } from 'react';
import type { Slide } from '../types';

interface SlideWrapperProps {
  slide: Slide;
  children: ReactNode;
}

const backgroundClasses: Record<string, string> = {
  dark: 'bg-slate-900',
  gradient: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
  light: 'bg-slate-100 text-slate-900',
  accent: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900',
};

export function SlideWrapper({ slide, children }: SlideWrapperProps) {
  const bgClass = backgroundClasses[slide.background || 'dark'];

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 ${bgClass} text-white transition-all duration-500`}
    >
      <div className="w-full max-w-[90%]">{children}</div>
    </div>
  );
}
