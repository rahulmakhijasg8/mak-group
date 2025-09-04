// StatsCard.jsx
export default function StatsCard({ iconSrc, iconAlt, text }) {
  return (
    // In StatsCard.jsx, update the main container:
<div className="flex flex-col justify-center items-center bg-[#F1F1F1] border border-[#EBEBEB] rounded-[34px] p-5 h-[290px] md:h-[240px] w-[50%] min-w-[280px] md:min-w-0 md:w-auto">
      
      {/* Icon with fixed height */}
      <div className="mb-6">
        <img src={iconSrc} alt={iconAlt} width={84} height={84} />
      </div>
      
      {/* Text Content in scrollable container if needed */}
      <div className="w-full">
        <p className="font-['Lato'] text-[#000000] px-3 md:px-0 text-center font-[400] text-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
}