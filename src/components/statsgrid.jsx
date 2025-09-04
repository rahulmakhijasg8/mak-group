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
        <a 
          href={card.link}
          target='_blank'
          className="block transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-[34px]"
        >
          {cardElement}
        </a>
      );
    }

    // If no link, return the card wrapped in a div
    return cardElement;
  };

  return (
    <section className="w-full py-8 md:py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Column layout with spacing */}
        <div className="flex flex-col md:hidden space-y-6">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={`mobile-${index}`} className="w-full flex justify-center">
              {renderCard(card, index)}
            </div>
          ))}
        </div>
        
        {/* Desktop: Row layout with spacing */}
        <div className="hidden max-w-7xl md:flex px-[16px] md:px-[60px] lg:px-[80px] flex-row justify-between space-x-5">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={`desktop-${index}`} className="w-1/5">
              {renderCard(card, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}