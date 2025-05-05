// StatsGrid.jsx
import StatsCard from './StatsCard';

export default function StatsGrid({ cards }) {
  return (
    <section className="w-full py-8 md:py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Column layout with spacing */}
        <div className="flex flex-col md:hidden space-y-6">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={index} className="w-[85%] mx-auto">
              <StatsCard 
                iconSrc={card.iconSrc}
                iconAlt={card.iconAlt}
                text={card.text}
              />
            </div>
          ))}
        </div>
        
        {/* Desktop: Row layout with spacing */}
        <div className="hidden md:flex flex-row justify-between space-x-8">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={index} className="w-1/5">
              <StatsCard 
                iconSrc={card.iconSrc}
                iconAlt={card.iconAlt}
                text={card.text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}