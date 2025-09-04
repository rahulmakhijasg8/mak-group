// components/BulletHeroSection.jsx
import Link from 'next/link';
import Image from 'next/image';

// A custom bullet point component with lightMode support
const BulletPoint = ({ title, description, lightMode = false, hasAsterisk = false }) => (
  <div className="flex items-start">
    <span className={`text-xl flex-shrink-0 ${lightMode ? 'text-[#000000D6]' : 'text-white'}`} style={{ width: '20px', minWidth: '20px' }}>•</span>
    <div className="flex-1">
      {title ? (
        <>
          <span className={`font-bold ${lightMode ? 'text-[#000000D6]' : 'text-white'}`}>{title}</span>
          {lightMode ? " " : <span className={`mx-2`}>:</span>}
          <span className={`${lightMode ? 'text-[#000000D6]' : 'text-[#FFFFFF]'}`}>
            {hasAsterisk && <span className="text-red-500">*</span>}
            {description}
          </span>
        </>
      ) : (
        <span className={`md:text-[20px] ${lightMode ? 'text-[#000000D6]' : 'text-[#B7C7E7] md:text-[#FFFFFF] font-[400]'}`}>
          {hasAsterisk && <span className="text-red-500">*</span>}
          {description}
        </span>
      )}
    </div>
  </div>
);

export default function BulletHeroSection({
  title,
  bulletPoints = [],
  primaryButtonText,
  primaryButtonLink,
  primaryButtonNewTab = true, // New prop with default value
  imageSrc,
  imageAlt,
  reverseLayout = false,
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonNewTab = false, // New prop for secondary button
  lightMode = false,
  showDisclaimer = false,
  disclaimerText = "Subject to approval from the Financial Institutions"
}) {
  return (
    <section 
     style={{
        backgroundImage: "url('/greeneffect3.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'soft-light', // This helps make the effect lighter
      }} className={`w-full mt-[60px] md:mt-[80px] py-12 md:py-20 ${lightMode ? 'bg-white' : 'bg-[#221241]'}`}
    >
      <div className={`container md:gap-[67px] px-4 md:px-[60px] lg:px-[80px] flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
        {/* Content Column */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className={`text-3xl font-['Lexend'] leading-[100%] md:text-4xl lg:text-5xl mb-6 ${lightMode ? 'text-[#221241]' : 'text-[#FFFFFF] font-[400]'}`}>
            {title}
          </h1>
          
          <div className="mb-8">
            {/* Bullet points */}
            {bulletPoints.length > 0 && (
              <div className="space-y-[26px] md:space-y-[24px] pr-10 md:pr-0">
                {bulletPoints.map((bullet, index) => (
                  <BulletPoint 
                    key={index} 
                    title={bullet.title} 
                    description={bullet.description}
                    lightMode={lightMode}
                    hasAsterisk={bullet.hasAsterisk}
                  />
                ))}
                
                {/* Disclaimer text */}
                {showDisclaimer && (
                  <div className="mt-6 pt-4">
                    <p className={`text-sm italic ${lightMode ? 'text-[#000000D6]' : 'text-[#B7C7E7]'}`}>
                      <span className="text-red-500">*</span>{disclaimerText}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (
              <Link 
                href={primaryButtonLink} 
                target={primaryButtonNewTab ? '_blank' : '_self'}
                className="inline-block bg-[#4EBA64] font-['Lexend'] text-white border-[1px] border-[#4EBA64] hover:bg-white hover:text-[#4EBA64] py-4 md:py-3 text-center w-[70%] md:w-auto px-7 rounded-full hover:bg-[#3da953] transition-colors"
              >
                {primaryButtonText}
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link 
                href={secondaryButtonLink}
                target={secondaryButtonNewTab ? '_blank' : '_self'}
                rel={secondaryButtonNewTab ? 'noopener noreferrer' : undefined}
                className="inline-block bg-transparent border-2 border-[#4EBA64] text-[#4EBA64] hover:text-white font-bold py-3 px-6 rounded-full hover:bg-[#4EBA64] hover:text-white transition-colors"
              >
                💬 {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
        
        {/* Image Column */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-video md:aspect-square max-w-lg mx-auto">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="object-contain"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}