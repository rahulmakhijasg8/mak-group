import React from 'react';

export default function SectionHeader({ 
  title, 
  description, 
  className = "" 
}) {
  return (
    <section className={`w-full pt-4 md:pt-6 px-6 md:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Title Column - Extreme left on desktop */}
          <div className="w-full md:w-5/12 mb-6 md:mb-0">
            <h2 className="font-['Lexend'] text-[#221241] md:pr-[100px] font-normal text-[30px] md:text-[32px] lg:text-[36px] leading-tight max-w-md">
              {title}
            </h2>
          </div>
          
          {/* Description Column - Extreme right on desktop */}
          <div className="w-full md:w-5/12">
            <p className="font-['Lexend'] text-[#000000D6] font-normal text-[18x] md:text-[16px] max-w-md">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}