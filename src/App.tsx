import { useState, useEffect, useCallback } from 'react';
import { slides } from './slides';
import { SlideRenderer } from './components/SlideRenderer';
import { Navigation } from './components/Navigation';

function getSlideFromHash(): number {
  const hash = window.location.hash.slice(1);
  const slideNum = parseInt(hash, 10);
  if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= slides.length) {
    return slideNum - 1; // Convert to 0-indexed
  }
  return 0;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(getSlideFromHash);

  // Update URL when slide changes
  useEffect(() => {
    const newHash = `#${currentSlide + 1}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash);
    }
  }, [currentSlide]);

  // Listen for browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentSlide(getSlideFromHash());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.max(0, Math.min(index, slides.length - 1)));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          event.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          event.preventDefault();
          goToPrevious();
          break;
        case 'Home':
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Handle touch/swipe navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNext, goToPrevious]);

  const slide = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div
        key={slide.id}
        className="animate-fade-in"
      >
        <SlideRenderer slide={slide} />
      </div>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
      />
    </div>
  );
}

export default App;
