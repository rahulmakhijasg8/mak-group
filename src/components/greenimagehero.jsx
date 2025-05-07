import Image from 'next/image';

export default function GreenImageHero({
  title,
  description,
  imageSrc,
  imageAlt,
  reverseLayout = false
}) {
  return (
    <section 
      className="w-full py-12 md:py-20 px-4 md:px-12 bg-[#221241]"
    >
      <div className={`max-w-7xl mx-auto flex flex-col ${reverseLayout ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'} gap-6 md:gap-20`}>
        {/* Content Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-['Lexend'] text-[#FFFFFF] font-normal text-[32px] md:text-[40px] lg:text-[48px] mb-4">
            {title}
          </h1>
          
          <p className="font-['Lato'] whitespace-pre-wrap text-[#B7C7E7] font-normal text-[16px] md:text-[18px]">
            {description}
          </p>
        </div>
        
        {/* Image Column with green background showing on top and right */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-[300px] h-[280px] md:w-[480px] md:h-[383px]">
            {/* Green background div that will show on top and right */}
            <div className="absolute left-4 bottom-4 inset-0 bg-[#4EBA64] rounded-[30px]"></div>
            
            {/* Image container with white border, offset to show green on top and right */}
            <div className="absolute top-3 right-3 left-0 bottom-0 rounded-[30px] border-2 border-white overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={350}
                height={350}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}