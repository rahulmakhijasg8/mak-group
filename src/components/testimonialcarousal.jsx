// TestimonialCarousel.jsx
import { useRef } from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialCarousel({ testimonials }) {
  const scrollContainerRef = useRef(null);

  return (
    <section className="w-full py-8 md:py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-6 -mx-4 px-4 snap-x scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {Array.isArray(testimonials) && testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="snap-start flex-shrink-0 w-[85%] md:w-[400px]"
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