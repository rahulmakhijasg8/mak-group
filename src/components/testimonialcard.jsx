// TestimonialCard.jsx
export default function TestimonialCard({ quote, name, location, avatarSrc }) {
    return (
      <div className="flex flex-col bg-white border border-[#EBEBEB] rounded-[34px] p-6 pb-8 h-full w-full">
        {/* Quote */}
        <p className="font-['Lato'] text-[#000000D6] font-[400] text-[16px] mb-6">
          "{quote}"
        </p>
        
        {/* Author Info */}
        <div className="flex items-center mt-auto">
  {/* Avatar - Increased Size on Mobile Only */}
  <div className="w-12 h-12 md:w-12 md:h-12 rounded-full overflow-hidden mr-4 md:mr-3">
    <img 
      src={avatarSrc} 
      alt={`${name}'s photo`} 
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Name and Location */}
  <div>
    <h4 className="font-['Lexend'] text-[#000000] font-[500] text-[16px]">
      {name}
    </h4>
    <p className="font-['Lato'] text-[#000000D6] font-[400] text-[14px]">
      {location}
    </p>
  </div>
</div>
      </div>
    );
  }