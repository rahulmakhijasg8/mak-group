import Image from "next/image";

export default function RECard({ 
    title, 
    imageSrc, 
    listItems = [],
    link = "#"
  }) {
    return (
      <div className="bg-white rounded-[20px] overflow-hidden h-full shadow-md max-w-[90%] md:max-w-[280px] mx-auto w-full">
        {/* Image at the top */}
        <div className="relative w-full p-5 md:p-4 h-48 overflow-hidden">
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
          {/* Green Title */}
          <h3 className="font-['Lexend'] text-[#4EBA64] text-lg font-medium mb-3">
            {title}
          </h3>
          
          {/* List Items with Black Bullets */}
          <ul className="pl-3 mb-0">
            {listItems.map((item, index) => (
              <li key={index} className="font-['Lato'] text-[#000000D6] text-sm flex items-start mb-1.5 last:mb-0">
                <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }