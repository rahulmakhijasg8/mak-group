export default function ServiceCard({ icon, title, description, primaryButtonText, secondaryButtonText, primaryButtonLink, secondaryButtonLink }) {
    return (
      <div className="flex flex-col bg-[#FAFAFA] border border-[#EBEBEB] rounded-[34px] p-6 h-full w-full">
        {/* Icon */}
        <div className="mb-4">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="font-['Lexend'] text-[#221241] font-normal text-[24px] md:text-[26px] mb-3">
          {title}
        </h3>
        
        {/* Description - Line clamp for 2 lines */}
        <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] md:text-[18px] mb-8 flex-grow line-clamp-2 min-h-[56px]">
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
              <span>📞</span>
            </a>
          )}
          
          {secondaryButtonText && secondaryButtonLink && (
            <a 
              href={secondaryButtonLink}
              className="flex items-center justify-between px-4 py-2 bg-transparent text-[#25D366] border border-[#25D366] rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-5 transition-all w-full sm:w-[50%] whitespace-nowrap"
            >
              <span>Chat with us on WhatsApp</span>
              <span>💬</span>
            </a>
          )}
        </div>
      </div>
    );
  }