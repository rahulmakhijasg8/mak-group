"use client"
import { useRef, useState, useEffect } from 'react';
import ServiceCard from './greycard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FiveCardRow({ cards }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to show/hide buttons
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    checkScrollPosition();
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  // Custom smooth scroll with speed control
  const smoothScrollTo = (container, targetScrollLeft, duration = 200) => {
    const startScrollLeft = container.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutQuad = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      container.scrollLeft = startScrollLeft + distance * easeInOutQuad;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Calculate one card width + gap
    const cardWidth = container.querySelector('div').offsetWidth;
    const gap = 32; // space-x-8 = 32px on md screens, space-x-6 = 24px on smaller
    const scrollAmount = cardWidth + gap;
    
    const targetScrollLeft = container.scrollLeft - scrollAmount;
    smoothScrollTo(container, Math.max(0, targetScrollLeft), 350); // 250ms duration
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Calculate one card width + gap
    const cardWidth = container.querySelector('div').offsetWidth;
    const gap = 32; // space-x-8 = 32px on md screens, space-x-6 = 24px on smaller
    const scrollAmount = cardWidth + gap;
    
    const targetScrollLeft = container.scrollLeft + scrollAmount;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    smoothScrollTo(container, Math.min(maxScrollLeft, targetScrollLeft), 350); // 250ms duration
  };

  return (
    <section className="w-full py-8 md:py-12 px-4">
      <div className="mx-auto relative">
        {/* Left scroll button - Desktop only */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
        )}

        {/* Right scroll button - Desktop only */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        )}

        {/* Five-card scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pl-12 space-x-6 md:space-x-8 pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[85%] md:w-[80%] lg:w-[calc(50%-44px)]">
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}