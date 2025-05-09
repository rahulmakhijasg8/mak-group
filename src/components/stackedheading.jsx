import React from 'react';

export default function StackedHeading({ 
  title, 
  subtitle, 
  className = "",
  align = "center" // 'center', 'left', or 'right'
}) {
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto"
  };

  return (
    <div className={`w-full pt-8 md:pt-12 px-6 md:px-12 ${className}`}>
      <div className={`max-w-3xl md:max-w-full ${alignmentClasses[align]}`}>
        <h2 className="font-['Lexend'] text-[#221241] font-normal text-[28px] md:text-[40px] leading-tight mb-4 max-w-[280px] sm:max-w-full mx-auto">
          {title}
        </h2>
        
        <h3 className="font-['Lato'] text-[#000000D6] font-normal text-[16px] md:text-[18px] max-w-[300px] sm:max-w-full mx-auto">
          {subtitle}
        </h3>
      </div>
    </div>
  );
}