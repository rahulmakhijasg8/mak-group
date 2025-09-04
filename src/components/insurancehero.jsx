import Image from 'next/image';

export default function InsuranceHero({
  title,
  greentitle,
  description,
  imageSrc,
  imageAlt,
  reverseLayout = false
}) {
  return (
    <section 
      className="w-full py-12 md:py-20 px-4 md:px-[60px] lg:px-[80px] mb-4 md:mb-20 relative"
    >
      
      <div className={`flex flex-col ${reverseLayout ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'} gap-6 md:gap-20 relative z-10`}>
        {/* Content Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-['Lexend'] text-[#221241] font-normal text-[32px] md:text-[40px] lg:text-[48px] mb-4">
             <span className='text-[#4EBA64] block'>{greentitle}</span>{title}
          </h1>
          
          <p className="font-['Lato'] whitespace-pre-wrap text-[#000000D6] font-normal text-[16px] md:text-[18px]">
            {description}
          </p>
        </div>
        
        {/* Image Column with green background showing on top and right */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-[395px] h-[300px] md:w-[500px] md:h-[403px]">
            {/* Image container with white border, offset to show green on top and right */}
            <div className="absolute top-3 right-0 md:right-3 left-0 bottom-0 rounded-[30px] overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={500}
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