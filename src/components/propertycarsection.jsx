import RECard from './re';
import LICard from './lifeinsurancecard';
import StackedHeading from './stackedheading'; // Import your StackedHeading component

export default function RESection({
  title,
  subtitle,
  cards = [],
  page = 'property'
}) {
  // Determine grid columns class based on page type
  const gridColumnsClass = page === 'life' 
    ? "grid grid-cols-1 md:mt-[20px] md:grid-cols-4 gap-6 md:gap-4" 
    : "grid grid-cols-1 md:mt-[40px] md:grid-cols-3 gap-6 md:gap-0";

  return (
    <section style={{
        backgroundImage: "url('/greeneffect2.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'soft-light', // This helps make the effect lighter
      }} className="w-full mt-[60px] md:mt-[80px] pb-[50px] md:pt-[1px] md:pb-[100px] px-4 md:px-[60px] lg:px-[80px] bg-[#221241]">
      <div className="max-w-7xl mx-auto">
        
        {/* Use StackedHeading for both page types */}
        {(title || subtitle) && (
          <StackedHeading
            title={title}
            subtitle={subtitle}
            titleColor="text-[#FFFFFF]"        // White text for dark background
            subtitleColor={page === 'property' ? "text-[#FFFFFF]" : "text-[#B7C7E7]"} // White for property, light blue for life
            mobileAlign="left"
            desktopAlign='center' // Center for property, left for life
            className={page === 'property' ? "py-8 md:py-8 px-6 md:px-0" : "pt-4 md:pt-6 mb-9 md:mb-12"} // Different spacing for each page
          />
        )}
        
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