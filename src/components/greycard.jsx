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

export default function ServiceCard({
  icon,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink
}) {
  return (
    <div className="flex flex-col bg-[#FAFAFA] border border-[#EBEBEB] rounded-[34px] p-6 h-full w-full">
      {/* Icon */}
      <div className='flex rounded-[10px] justify-center w-20 md:w-18 h-18 md:justify-center items-center mb-6 md:mb-4 bg-[#FFFFFF] md:h-18 md:w-18'>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="font-['Lexend'] text-[#221241] font-normal text-[24px] md:text-[26px] mb-3">
        {title}
      </h3>
      
      {/* Description - Line clamp for 2 lines */}
      <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] md:text-[18px] mb-4 flex-grow line-clamp-5 min-h-[56px]">
        {description}
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto w-full">
        {primaryButtonText && primaryButtonLink && (
          <a 
            href={primaryButtonLink}
            className="flex items-center justify-between px-4 py-2 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-90 transition-all w-full sm:w-[50%]"
          >
            <span>{primaryButtonText}</span>
            <Calendar className="h-5 w-5 ml-2" />
          </a>
        )}
        
        {secondaryButtonText && secondaryButtonLink && (
          <a 
            href={secondaryButtonLink}
            className="flex items-center justify-between px-4 py-2 bg-transparent text-[#25D366] border border-[#25D366] rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-5 transition-all w-full sm:w-[50%] whitespace-nowrap"
          >
            <span className="mr-1 flex-1">{secondaryButtonText}</span>
            <WhatsAppIcon className="h-4 md:h-5 w-4 md:w-5 flex-shrink-0 ml-0" />
          </a>
        )}
      </div>
    </div>
  );
}