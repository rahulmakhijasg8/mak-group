"use client"
import { useRef } from 'react';
import ServiceCard from './greycard';

export default function TwoCardRow({ card1, card2, cards = [] }) {
  const scrollContainerRef = useRef(null);
  
  // Determine which cards to use
  const allCards = cards.length > 0 ? cards : [card1, card2].filter(Boolean);
  
  // Split cards into rows of 2
  const cardRows = [];
  for (let i = 0; i < allCards.length; i += 2) {
    cardRows.push(allCards.slice(i, i + 2));
  }

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-[60px] lg:px-[80px]">
      <div className="max-w-7xl mx-auto">
        {cardRows.map((row, rowIndex) => (
          <div key={rowIndex} className={rowIndex > 0 ? "mt-8 md:mt-12" : ""}>
            {/* Card row container */}
            <div 
              ref={rowIndex === 0 ? scrollContainerRef : null}
              className="flex overflow-x-auto space-x-6 md:space-x-[50px] pb-6 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {row.map((card, cardIndex) => (
                <div 
                  key={cardIndex} 
                  className={`flex-shrink-0 ${
                    row.length === 1 
                      ? "w-[85%] md:w-[calc(50%-24px)]" // Single card in row
                      : "w-[85%] md:w-[calc(50%-24px)]" // Two cards in row
                  }`}
                >
                  <ServiceCard {...card} />
                </div>
              ))}
              
              {/* Fill empty space if only one card in the last row on desktop */}
              {row.length === 1 && (
                <div className="hidden md:block flex-shrink-0 w-[calc(50%-24px)]"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}