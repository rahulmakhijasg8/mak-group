'use client';
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Companies({ companyLogos = [], duration = 7, bgColor = "#4EBA64" }) {
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
  // Create multiple sets of logos for smooth scrolling
  const loopedLogos = [...Array(10)].flatMap(() => companyLogos);
  // Don't render if no logos provided
  if (!companyLogos || companyLogos.length === 0) {
    return null;
  }
  return (
    <div 
      className="overflow-hidden w-full h-[101px] md:h-[142px] mb-[50px] md:mb-[100px] flex items-center"
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
        {loopedLogos.map((logo, index) => (
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