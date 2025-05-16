"use client"
import { useRef } from 'react';
import ServiceCard from './greycard';

export default function TwoCardRow({ card1, card2 }) {
  const scrollContainerRef = useRef(null);

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Fixed two-card scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 md:space-x-12 pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* First Card - Increased from 75% to 85% on mobile */}
          <div className="flex-shrink-0 w-[85%] md:w-[calc(50%-24px)]">
            <ServiceCard {...card1} />
          </div>
          
          {/* Second Card - Increased from 75% to 85% on mobile */}
          <div className="flex-shrink-0 w-[85%] md:w-[calc(50%-24px)]">
            <ServiceCard {...card2} />
          </div>
        </div>
      </div>
    </section>
  );
}