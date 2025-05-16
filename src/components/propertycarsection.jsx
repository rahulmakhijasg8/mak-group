import RECard from './re';
import LICard from './lifeinsurancecard';

export default function RESection({
  title,
  subtitle,
  cards = [],
  page = 'property'
}) 
// const card = page === 'commercial' ? <LICard /> : <RECard />;

{
  // Determine grid columns class based on page type
  const gridColumnsClass = page === 'life' 
    ? "grid grid-cols-1 md:mt-[20px] md:grid-cols-4 gap-6 md:gap-4" 
    : "grid grid-cols-1 md:mt-[20px] md:grid-cols-3 gap-6 md:gap-0";

  return (
    <section style={{
        backgroundImage: "url('/greeneffect2.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'soft-light', // This helps make the effect lighter
      }} className="w-full py-12 md:py-20 px-4 md:px-12 bg-[#221241]">
      <div className="max-w-7xl mx-auto">
        {/* Integrated StackedHeading with white text colors */}
        {page === 'property' ? (title || subtitle) && (
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
        ): <section className={`w-full pt-4 md:pt-6 mb-9 md:px-12 md:mb-12`}>
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Title Column - Extreme left on desktop */}
          <div className="w-full md:w-full mb-6 md:mb-0">
            <h2 className="font-['Lexend'] text-[#FFFFFF] md:pr-[300px] font-normal text-[30px] md:text-[36px] leading-tight">
              {title}
            </h2>
          </div>
          
          {/* Description Column - Extreme right on desktop */}
          <div className="w-full md:w-5/12">
            <p className="font-['Lexend'] text-[#B7C7E7] font-normal text-[18x] md:text-[16px] max-w-md">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>}
        
        {/* Cards Container - Using dynamic grid class based on page type */}
        <div className={gridColumnsClass}>
          {cards.map((card, index) => (
            page === 'life'
            ? <LICard key={index} {...card} />
            : <RECard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}