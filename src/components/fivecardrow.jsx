"use client"
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import ServiceCard from './greycard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FiveCardRow({ 
  cards,
  layout = "carousel", // "carousel" or "grid"
  title,
  subtitle,
  buttonText,
  buttonLink,
  showButton = true,
  darkMode = false,
  showNavButtons = true,
  cardsPerRow = 3
}) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Dark mode styling
  const bgColor = darkMode ? "bg-[#221241]" : "bg-white";
  const titleColor = darkMode ? "text-[#FFFFFF]" : "text-[#221241]";
  const subtitleColor = darkMode ? "text-[#B7C7E7]" : "text-[#000000D6]";

  // Only show button if showButton is true AND both buttonText and buttonLink are provided
  const shouldShowButton = showButton && buttonText && buttonLink;

  // Check scroll position to show/hide buttons (only for carousel layout)
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    if (layout === "carousel" && showNavButtons) {
      checkScrollPosition();
      
      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener('scroll', checkScrollPosition);
        return () => container.removeEventListener('scroll', checkScrollPosition);
      }
    }
  }, [layout, showNavButtons]);

  // Custom smooth scroll with speed control
  const smoothScrollTo = (container, targetScrollLeft, duration = 200) => {
    const startScrollLeft = container.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutQuad = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      container.scrollLeft = startScrollLeft + distance * easeInOutQuad;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Calculate one card width + gap
    const cardWidth = container.querySelector('div').offsetWidth;
    const gap = 32; // space-x-8 = 32px on md screens, space-x-6 = 24px on smaller
    const scrollAmount = cardWidth + gap;
    
    const targetScrollLeft = container.scrollLeft - scrollAmount;
    smoothScrollTo(container, Math.max(0, targetScrollLeft), 350);
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Calculate one card width + gap
    const cardWidth = container.querySelector('div').offsetWidth;
    const gap = 32; // space-x-8 = 32px on md screens, space-x-6 = 24px on smaller
    const scrollAmount = cardWidth + gap;
    
    const targetScrollLeft = container.scrollLeft + scrollAmount;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    smoothScrollTo(container, Math.min(maxScrollLeft, targetScrollLeft), 350);
  };

  // Card wrapper component that handles clickability
  const CardWrapper = ({ card, children, className = "" }) => {
    if (card.link) {
      return (
        <Link
          href={card.link}
          target='_blank'
          className={`block transition-transform duration-200 hover:scale-[1.02] cursor-pointer ${className}`}
        >
          {children}
        </Link>
      );
    }
    
    return <div className={className}>{children}</div>;
  };

  // Grid Layout Component - Updated to handle more cards
  const GridLayout = () => {
    // Calculate how many complete rows of 3 we can make
    const rows = [];
    
    for (let i = 0; i < cards.length; i += cardsPerRow) {
      rows.push(cards.slice(i, i + cardsPerRow));
    }

    // Dynamic grid classes based on cardsPerRow
    const getGridClasses = () => {
      switch(cardsPerRow) {
        case 2: return "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[50px]";
        case 3: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[50px]";
        case 4: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[50px]";
        default: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[50px]";
      }
    };

    return (
      <div className="max-w-7xl px-[16px] md:px-[60px] lg:px-[80px] mt-[32px] md:mt-[60px] space-y-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={getGridClasses()}>
            {row.map((card, cardIndex) => (
              <CardWrapper 
                key={rowIndex * cardsPerRow + cardIndex} 
                card={card} 
                className="w-full"
              >
                <ServiceCard {...card} />
              </CardWrapper>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Carousel Layout Component
  const CarouselLayout = () => (
    <div className="relative px-4">
      {/* Left scroll button - Desktop only */}
      {showNavButtons && canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      )}

      {/* Right scroll button - Desktop only */}
      {showNavButtons && canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      )}

      {/* Five-card scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pl-12 space-x-6 md:space-x-8 pb-6 -mx-4 px-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, index) => (
          <CardWrapper 
            key={index} 
            card={card} 
            className="flex-shrink-0 w-[85%] md:w-[80%] lg:w-[calc(50%-44px)]"
          >
            <ServiceCard {...card} />
          </CardWrapper>
        ))}
      </div>
    </div>
  );

  return (
    <section className={`w-full  ${bgColor}`}>
      <div className="mx-auto">
        
        {/* Header Section - only show if title or subtitle exists */}
        {(title || subtitle) && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-4">
            {/* Title and Subtitle */}
            <div className="mb-6 md:mb-0">
              {title && (
                <h2 className={`font-['Lexend'] ${titleColor} font-normal text-[28px] md:text-[40px] leading-tight mb-4`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <h3 className={`font-['Lato'] ${subtitleColor} font-normal text-[16px] md:text-[18px]`}>
                  {subtitle}
                </h3>
              )}
            </div>
            
            {/* Button - only show if shouldShowButton is true */}
            {shouldShowButton && (
              <div className="">
                <Link 
                  href={buttonLink}
                  className="inline-flex items-center px-5 py-4 md:py-3 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[18px] md:text-[14px] font-medium hover:bg-opacity-90 transition-all"
                >
                  {buttonText}
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Layout Section */}
        {layout === "grid" ? <GridLayout /> : <CarouselLayout />}

      </div>
    </section>
  );
}