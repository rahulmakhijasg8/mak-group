import React from 'react';
import Image from 'next/image';

const TeamMemberCard = ({ image, name, position }) => {
  return (
    <div className="flex flex-col items-center mx-auto md:mx-0">
      {/* Circle image container */}
      <div className="w-[350px] md:w-[280px] h-[430px] md:h-[375px] mb-4 rounded-[40px] md:rounded-[24px] overflow-hidden">
        <Image 
          src={image} 
          alt={name}
          width={1000}
          height={1000}
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