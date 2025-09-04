import React from 'react';
import Image from 'next/image';

const TeamMemberCard = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center mx-auto md:mx-0 w-full">
      {/* Circle image container - only width adjusted for 5 columns */}
      <div className="w-[90%] sm:w-[280px] md:w-[240px] lg:w-[180px] xl:w-[240px] 2xl:w-[280px] h-[430px] md:h-[375px] mb-4 rounded-[40px] md:rounded-[24px] overflow-hidden">
        <Image 
          src={image} 
          alt={name}
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Text content */}
      <h3 className="font-['Lexend'] text-[#000000] text-xl font-medium mb-1 text-center">{name}</h3>
      <p className="font-['Lato'] text-[#000000D6] text-sm text-center">{position}</p>
    </div>
  );
};

export default TeamMemberCard;