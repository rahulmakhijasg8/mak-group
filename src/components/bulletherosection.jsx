// components/BulletHeroSection.jsx
import Link from 'next/link';
import Image from 'next/image';

// A custom bullet point component
const BulletPoint = ({ title, description }) => (
  <div className="flex items-start mb-8">
    <span className="text-[#4EBA64] mr-2">•</span>
    <span>
      <span className="text-[#4EBA64]">{title}</span>
      <span className="text-[#4EBA64]">: </span>
      <span>{description}</span>
    </span>
  </div>
);

export default function BulletHeroSection({
  title,
  bulletPoints = [],
  primaryButtonText,
  primaryButtonLink,
  imageSrc,
  imageAlt,
  reverseLayout = false,
  secondaryButtonText,
  secondaryButtonLink
}) {
  return (
    <section 
      className="w-full py-12 md:py-20 px-4 md:px-12 bg-[#221241]"
    >
      <div className={`max-w-7xl mx-auto flex flex-col ${reverseLayout ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'} gap-6 md:gap-30`}>
        {/* Content Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-['Lexend'] text-[#FFFFFF] font-normal text-[32px] md:text-[40px] lg:text-[48px] mb-4">
            {title}
          </h1>
          
          <div className="font-['Lato'] text-[#B7C7E7] font-normal text-[16px] md:text-[20px] mb-8">
            
            {/* Bullet points */}
            {bulletPoints.length > 0 && (
              <div className="space-y-1">
                {bulletPoints.map((bullet, index) => (
                  <BulletPoint 
                    key={index}
                    title={bullet.title}
                    description={bullet.description}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link 
              href={primaryButtonLink} 
              className="flex items-center px-4 py-2 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto"
            >
              <span className="mr-3">📞</span>
              <span className="flex-grow text-center pr-3">{primaryButtonText}</span>
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                href={secondaryButtonLink} 
                className="flex items-center px-4 py-2 bg-[#FFFFFF] text-[#221241] rounded-full font-['Lexend'] text-[14px] font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto whitespace-nowrap"
              >
                <span className="mr-3">💬</span>
                <span className="flex-grow text-center pr-3">{secondaryButtonText}</span>
              </Link>
            )}
          </div>
        </div>
        
        {/* Image Column */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-full md:h-full relative md:rounded-[20px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={450}
              height={450}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}