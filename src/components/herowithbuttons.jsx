// components/PropertyCarousel.jsx
import Link from 'next/link';
import { Calendar } from 'lucide-react';

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 18 18" 
    className={className}
    fill="none"
  >
    <g clipPath="url(#clip0_320_1944)">
      <path d="M13.1284 10.7306L13.1216 10.7869C11.4724 9.96487 11.2999 9.85537 11.0869 10.1749C10.9392 10.3961 10.5086 10.8979 10.3789 11.0464C10.2477 11.1926 10.1172 11.2039 9.8944 11.1026C9.6694 10.9901 8.94715 10.7539 8.09215 9.98887C7.42615 9.39262 6.97915 8.66137 6.84715 8.43637C6.6274 8.05687 7.08715 8.00287 7.50565 7.21087C7.58065 7.05337 7.5424 6.92962 7.4869 6.81787C7.43065 6.70537 6.9829 5.60287 6.7954 5.16337C6.6154 4.72537 6.43015 4.78087 6.2914 4.78087C5.8594 4.74337 5.54365 4.74937 5.2654 5.03887C4.0549 6.36937 4.36015 7.74187 5.3959 9.20137C7.4314 11.8654 8.5159 12.3559 10.4989 13.0369C11.0344 13.2071 11.5227 13.1831 11.9089 13.1276C12.3394 13.0594 13.2341 12.5869 13.4209 12.0581C13.6122 11.5294 13.6122 11.0906 13.5559 10.9894C13.5004 10.8881 13.3534 10.8319 13.1284 10.7306Z" fill="currentColor"/>
      <path d="M15.39 2.58707C9.62325 -2.98768 0.0795 1.05557 0.07575 8.92007C0.07575 10.4921 0.4875 12.0251 1.272 13.3788L0 18.0003L4.75125 16.7613C10.68 19.9638 17.997 15.7113 18 8.92457C18 6.54257 17.07 4.30082 15.3787 2.61632L15.39 2.58707ZM16.5015 8.89983C16.497 14.6246 10.2127 18.1998 5.2425 15.2778L4.9725 15.1173L2.16 15.8486L2.91375 13.1148L2.7345 12.8336C-0.3585 7.90983 3.195 1.47482 9.054 1.47482C10.0324 1.47236 11.0016 1.66399 11.9055 2.03862C12.8094 2.41325 13.6299 2.96343 14.3197 3.65732C15.0133 4.34251 15.5634 5.15898 15.938 6.05908C16.3126 6.95919 16.5042 7.92489 16.5015 8.89983Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_320_1944">
        <rect width="18" height="18" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default function HeroWithButtons({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  darkMode = false, // Boolean prop for dark/light mode
}) {
  // Determine colors based on darkMode
  const titleColor = darkMode ? 'text-[#FFFFFF]' : 'text-[#221241]';
  const subtitleColor = darkMode ? 'text-[#B7C7E7]' : 'text-[#000000D6]';
  const backgroundColor = darkMode ? 'bg-[#221241]' : 'bg-[#FAFAFA]';

  return (
    <div className={`w-full md:my-20 pt-15 pb-10 md:py-25 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          {/* Heading section */}
          <div className="mb-6 md:w-[60%] pr-10 md:mb-0 pl-6 md:pl-[calc(12px+2px)]">
            <div className="w-full">
              <div className="flex flex-col">
                <h2 className={`font-['Lexend'] ${titleColor} md:pr-60 font-normal text-[28px] md:text-[40px] leading-tight mb-8`}>
                  {title}
                </h2>
                
                <h3 className={`font-['Lato'] ${subtitleColor} font-normal text-[16px] md:text-[18px]`}>
                  {subtitle}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Buttons on the right */}
          <div className="pl-6 md:pr-[calc(12px+2px)] pr-10 flex flex-col gap-6">
            {/* Primary button with Calendar icon */}
            <Link 
              href={buttonLink}
              className="inline-flex items-center px-5 py-4 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-90 transition-all"
            >
              <Calendar className="h-5 w-5 mr-3" />
              <span className="flex-grow text-center pr-3">{buttonText}</span>
            </Link>
            
            {/* Secondary button with WhatsApp icon - only shown when provided */}
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                href={secondaryButtonLink}
                className="inline-flex items-center px-5 py-4 bg-[#FFFFFF] text-[#221241] rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-90 transition-all"
              >
                <WhatsAppIcon className="h-5 w-5 mr-3" />
                <span className="flex-grow text-center pr-3">{secondaryButtonText}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}