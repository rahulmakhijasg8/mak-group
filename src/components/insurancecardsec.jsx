import InsuranceCard from "./insurancecard"; // Import the custom card

export default function GridItemsSection({ cards, cardWidth, page}) {

  return (
    <section className="w-full py-8 md:py-12 px-6 md:px-12">
      <div className="max-w-full mx-auto">

        {/* Mobile: Column layout with spacing */}
        <div className="flex flex-col md:hidden space-y-6">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={index} className={`w-[90%] h-[250px] flex justify-center mx-auto`}>
              <InsuranceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
                linkbtn={card.linkbtn}
                accentColor={card.accentColor}
              />
            </div>
          ))}
        </div>

        {/* Desktop: Row layout with spacing */}
        <div className={`hidden md:flex justify-center flex-row ${page === 'life' ? 'space-x-20' : 'space-x-5'}`}>
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={index} className={`${page === 'life' ? 'w-[28%]' : 'w-[30%]'} h-[280px] `}>
              <InsuranceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
                linkbtn={card.linkbtn}
                accentColor={card.accentColor}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
