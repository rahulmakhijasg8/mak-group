import React from 'react';
import Image from 'next/image';

const TeamMemberCard = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[280px]">
      {/* Circle image container */}
      <div className="w-[330px] md:w-[220px] h-[385px] md:h-[275px] mb-4 rounded-[34px] overflow-hidden border-2 border-[#EBEBEB]">
        <Image 
          src={image} 
          alt={name}
          width={220}
          height={220}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text content */}
      <h3 className="font-['Lexend'] text-[#000000] text-xl font-medium mb-1">{name}</h3>
      <p className="font-['Lato'] text-[#000000D6] text-sm">{position}</p>
    </div>
  );
};

export default TeamMemberCard;