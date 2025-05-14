import React from 'react';
import TeamMemberCard from './teamembercard';

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="py-12 md:py-0 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Modified grid to ensure proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-15 gap-8 md:gap-20">
          {teamMembers.map((member, index) => (
            <div className="flex justify-center md:justify-center" key={index}>
              <TeamMemberCard 
                image={member.image}
                name={member.name}
                position={member.position}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;