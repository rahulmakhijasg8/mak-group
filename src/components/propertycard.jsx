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
    <div className="bg-white rounded-[20px] overflow-hidden shadow-md min-w-[240px] w-[240px] mx-2">
      {/* Image at the top */}
      <div className="relative w-full p-3 h-36 overflow-hidden">
        <Image 
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full rounded-[10px] object-cover"
        />
      </div>
      
      {/* Content Area */}
      <div className="px-3 pb-4">
        {/* Price - now before the title */}
        <p className="font-['Lexend'] text-[#4EBA64] text-sm font-medium mb-1">
          {price}
        </p>
        
        {/* Property Title */}
        <h3 className="font-['Lexend'] text-[#221241] text-lg font-medium mb-2">
          {title}
        </h3>
        
        {/* Property Details in a single line */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Location */}
          <span className="font-['Lato'] text-[#000000D6] text-sm">{location}</span>
          
          {/* Beds */}
          <span className="font-['Lato'] text-[#000000D6] text-sm">{beds}</span>
          
          {/* Area */}
          <span className="font-['Lato'] text-[#000000D6] text-sm">{area}</span>
        </div>
      </div>
    </div>
  );
}