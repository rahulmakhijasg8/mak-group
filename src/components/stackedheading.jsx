import React from 'react';

export default function StackedHeading({ 
  title, 
  subtitle, 
  className = "",
  mobileAlign = "left",   // Mobile alignment: 'center', 'left', or 'right'
  desktopAlign = "center", // Desktop alignment: 'center', 'left', or 'right'
  titleColor = "text-[#221241]", // Default title color
  subtitleColor = "text-[#000000D6]" // Default subtitle color
}) {
  // Mobile alignment classes
  const mobileAlignmentClasses = {
    center: "text-center px-[23px]",
    left: "text-left",
    right: "text-right"
  };

  // Desktop alignment classes
  const desktopAlignmentClasses = {
    center: "md:text-center md:mx-auto",
    left: "md:text-left",
    right: "md:text-right md:ml-auto"
  };

  // Title margin classes
  const titleMarginClasses = {
    center: "mx-auto",
    left: "",
    right: "ml-auto"
  };

  // Combine mobile and desktop classes
  const containerClasses = `${mobileAlignmentClasses[mobileAlign]} ${desktopAlignmentClasses[desktopAlign]}`;
  const titleMobileMargin = mobileAlign === 'center' ? 'mx-auto' : mobileAlign === 'right' ? 'ml-auto' : '';
  const titleDesktopMargin = desktopAlign === 'center' ? 'md:mx-auto' : desktopAlign === 'right' ? 'md:ml-auto' : '';

  return (
    <div className={`w-full mt-[60px] md:mt-[100px] px-[16px] md:px-[60px] lg:px-[100px] md:px-12 ${className}`}>
      <div className={`max-w-full md:max-w-full ${containerClasses}`}>
        <h2 className={`font-['Lexend'] ${titleColor} font-normal text-[28px] md:text-[44px] leading-tight sm:max-w-full ${titleMobileMargin} ${titleDesktopMargin}`}>
          {title}
        </h2>
        
        <h3 className={`font-['Lato'] mt-[12px] md:mt-[16px] md:px-30 ${subtitleColor} font-normal text-[16px] md:text-[18px] max-w-full sm:max-w-full`}>
          {subtitle}
        </h3>
      </div>
    </div>
  );
}