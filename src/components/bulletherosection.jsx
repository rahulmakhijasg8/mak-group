// components/BulletHeroSection.jsx
import Link from 'next/link';
import Image from 'next/image';

// A custom bullet point component with lightMode support
const BulletPoint = ({ title, description, lightMode = false }) => (
  <div className="flex items-start mb-4">
    <span className={`text-xl flex-shrink-0 ${lightMode ? 'text-[#000000D6]' : 'text-white'}`} style={{ width: '20px', minWidth: '20px' }}>•</span>
    <div className="flex-1">
      {title ? (
        <>
          <span className={`font-bold ${lightMode ? 'text-[#000000D6]' : 'text-white'}`}>{title}</span>
          {lightMode ? " " : <span className={`mx-2`}>:</span>}
          <span className={`${lightMode ? 'text-[#000000D6]' : 'text-white'}`}>{description}</span>
        </>
      ) : (
        <span className={`${lightMode ? 'text-[#000000D6]' : 'text-white'}`}>{description}</span>
      )}
    </div>
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
  secondaryButtonLink,
  lightMode = false
}) {
  return (
    <section 
     style={{
        backgroundImage: "url('/greeneffect3.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'soft-light', // This helps make the effect lighter
      }} className={`w-full py-12 md:py-20 ${lightMode ? 'bg-white' : 'bg-[#221241]'}`}
    >
      <div className={`container mx-auto px-4 md:px-6 flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
        {/* Content Column */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className={`text-3xl font-['Lexend'] leading-[100%] md:text-4xl lg:text-5xl font-bold mb-6 ${lightMode ? 'text-[#221241]' : 'text-white'}`}>
            {title}
          </h1>
          
          <div className="mb-8">
            {/* Bullet points */}
            {bulletPoints.length > 0 && (
              <div className="space-y-2">
                {bulletPoints.map((bullet, index) => (
                  <BulletPoint 
                    key={index} 
                    title={bullet.title} 
                    description={bullet.description}
                    lightMode={lightMode}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonLink && (<Link href={primaryButtonLink} className="inline-block bg-[#4EBA64] font-['Lexend'] text-white py-4 md:py-3 text-center w-[70%] md:w-auto px-7 rounded-full hover:bg-[#3da953] transition-colors">
              {primaryButtonText}
            </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink} className="inline-block bg-transparent border-2 border-[#4EBA64] text-[#4EBA64] font-bold py-3 px-6 rounded-full hover:bg-[#4EBA64] hover:text-white transition-colors">
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