import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative  w-full max-w-7xl mt-[24px] md:mt-[35px] h-[450px] md:h-[400px] overflow-hidden">
      {/* Mobile background image (hidden on md screens and up) */}
      <div 
        className="absolute inset-0 block md:hidden"
        style={{ 
          backgroundImage: "url('/Group 34 (1).svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        {/* No additional overlay since image already has purple filter */}
      </div>
      
      {/* Desktop background image (hidden on smaller than md screens) */}
      <div 
        className="absolute inset-0 hidden md:block"
        style={{ 
          backgroundImage: "url('/Group 34.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
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