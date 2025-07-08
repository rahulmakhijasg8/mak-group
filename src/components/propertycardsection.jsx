// components/PropertyCarousel.jsx
"use client"

import { useRef } from "react";
import Link from "next/link";
import PropertyListingCard from "./propertycard";
import CarListingCard from "./carcard";

export default function PropertyCarousel({
  title,
  subtitle,
  buttonText,
  buttonLink,
  items = [],
  type = "property", // "property" or "car"
  darkMode = false,
  showButton = true // New prop to control button visibility
}) {
  const carouselRef = useRef(null);

  // Dark mode styling
  const bgColor = darkMode ? "bg-[#221241]" : "bg-[#FAFAFA]";
  const titleColor = darkMode ? "text-[#FFFFFF]" : "text-[#221241]";
  const subtitleColor = darkMode ? "text-[#B7C7E7]" : "text-[#000000D6]";

  // Only show button if showButton is true AND both buttonText and buttonLink are provided
  const shouldShowButton = showButton && buttonText && buttonLink;

  return (
    <section style={{
        backgroundImage: "url('/greeneffect.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'soft-light', // This helps make the effect lighter
      }}  className={`w-full py-12 md:py-20 ${bgColor}`}>
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
            className="flex overflow-x-auto pb-6 scrollbar-hide gap-4 pl-6 md:pl-16 pr-4 md:pr-[calc(12px+2px)]"
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

          {/* Carousel for desktop */}
          <div 
            ref={carouselRef}
            className={`flex overflow-x-auto pb-6 md:mt-[60px] scrollbar-hide gap-6 pl-16 pr-4 ${shouldShowButton ? 'mb-[46px]' : 'mb-8'}`}
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