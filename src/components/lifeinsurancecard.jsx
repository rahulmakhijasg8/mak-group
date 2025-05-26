import Image from "next/image";

export default function LICard({ 
    title, 
    imageSrc, 
    description
  }) {
    return (
      <div className="bg-white rounded-[20px] overflow-hidden shadow-md max-w-[90%] md:max-w-[350px] mx-auto w-full">
        {/* Image at the top */}
        <div className="relative w-full p-5 md:p-4 h-[250px] md:h-[210px] overflow-hidden">
          <Image 
            src={imageSrc}
            alt={title}
            width={400}
            height={250}
            className="w-full h-full rounded-[10px] object-cover"
          />
        </div>
        
        {/* Content Area */}
        <div className="px-5 pb-4">
          {/* Green Title */}
          <h3 className="font-['Lexend'] text-[#000000] text-lg font-medium mb-2 md:mb-1">
            {title}
          </h3>
          
          {/* List Items with Black Bullets */}
            <p className="text-[#000000D6] pb-1 font-['Lato']">{description}</p>
        </div>
      </div>
    );
  }