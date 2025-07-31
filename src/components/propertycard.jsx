import Image from "next/image";

export default function PropertyListingCard({ 
  price,
  title,
  imageSrc,
  location,
  beds,
  area,
  type = "Sale", // "Sale" or "Rent"
  propertyId // Optional: unique ID for tracking
}) {
  
  // Function to generate WhatsApp inquiry link
  const generateWhatsAppLink = () => {
    const phoneNumber = "918591353530"; // Without + sign for WhatsApp API
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${type === "Rent" ? "rental" : "sale"} property:\n\n` +
      `🏠 *${title}*\n` +
      `📍 Location: ${location}\n` +
      `💰 Price: ${price}\n` +
      `🛏️ ${beds ? `Beds: ${beds}\n` : ""}` +
      `📐 Area: ${area}\n\n` +
      `Could you please provide more details about this property? Thank you!`
    );
    
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="bg-white rounded-[20px] overflow-hidden min-w-[240px] h-[380px] w-[300px] mx-2 shadow-sm hover:shadow-md transition-shadow">
      {/* Image at the top */}
      <div className="relative w-full p-4 h-48 overflow-hidden">
        <Image 
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full rounded-[15px] object-cover"
        />
      </div>
      
      {/* Content Area */}
      <div className="px-5 pb-4 relative flex flex-col h-[calc(100%-12rem)]">
        {/* Sale/Rent Badge */}
        <div className={`
          absolute top-[0px] right-4 px-3 py-1 rounded-full text-xs font-medium font-['Lexend']
          ${type === "Rent" 
            ? "bg-[#FF6B6B] text-white" 
            : "bg-[#4EBA64] text-white"
          }
        `}>
          {type === "Rent" ? "For Rent" : "For Sale"}
        </div>

        {/* Price */}
        <p className="font-['Lexend'] text-[#4EBA64] text-sm font-medium mb-1 mt-2">
          {price}
        </p>
        
        {/* Property Title */}
        <h3 className="font-['Lexend'] text-[#221241] text-lg font-medium mb-3 line-clamp-2">
          {title}
        </h3>
        
        {/* Divider */}
        <div className="h-[1.5px] bg-[#EBEBEB] mb-3"></div>
        
        {/* Property Details */}
        <div className="flex items-center justify-between w-full mb-4 flex-grow">
          {/* Location */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M4.16602 8.26904C4.16602 12.3122 7.70308 15.6558 9.26867 16.9377C9.49274 17.1211 9.60611 17.214 9.77327 17.261C9.90344 17.2977 10.095 17.2977 10.2252 17.261C10.3927 17.2139 10.5052 17.122 10.7301 16.9378C12.2957 15.6559 15.8326 12.3126 15.8326 8.26941C15.8326 6.73932 15.2181 5.27171 14.1241 4.18977C13.0301 3.10783 11.5465 2.5 9.99942 2.5C8.45232 2.5 6.96852 3.10792 5.87456 4.18986C4.7806 5.2718 4.16602 6.73895 4.16602 8.26904Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.33268 7.5C8.33268 8.42047 9.07887 9.16667 9.99935 9.16667C10.9198 9.16667 11.666 8.42047 11.666 7.5C11.666 6.57953 10.9198 5.83333 9.99935 5.83333C9.07887 5.83333 8.33268 6.57953 8.33268 7.5Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-['Lato'] text-[#000000D6] text-xs ml-1 truncate">{location}</span>
          </div>
          
          {/* Beds */}
          {beds && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 20" fill="none">
                <path d="M18.0052 8.98268V6.66602C18.0052 5.29102 16.8802 4.16602 15.5052 4.16602H12.1719C11.5302 4.16602 10.9469 4.41602 10.5052 4.81602C10.0635 4.41602 9.48021 4.16602 8.83854 4.16602H5.50521C4.13021 4.16602 3.00521 5.29102 3.00521 6.66602V8.98268C2.49688 9.44102 2.17188 10.0994 2.17188 10.8327V15.8327H3.83854V14.166H17.1719V15.8327H18.8385V10.8327C18.8385 10.0994 18.5135 9.44102 18.0052 8.98268ZM12.1719 5.83268H15.5052C15.9635 5.83268 16.3385 6.20768 16.3385 6.66602V8.33268H11.3385V6.66602C11.3385 6.20768 11.7135 5.83268 12.1719 5.83268ZM4.67188 6.66602C4.67188 6.20768 5.04688 5.83268 5.50521 5.83268H8.83854C9.29688 5.83268 9.67188 6.20768 9.67188 6.66602V8.33268H4.67188V6.66602ZM3.83854 12.4994V10.8327C3.83854 10.3744 4.21354 9.99935 4.67188 9.99935H16.3385C16.7969 9.99935 17.1719 10.3744 17.1719 10.8327V12.4994H3.83854Z" fill="#4EBA64"/>
              </svg>
              <span className="font-['Lato'] text-[#000000D6] text-xs ml-1">{beds}</span>
            </div>
          )}
          
          {/* Area */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_1025_903)">
                <path d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 13.1719L6.36371 17.5356" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.6406 17.5356L18.0043 13.1719" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_1025_903">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span className="font-['Lato'] text-[#000000D6] text-xs ml-1">{area}</span>
          </div>
        </div>

        {/* WhatsApp Inquiry Button */}
        <a
          href={generateWhatsAppLink()}
          className="bg-[#4EBA64] hover:bg-[#1fb855] text-white font-['Lexend'] font-medium py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors text-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488" fill="currentColor"/>
          </svg>
          Inquire Now
        </a>
      </div>
    </div>
  );
}