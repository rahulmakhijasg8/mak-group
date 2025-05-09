import Image from "next/image";

export default function PropertyListingCard({ 
  price,
  title,
  imageSrc,
  location,
  beds,
  area
}) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden min-w-[240px] h-[320px] w-[280px] mx-2">
      {/* Image at the top */}
      <div className="relative w-full p-4 h-50 overflow-hidden">
        <Image 
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full rounded-[15px] object-cover"
        />
      </div>
      
      {/* Content Area */}
      <div className="px-5 pb-4">
        {/* Price - before the title */}
        <p className="font-['Lexend'] text-[#4EBA64] text-sm font-medium mb-1">
          {price}
        </p>
        
        {/* Property Title */}
        <h3 className="font-['Lexend'] text-[#221241] text-lg font-medium mb-3">
          {title}
        </h3>
        
        {/* Divider */}
        <div className="h-[1.5px] bg-[#EBEBEB] mb-3"></div>
        
        {/* Property Details with icons - full width with equal spacing */}
        <div className="flex items-center justify-between w-full">
          {/* Location with icon */}
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Lato'] text-[#000000D6] text-sm ml-1">{location}</span>
          </div>
          
          {/* Beds with icon */}
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.25 19.5V14.25C2.25 13.4544 2.56607 12.6913 3.12868 12.1287C3.69129 11.5661 4.45435 11.25 5.25 11.25H18.75C19.5456 11.25 20.3087 11.5661 20.8713 12.1287C21.4339 12.6913 21.75 13.4544 21.75 14.25V19.5" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.5 19.5H19.5" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Lato'] text-[#000000D6] text-sm ml-1">{beds}</span>
          </div>
          
          {/* Area with icon */}
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.75 16.5H16.5V20.25" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 7.5H20.25" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 11.25H20.25" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Lato'] text-[#000000D6] text-sm ml-1">{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}