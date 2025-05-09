// components/GridLayout.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// GridItem component that can render either a card or an image
const GridItem = ({ 
  type = 'card', // 'card' or 'image'
  icon,          // for cards: icon URL
  title,         // title text
  description,   // description text (for cards)
  imageSrc,      // main image URL (for image type)
  imageAlt,      // image alt text
  link = '#',    // link URL
  accentColor = '#FF9F43' // color for the icon background (for cards)
}) => {
  // Card layout (like Home Loans example)
  if (type === 'card') {
    return (
      <Link href={link} className="block h-full">
        <div className="bg-[#EBEBEB] rounded-[40px] md:rounded-[20px] md:max-w-[400px] p-5 md:p-6 h-[280px]">
          {/* Icon with accent color background */}
            {icon && (
                <div className='flex rounded-[10px] justify-center w-20 md:w-18 h-18 md:justify-center items-center mb-8 bg-[#FFFFFF] md:h-18 md:w-18'>
              <Image 
                src={icon} 
                alt="" 
                width={500} 
                height={500}
                className="w-16 h-16"
              />
              </div>
            )}
          
          {/* Title */}
          <h3 className="text-lg font-[600] text-[#000000] mb-2">{title}</h3>
          
          {/* Description */}
          <p className="text-[#000000D6] font-[400] text-sm">{description}</p>
        </div>
      </Link>
    );
  }
  
  // Image layout (like Investment example)
  return (
    <Link href={link} className="block h-full">
      <div className="bg-white rounded-[40px] md:rounded-[20px] h-[280px] max-w-[400px] overflow-hidden">
        {/* Main image */}
        <div className="relative w-full h-full">
          <Image 
            src={imageSrc || '/placeholder.jpg'} 
            alt={imageAlt || title}
            height={500}
            width={500}
            cover='true'
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </Link>
  );
};

// Main GridLayout component
const LoanGridLayout = ({ 
  items = [],
  className = "",
  itemClassName = ""
}) => {
  return (
    <div className={`grid grid-cols-1 mt-15 px-8 mb-20 md:px-20 md:grid-cols-3  md:gap-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className={`mb-6 md:mb-0 ${itemClassName}`}>
          <GridItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default LoanGridLayout;