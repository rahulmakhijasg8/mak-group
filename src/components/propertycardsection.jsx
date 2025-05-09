// components/PropertyCarousel.jsx
"use client"

import { useRef } from "react";
import Link from "next/link";
import PropertyListingCard from "./propertycard";
import CarListingCard from "./carcard";

export default function PropertyCarousel({
  title,
  subtitle,
  buttonText = "View All Properties",
  buttonLink = "/properties",
  items = [],
  type = "property", // "property" or "car"
  darkMode = false
}) {
  const carouselRef = useRef(null);

  // Dark mode styling
  const bgColor = darkMode ? "bg-[#221241]" : "bg-[#FAFAFA]";
  const titleColor = darkMode ? "text-[#FFFFFF]" : "text-[#221241]";
  const subtitleColor = darkMode ? "text-[#B7C7E7]" : "text-[#000000D6]";

  return (
    <section className={`w-full py-12 md:py-20 ${bgColor}`}>
      <div className="">
        {/* Header Section with precise alignment */}
        <div className="flex flex-col mr-16 md:mx-16 md:flex-row md:items-center md:justify-between mb-12">
          {/* StackedHeading aligned with first card */}
          <div className="mb-6 md:mb-0 pl-6 md:pl-[calc(12px+2px)]">
            <div className="w-full">
              <div className="flex flex-col">
                <h2 className={`font-['Lexend'] ${titleColor} font-normal text-[28px] md:text-[40px] leading-tight mb-4 whitespace-nowrap`}>
                  {title}
                </h2>
                
                <h3 className={`font-['Lato'] ${subtitleColor} font-normal text-[16px] md:text-[18px]`}>
                  {subtitle}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Button on the right */}
          <div className="pl-6 md:pr-[calc(12px+2px)]">
            <Link 
              href={buttonLink}
              className="inline-flex items-center px-5 py-2.5 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-90 transition-all"
            >
              {buttonText}
            </Link>
          </div>
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
            <div key={index} className="snap-start">
              {type === "property" ? (
                <PropertyListingCard {...item} />
              ) : (
                <CarListingCard {...item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}