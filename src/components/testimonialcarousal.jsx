"use client"

import { useRef, useState, useEffect } from 'react';
import TestimonialCard from './testimonialcard';

export default function TestimonialCarousel({ testimonials }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position to show/hide navigation buttons
  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Update scroll buttons on mount and when testimonials change
  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [testimonials]);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8; // Scroll about 80% of container width
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8; // Scroll about 80% of container width
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full mt-[32px] md:mt-[60px]">
      <div className="max-w-7xl mx-auto relative">
        {/* Left Navigation Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-200 border border-gray-200"
            aria-label="Scroll left"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Right Navigation Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-200 border border-gray-200"
            aria-label="Scroll right"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-6 px-3 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {Array.isArray(testimonials) && testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[85%] md:w-[400px]"
            >
              <TestimonialCard 
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                avatarSrc={testimonial.avatarSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}