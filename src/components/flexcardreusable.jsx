// components/FlexGridLayout.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// GridItem component that can render either a card or an image
const formatDescription = (text) => {
  if (!text) return null;
  
  // Replace markdown bold with custom styled span tags
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<span style="color: #0D4751; font-weight: 600;">$1</span>');
  
  // Process bullet points - add specific inline styles
  formattedText = formattedText.replace(
    /^[•-]\s*(.*?)$/gm, 
    '<div style="display: flex; margin-bottom: 4px;"><span style="color: #0D4751; font-weight: bold; margin-right: 8px; width: 16px; flex-shrink: 0;">•</span><span>$1</span></div>'
  );
  
  // Split by double newlines and wrap each paragraph
  const paragraphs = formattedText.split('\n\n');
  
  return (
    <div className="text-[#000000D6] font-[400] text-sm">
      {paragraphs.map((paragraph, index) => {
        // Check if this paragraph contains bullet points
        if (paragraph.includes('style="display: flex;')) {
          return (
            <div 
              key={index} 
              style={{ marginBottom: '10px' }}
              dangerouslySetInnerHTML={{ __html: paragraph }} 
            />
          );
        }
        
        // Regular paragraph
        return (
          <p 
            key={index} 
            style={{ marginBottom: '12px' }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        );
      })}
    </div>
  );
};

const GridItem = ({ 
  type = 'card', 
  icon,         
  title,         
  description,  
  imageSrc,     
  imageAlt,     
  link = '#', 
  linkbtn = false,   
  accentColor = '#FF9F43' 
}) => {
  // Card layout (like Home Loans example)
  if (type === 'card') {
    const cardContent = (
      <div className="bg-[#EBEBEB] rounded-[40px] md:rounded-[20px] p-5 md:p-6 h-full overflow-auto transition-transform duration-200 hover:scale-[1.02]">
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
        
        {/* Description with formatted content */}
        <div className="description">
          {formatDescription(description)}
          {linkbtn && (
            <div style={{ marginTop: '0.5rem' }}>
              <span style={{ color: '#4EBA64', fontWeight: 400, textDecoration: 'underline' }}>
                Learn More
              </span>
            </div>
          )}
        </div>
      </div>
    );

    // If linkbtn is true and link is provided, make the whole card clickable
    if (linkbtn && link && link !== '#') {
      return (
        <a href={link} target='_blank' className="block h-full cursor-pointer">
          {cardContent}
        </a>
      );
    }

    // Otherwise, return non-clickable card
    return cardContent;
  }
  
  // Image layout (like Investment example)
  return (
    <Link href={link} className="block h-full">
      <div className="bg-white rounded-[40px] md:rounded-[20px] h-full overflow-hidden">
        {/* Main image */}
        <div className="relative w-full h-full">
          <Image 
            src={imageSrc || '/placeholder.jpg'} 
            alt={imageAlt || title}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
};

// FlexGridLayout component with proper row handling
const FlexGridLayout = ({ 
  items = [],
  itemsPerRow = 3, // Default to 3 items per row (maximum)
  className = "",
  itemClassName = ""
}) => {
  // Ensure itemsPerRow is between 1 and 3
  const actualItemsPerRow = Math.min(Math.max(1, itemsPerRow), 3);
  
  // Create rows
  const rows = [];
  for (let i = 0; i < items.length; i += actualItemsPerRow) {
    rows.push(items.slice(i, Math.min(i + actualItemsPerRow, items.length)));
  }

  return (
    <div className={`px-8 mt-15 mb-15 md:px-15 w-full ${className}`}>
      {rows.map((row, rowIndex) => {
        // Determine grid columns for this specific row
        let rowGridCols;
        
        // For the last row with fewer items than itemsPerRow
        if (rowIndex === rows.length - 1 && row.length < actualItemsPerRow) {
          switch (row.length) {
            case 1:
              rowGridCols = "md:grid-cols-1"; // One item takes full width
              break;
            case 2:
              rowGridCols = "md:grid-cols-2"; // Two items take 50% each
              break;
            default:
              rowGridCols = `md:grid-cols-${row.length}`;
          }
        } else {
          // Regular rows use the standard column count
          switch (actualItemsPerRow) {
            case 1:
              rowGridCols = "md:grid-cols-1";
              break;
            case 2:
              rowGridCols = "md:grid-cols-2";
              break;
            case 3:
              rowGridCols = "md:grid-cols-3";
              break;
            default:
              rowGridCols = "md:grid-cols-3";
          }
        }
        
        return (
          <div key={rowIndex} className={`grid grid-cols-1 ${rowGridCols} gap-6 mb-6`}>
            {row.map((item, colIndex) => (
              <div key={colIndex} className={itemClassName}>
                <GridItem {...item} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FlexGridLayout;