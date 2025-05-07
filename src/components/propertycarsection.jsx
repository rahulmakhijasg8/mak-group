import RECard from './re';

export default function RESection({
  title,
  subtitle,
  cards = []
}) {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-12 bg-[#221241]">
      <div className="max-w-7xl mx-auto">
        {/* Integrated StackedHeading with white text colors */}
        {(title || subtitle) && (
          <div className="w-full py-8 md:py-8 px-6 md:px-0">
            <div className="max-w-3xl text-center mx-auto">
              <h2 className="font-['Lexend'] text-white font-normal text-[28px] md:text-[40px] leading-tight mb-4 max-w-[280px] sm:max-w-full mx-auto">
                {title}
              </h2>
              
              {subtitle && (
                <h3 className="font-['Lato'] text-white font-normal text-[16px] md:text-[18px] max-w-[300px] sm:max-w-full mx-auto">
                  {subtitle}
                </h3>
              )}
            </div>
          </div>
        )}
        
        {/* Cards Container - Row on desktop, Column on mobile */}
        <div className="grid grid-cols-1 md:mt-[20px] md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <RECard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}