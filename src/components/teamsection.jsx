import React from 'react';
import TeamMemberCard from './teamembercard';

const TeamSection = ({ teamMembers }) => {
  return (
    <section className="py-12 md:py-0 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid container - switches from column on mobile to row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;