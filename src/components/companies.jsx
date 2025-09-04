'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Companies({ 
  companyLogos = [], 
  duration = 7, 
  bgColor = "#FFFFFF",
  isStaticDesktop = false, // Control static behavior on desktop
  isStaticMobile = false,  // Control static behavior on mobile
  staticThreshold = 3 // Automatically make static if logos <= this number (fallback)
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate total width of one set of logos
  const calculateTotalWidth = () => {
    return companyLogos.reduce((total, logo) => {
      const logoWidth = logo.width;
      // Using fixed margin value to match the consistent spacing
      const marginWidth = 64; // 16 * 4 = 64px (mr-16)
      return total + logoWidth + marginWidth;
    }, 0);
  };

  const totalWidth = calculateTotalWidth();
  
  // Determine if component should be static based on device and props
  const shouldBeStatic = isMobile 
    ? isStaticMobile || companyLogos.length <= staticThreshold
    : isStaticDesktop || companyLogos.length <= staticThreshold;
  
  // Create multiple sets of logos for smooth scrolling (only if not static)
  const displayLogos = shouldBeStatic ? companyLogos : [...Array(10)].flatMap(() => companyLogos);
  
  // Don't render if no logos provided
  if (!companyLogos || companyLogos.length === 0) {
    return null;
  }

  // Static version - centered logos
  if (shouldBeStatic) {
    return (
      <div 
        className="overflow-hidden border-t border-b border-px border-[#221241] w-full h-[101px] md:h-[142px] mt-[43px] md:mt-[100px] flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap md:flex-nowrap max-w-full px-4">
          {companyLogos.map((logo, index) => (
            <div 
              key={`logo-${index}`} 
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: Math.min(logo.width, isMobile ? 120 : logo.width) }}
            >
              <div 
                className="relative h-[50px] md:h-[75px] lg:h-[90px]"
                style={{ 
                  width: Math.min(logo.width, isMobile ? 120 : logo.width)
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes={`${Math.min(logo.width, isMobile ? 120 : logo.width)}px`}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Animated version - scrolling logos
  return (
    <div 
      className="overflow-hidden border-t border-b border-px border-[#221241] w-full h-[101px] md:h-[142px] mt-[43px] md:mt-[100px] flex items-center"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: `-${totalWidth}px` }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        {displayLogos.map((logo, index) => (
          <div 
            key={`logo-${index}`} 
            className="flex-shrink-0 flex items-center justify-center mr-16"
            style={{ width: logo.width }}
          >
            <div 
              className="relative h-[75px] md:h-[90px]"
              style={{ 
                width: logo.width
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes={`${logo.width}px`}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}