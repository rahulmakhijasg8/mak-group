import InsuranceCard from "./insurancecard"; // Import the custom card

export default function GridItemsSection({ cards, cardWidth, page}) {

  return (
    <section className="w-full max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-[60px] lg:px-[80px]">
      <div className="max-w-full mx-auto">

        {/* Mobile: Column layout with spacing */}
        <div className="flex flex-col md:hidden space-y-6">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div key={index} className={`w-[100%] h-auto flex justify-center mx-auto`}>
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
        <div className="hidden max-w-7xl md:block">
          {page === 'life' ? (
            // Life page: 4 cards in a single row
            <div className="flex justify-center flex-row space-x-6">
              {Array.isArray(cards) && cards.map((card, index) => (
                <div key={index} className="w-[32%] h-auto">
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
          ) : cards && cards.length >= 5 ? (
            // More than 4 cards: Custom 3-2 layout
            <div className="space-y-6">
              {/* First row: 3 cards */}
              <div className="flex justify-center flex-row space-x-5">
                {cards.slice(0, 3).map((card, index) => (
                  <div key={index} className="w-[31%] h-auto">
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
              
              {/* Second row: 2 cards centered */}
              <div className="flex justify-center flex-row space-x-5">
                <div className="w-[31%] h-auto">
                  {/* 4th card - centered positioning */}
                  <InsuranceCard
                    icon={cards[3].icon}
                    title={cards[3].title}
                    description={cards[3].description}
                    link={cards[3].link}
                    linkbtn={cards[3].linkbtn}
                    accentColor={cards[3].accentColor}
                  />
                </div>
                <div className="w-[31%] h-auto">
                  {/* 5th card - centered positioning */}
                  <InsuranceCard
                    icon={cards[4].icon}
                    title={cards[4].title}
                    description={cards[4].description}
                    link={cards[4].link}
                    linkbtn={cards[4].linkbtn}
                    accentColor={cards[4].accentColor}
                  />
                </div>
              </div>
              
              {/* Additional rows for remaining cards if any */}
              {cards.length > 5 && (
                <div className="flex justify-center flex-row space-x-5 flex-wrap">
                  {cards.slice(5).map((card, index) => (
                    <div key={index + 5} className="w-[31%] h-auto mb-6">
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
              )}
            </div>
          ) : (
            // 4 or fewer cards: Standard single row layout
            <div className="flex justify-center flex-row space-x-5">
              {Array.isArray(cards) && cards.map((card, index) => (
                <div key={index} className="w-[31%] h-auto">
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
          )}
        </div>

      </div>
    </section>
  );
}