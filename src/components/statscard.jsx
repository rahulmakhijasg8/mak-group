// StatsCard.jsx
export default function StatsCard({ iconSrc, iconAlt, text }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FAFAFA] border border-[#EBEBEB] rounded-[50px] p-5 h-[290px] md:h-[255px]  w-full aspect-[4/5]">
      {/* Icon */}
      <div className="mb-4">
        <img src={iconSrc} alt={iconAlt} width={48} height={48} />
      </div>
      
      {/* Text Content */}
      <p className="font-['Lato'] text-[#000000] text-center font-[400] text-[18px]">
        {text}
      </p>
    </div>
  );
}