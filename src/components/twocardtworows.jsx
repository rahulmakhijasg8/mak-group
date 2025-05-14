"use client"
import { useRef } from 'react';
import ServiceCard from './greycard';

/**
 * Component that displays two rows of cards with asymmetric layouts:
 * - First row: 60% / 40% split
 * - Second row: 40% / 60% split
 * Each row fits the screen without horizontal scrolling.
 */
export default function AsymmetricCardRows({ 
  firstRowCard1, 
  firstRowCard2, 
  secondRowCard1, 
  secondRowCard2 
}) {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* First Row: 60/40 split */}
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
          {/* First Card - 60% width */}
          <div className="w-full md:w-[60%]">
            <ServiceCard {...firstRowCard1} />
          </div>
          
          {/* Second Card - 40% width */}
          <div className="w-full md:w-[40%]">
            <ServiceCard {...firstRowCard2} />
          </div>
        </div>

        {/* Second Row: 40/60 split */}
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6 mt-2">
          {/* First Card - 40% width */}
          <div className="w-full md:w-[40%]">
            <ServiceCard {...secondRowCard1} />
          </div>
          
          {/* Second Card - 60% width */}
          <div className="w-full md:w-[60%]">
            <ServiceCard {...secondRowCard2} />
          </div>
        </div>
      </div>
    </section>
  );
}