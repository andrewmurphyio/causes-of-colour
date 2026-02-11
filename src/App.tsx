import { useState, useEffect, useCallback } from 'react';
import { slides } from './slides';
import type { Slide } from './types';
import { SlideRenderer } from './components/SlideRenderer';
import { Navigation } from './components/Navigation';

function getAllImageUrls(allSlides: Slide[]): string[] {
  const urls = new Set<string>();
  for (const slide of allSlides) {
    if (slide.image?.url) urls.add(slide.image.url);
    if (slide.images) for (const img of slide.images) urls.add(img.url);
    if (slide.overlayImages) for (const img of slide.overlayImages) urls.add(img.url);
    if (slide.leftColumn?.image?.url) urls.add(slide.leftColumn.image.url);
    if (slide.rightColumn?.image?.url) urls.add(slide.rightColumn.image.url);
  }
  return Array.from(urls);
}

function getSlideFromHash(): number {
  const hash = window.location.hash.slice(1);
  const slideNum = parseInt(hash, 10);
  if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= slides.length) {
    return slideNum - 1; // Convert to 0-indexed
  }
  return 0;
}

// Get max build index for a slide (based on number of images, overlays, or text reveals)
function getMaxBuild(slideIndex: number): number {
  const slide = slides[slideIndex];
  if (slide?.images && slide.images.length > 1) {
    return slide.images.length - 1;
  }
  if (slide?.overlayImages && slide.overlayImages.length > 0) {
    return slide.overlayImages.length;
  }
  // Text reveal: 1 build for all text at once
  if (slide?.textReveal) {
    return 1;
  }
  // Video: 1 build (thumbnail -> playing)
  if (slide?.type === 'video') {
    return 1;
  }
  // Animation slides: 2 builds by default (diagram → beams → absorption/reflection)
  if (slide?.type === 'animation') {
    if (slide.animationId === 'thin-film') return 3;
    return 2;
  }
  return 0;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(getSlideFromHash);
  const [currentBuild, setCurrentBuild] = useState(0);

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
      setCurrentBuild(0); // Reset build when navigating via browser
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Preload all images on mount so they're cached before slides are shown
  useEffect(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    for (const url of getAllImageUrls(slides)) {
      const img = new Image();
      img.src = `${base}${url}`;
    }
  }, []);

  const goToNext = useCallback(() => {
    const maxBuild = getMaxBuild(currentSlide);
    if (currentBuild < maxBuild) {
      // Advance to next build on same slide
      setCurrentBuild(currentBuild + 1);
    } else {
      // Move to next slide, reset build
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
        setCurrentBuild(0);
      }
    }
  }, [currentSlide, currentBuild]);

  const goToPrevious = useCallback(() => {
    if (currentBuild > 0) {
      // Go back a build on same slide
      setCurrentBuild(currentBuild - 1);
    } else if (currentSlide > 0) {
      // Go to previous slide at its final build
      const prevSlide = currentSlide - 1;
      setCurrentSlide(prevSlide);
      setCurrentBuild(getMaxBuild(prevSlide));
    }
  }, [currentSlide, currentBuild]);

  const goToSlide = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
    setCurrentSlide(clampedIndex);
    setCurrentBuild(0); // Reset to first build when jumping to slide
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
        <SlideRenderer slide={slide} build={currentBuild} />
      </div>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        slides={slides}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
      />
    </div>
  );
}

export default App;
