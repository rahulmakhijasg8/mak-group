import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[350px] overflow-hidden">
      {/* Background Image with mobile-specific adjustment */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: "url('/Group 34.svg')",
          backgroundSize: "500% cover", /* Shows more horizontal content on mobile */
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          '@media (minWidth: 768px)': {
            backgroundSize: "cover" /* Standard size for desktop */
          }
        }}
      >
        {/* No additional overlay since image already has purple filter */}
      </div>
      
      {/* Content Container - Unchanged */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-['Lexend'] text-white text-3xl md:text-4xl font-medium mb-3 drop-shadow-lg">
          About MAK GROUP
        </h1>
        <div className="flex items-center text-white text-sm font-['Lato']">
          <a href="/" className="hover:underline transition-opacity">Home</a>
          <span className="mx-2">›</span>
          <span className='text-[#67C399]'>About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;