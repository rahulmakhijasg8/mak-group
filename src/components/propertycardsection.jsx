// components/PropertyCarousel.jsx
"use client"

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import PropertyListingCard from "./propertycard";
import CarListingCard from "./carcard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertyCarousel({
  title,
  subtitle,
  buttonText,
  buttonLink,
  items = [],
  type = "property", // "property" or "car"
  darkMode = false,
  showButton = true, // New prop to control button visibility
  showNavButtons = true // New prop to control navigation buttons
}) {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Dark mode styling
  const bgColor = darkMode ? "bg-[#221241]" : "bg-[#F1F1F1]";
  const titleColor = darkMode ? "text-[#FFFFFF]" : "text-[#221241]";
  const subtitleColor = darkMode ? "text-[#B7C7E7]" : "text-[#000000D6]";

  // Only show button if showButton is true AND both buttonText and buttonLink are provided
  const shouldShowButton = showButton && buttonText && buttonLink;

  // Check scroll position to show/hide navigation buttons
  const checkScrollPosition = () => {
    const container = carouselRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    if (showNavButtons) {
      checkScrollPosition();
      
      const container = carouselRef.current;
      if (container) {
        container.addEventListener('scroll', checkScrollPosition);
        return () => container.removeEventListener('scroll', checkScrollPosition);
      }
    }
  }, [showNavButtons]);

  // Custom smooth scroll with speed control
  const smoothScrollTo = (container, targetScrollLeft, duration = 250) => {
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
    const container = carouselRef.current;
    if (!container) return;
    
    // Calculate one card width + gap
    const cardElement = container.querySelector('div > div');
    if (!cardElement) return;
    
    const cardWidth = cardElement.offsetWidth;
    const gap = 24; // gap-4 = 16px on mobile, gap-6 = 24px on desktop
    const scrollAmount = cardWidth + gap;
    
    const targetScrollLeft = container.scrollLeft - scrollAmount;
    smoothScrollTo(container, Math.max(0, targetScrollLeft));
  };

  const scrollRight = () => {
    const container = carouselRef.current;
    if (!container) return;
    
    // Calculate one card width + gap
    const cardElement = container.querySelector('div > div');
    if (!cardElement) return;
    
    const cardWidth = cardElement.offsetWidth;
    const gap = 24; // gap-4 = 16px on mobile, gap-6 = 24px on desktop
    const scrollAmount = cardWidth + gap;
    
    const targetScrollLeft = container.scrollLeft + scrollAmount;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    smoothScrollTo(container, Math.min(maxScrollLeft, targetScrollLeft));
  };

  return (
    <section style={{
        backgroundImage: "url('/greeneffect.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'soft-light', // This helps make the effect lighter
      }}  className={`w-full mt-[60px] py-[36] md:py-[100px] ${bgColor}`}>
      <div className="">
        
        {/* Mobile Layout: Original design */}
        <div className="md:hidden">
          {/* Header Section with precise alignment */}
          <div className="flex flex-col mr-16 md:mx-16 md:flex-row md:items-center md:justify-between mb-12">
            {/* StackedHeading aligned with first card */}
            <div className="mb-6 md:mb-0 pl-6 pr-4 md:pl-[calc(12px+2px)]">
              <div className="w-full">
                <div className="flex flex-col">
                  <h2 className={`font-['Lexend'] ${titleColor} font-normal text-[28px] md:text-[40px] leading-tight mb-4`}>
                    {title}
                  </h2>
                  
                  <h3 className={`font-['Lato'] ${subtitleColor} font-normal text-[16px] md:text-[18px]`}>
                    {subtitle}
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Button on the right - only show if shouldShowButton is true */}
            {shouldShowButton && (
              <div className="pl-6 md:pr-[calc(12px+2px)]">
                <Link 
                  href={buttonLink}
                  className="inline-flex items-center px-5 py-4 md:py-3 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[18px] font-medium hover:bg-opacity-90 transition-all"
                >
                  {buttonText}
                </Link>
              </div>
            )}
          </div>
          
          {/* Carousel container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide gap-4 pl-4 md:pl-[60px] lg:pl-[80px] pr-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {items.map((item, index) => (
              <div key={index} className="">
                {type === "property" ? (
                  <PropertyListingCard {...item} />
                ) : (
                  <CarListingCard {...item} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout: Stacked design */}
        <div className="hidden md:block">
          {/* Stacked heading for desktop */}
          <div className="text-center mx-auto mb-8 px-12">
            <h2 className={`font-['Lexend'] ${titleColor} font-normal text-[44px] leading-tight mb-4`}>
              {title}
            </h2>
            <h3 className={`font-['Lato'] px-30 ${subtitleColor} font-normal text-[18px]`}>
              {subtitle}
            </h3>
          </div>

          {/* Desktop Carousel with Navigation Buttons */}
          <div className="relative">
            {/* Left scroll button - Desktop only */}
            {showNavButtons && canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
            )}

            {/* Right scroll button - Desktop only */}
            {showNavButtons && canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            )}

            {/* Carousel for desktop */}
            <div 
              ref={carouselRef}
              className={`flex overflow-x-auto pb-6 md:mt-[60px] scrollbar-hide gap-6 pl-4 md:pl-[60px] lg:pl-[80px] ${shouldShowButton ? 'mb-[46px]' : 'mb-8'}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {items.map((item, index) => (
                <div key={index} className="">
                  {type === "property" ? (
                    <PropertyListingCard {...item} />
                  ) : (
                    <CarListingCard {...item} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Centered button below carousel for desktop - only show if shouldShowButton is true */}
          {shouldShowButton && (
            <div className="flex justify-center">
              <Link 
                href={buttonLink}
                className="inline-flex items-center px-5 py-3 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-90 transition-all"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}