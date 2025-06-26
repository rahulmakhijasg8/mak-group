"use client"
import { useRef } from 'react';
import ServiceCard from './greycard';

export default function FiveCardRow({ cards }) {
  const scrollContainerRef = useRef(null);

  return (
    <section className="w-full py-8 md:py-12 px-4">
      <div className=" mx-auto">
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