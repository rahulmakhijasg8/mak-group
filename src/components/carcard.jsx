// components/CarListingCard.jsx
import Image from "next/image";
import { Calendar, CircleDot, Fuel, Clock } from "lucide-react";

export default function CarListingCard({ 
  price,
  title,
  imageSrc,
  year,
  transmission,
  fuel,
  distance
}) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden min-w-[240px] w-[280px] mx-2">
      {/* Image at the top */}
      <div className="relative w-full p-3 h-50 overflow-hidden">
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
        {/* Price - before the title */}
        <p className="font-['Lexend'] text-[#4EBA64] text-sm font-medium mb-1">
          {price}
        </p>
        
        {/* Car Title */}
        <h3 className="font-['Lexend'] text-[#221241] text-lg font-medium mb-3">
          {title}
        </h3>
        
        {/* Car Specs Grid - 2x2 grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Year with icon */}
          <div className="flex items-center">
            <Calendar size={18} className="text-[#4EBA64]" />
            <span className="font-['Lato'] text-[#000000D6] text-sm ml-1">{year}</span>
          </div>
          
          {/* Transmission with icon */}
          <div className="flex items-center">
            <CircleDot size={18} className="text-[#4EBA64]" />
            <span className="font-['Lato'] text-[#000000D6] text-sm ml-1">{transmission}</span>
          </div>
          
          {/* Fuel with icon */}
          <div className="flex items-center">
            <Fuel size={18} className="text-[#4EBA64]" />
            <span className="font-['Lato'] text-[#000000D6] text-sm ml-1">{fuel}</span>
          </div>
          
          {/* Distance with icon */}
          <div className="flex items-center">
            <Clock size={18} className="text-[#4EBA64]" />
            <span className="font-['Lato'] text-[#000000D6] text-sm ml-1">{distance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}