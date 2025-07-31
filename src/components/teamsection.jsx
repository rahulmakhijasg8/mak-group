import React from 'react';
import TeamMemberCard from './teamembercard';

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="py-12 md:py-0 px-8">
      <div className="w-full mx-auto">
        
        {/* Modified grid to handle 5 members with gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 mt-15 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div className="flex justify-center" key={index}>
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