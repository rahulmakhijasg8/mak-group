'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Companies() {
  const companyLogos = [
    {
      src: "/HDFC Ergo.png",
      alt: "HDFC Ergo",
      width: 180,
    },
    {
      src: "/Niva Bupa.png",
      alt: "Niva Bupa",
      width: 200,
    },
    {
      src: "/tata-aig.png",
      alt: "Tata AIG",
      width: 160,
    },
    {
      src: "/Care Insuranc.svg",
      alt: "Care Insurance",
      width: 160,
    },
  ];

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

  return (
    <div className="overflow-hidden w-full h-[101px] md:h-[142px] bg-[#4EBA64] mb-[50px] md:mb-[100px] flex items-center">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: `-${totalWidth}px` }}
        transition={{
          duration: 7,
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