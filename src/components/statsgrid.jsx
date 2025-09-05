// StatsGrid.jsx
import StatsCard from './statscard';

export default function StatsGrid({ cards }) {
  const renderCard = (card, index) => {
    const cardElement = (
      <StatsCard 
        iconSrc={card.iconSrc}
        iconAlt={card.iconAlt}
        text={card.text}
      />
    );

    // If card has a link, wrap it in an anchor tag
    if (card.link) {
      return (
        <a href={card.link} className='block w-full' target='_blank' rel='noopener noreferrer'>
          {cardElement}
        </a>
      );
    }

    // If no link, return the card wrapped in a div
    return cardElement;
  };

  return (
    <section className="w-full py-8 md:py-12 px-6 md:px-8 lg:px-12">
      <div className="flex justify-center">
        {/* Mobile: Column layout with spacing */}
        <div className="flex flex-col md:hidden space-y-5">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={`mobile-${index}`} className="w-full">
              {renderCard(card, index)}
            </div>
          ))}
        </div>
        
        {/* Desktop: Single row flex layout with responsive gaps */}
        <div className="hidden md:flex gap-2 lg:gap-4 xl:gap-6">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={`desktop-${index}`} className="flex-1 min-w-0">
              {renderCard(card, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}