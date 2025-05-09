// StatsCard.jsx
export default function StatsCard({ iconSrc, iconAlt, text }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FAFAFA]  border border-[#EBEBEB] rounded-[50px] p-5 h-[290px] md:h-[240px] w-[80%] md:w-auto">
      
      {/* Icon with fixed height */}
      <div className="mb-6">
        <img src={iconSrc} alt={iconAlt} width={84} height={84} />
      </div>
      
      {/* Text Content in scrollable container if needed */}
      <div className="w-full">
        <p className="font-['Lato'] text-[#000000] px-3 md:px-2 text-center font-[400] text-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
}