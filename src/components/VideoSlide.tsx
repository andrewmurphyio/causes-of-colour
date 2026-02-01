import type { Slide } from '../types';

interface VideoSlideProps {
  slide: Slide;
  build?: number;
}

function navigatePrevious() {
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
}

function navigateNext() {
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
}

export function VideoSlide({ slide, build = 0 }: VideoSlideProps) {
  if (!slide.videoId) {
    return <div className="h-screen w-screen bg-slate-900" />;
  }

  const isPlaying = build >= 1;

  // Build 0: show thumbnail with play button overlay
  if (!isPlaying) {
    return (
      <div
        className="h-screen w-screen bg-black relative group cursor-pointer"
        onClick={navigateNext}
      >
        <img
          src={`https://img.youtube.com/vi/${slide.videoId}/maxresdefault.jpg`}
          alt={slide.title || 'Video thumbnail'}
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
          <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <p className="absolute bottom-8 left-0 right-0 text-center text-white/60 text-sm">
          Click or press → to play
        </p>
      </div>
    );
  }

  // Build 1: show the actual YouTube embed with autoplay + navigation overlays
  return (
    <div className="h-screen w-screen bg-black relative">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${slide.videoId}?rel=0&modestbranding=1&autoplay=1`}
        title={slide.title || 'Video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {/* Left navigation overlay */}
      <div
        className="absolute left-0 top-0 w-16 h-full cursor-pointer group z-10 flex items-center justify-center"
        onClick={navigatePrevious}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-r-lg p-2">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>
      {/* Right navigation overlay */}
      <div
        className="absolute right-0 top-0 w-16 h-full cursor-pointer group z-10 flex items-center justify-center"
        onClick={navigateNext}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-l-lg p-2">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
