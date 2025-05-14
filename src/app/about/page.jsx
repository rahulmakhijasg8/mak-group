import AboutHero from "@/components/abouthero";
import HeroSection from "@/components/hero";
import BlueHeroSection from "@/components/blueherosection";
import StackedHeading from "@/components/stackedheading";
import React from 'react'
import StatsGrid from "@/components/statsgrid";
import SectionHeader from "@/components/heading";
import TeamSection from "@/components/teamsection";
import Footer from "@/components/footer";

function about() {
  const statCards = [
    {
      iconSrc: "insurance-removebg-preview.png",
      iconAlt: "Insurance",
      text: "Insurance"
    },
    {
      iconSrc: "sm-removebg-preview.png",
      iconAlt: "Stock Market",
      text: "Stock Market"
    },
    {
      iconSrc: "finance-removebg-preview.png",
      iconAlt: "Finance",
      text: "Finance"
    },
    {
      iconSrc: "car.png",
      iconAlt: "Car",
      text: "Car"
    },
    {
      iconSrc: "reale_state-removebg-preview.png",
      iconAlt: "Real Estate",
      text: "Real Estate"
    }
  ];

  const teamMembers = [
    {
      image: "/Rectangle 4363.svg",
      name: "Kumar S. Makhija",
      position: "Director"
    },
    {
      image: "/Rectangle 4363.svg",
      name: "Pinak S. Aroskar",
      position: "Director for Loans/Fnancing"
    },
    {
      image: "/Rectangle 4363.svg",
      name: "Ankita K. Makhija",
      position: ""
    },
    {
      image: "/Rectangle 4363.svg",
      name: "Arnesh K. Makhija",
      position: ""
    }
  ];

  return (
    <div>
        <AboutHero />
        <HeroSection 
  title="Our Story" 
  description={"MAK GROUP was founded in [year] with a simple mission: to provide comprehensive financial solutions that help our clients achieve their goals. From our humble beginnings as a small insurance brokerage, we have grown into a full-service financial firm offering a wide range of products and services.\n\nOver the years, we have built a reputation for excellence, integrity, and customer service. Today, we are proud to serve over 400 clients, including many high net worth individuals, and manage assets worth over 500 crores."} 
  primaryButtonText="Book A free Call Now" 
  primaryButtonLink="#" 
  imageSrc="/Rectangle 28.jpg" 
  imageAlt="test" 
  reverseLayout={true} 
  secondaryButtonText="Chat with us on Whatsapp" 
  secondaryButtonLink="#"
  imageContainerClass="h-[80%] md:w-[95%]"
/>

<BlueHeroSection 
  title="Our Philosophy"
  description={"At MAK GROUP, we believe that everyone deserves access to quality financial services and advice. We are committed to building long-term relationships with our clients based on trust, transparency, and mutual respect.\n\nOur approach is simple: we take the time to understand your unique needs, goals, and aspirations, and then work with you to develop customized solutions that help you achieve them. Whether you're looking to protect your family with insurance, grow your wealth through investments, or finance your dream home or car, we're here to help."} 
  primaryButtonText="Book A free Call Now" 
  primaryButtonLink="#" 
  imageSrc="/Group 49.svg" 
  imageAlt="test" 
  reverseLayout={false} 
  secondaryButtonText="Chat with us on Whatsapp" 
  secondaryButtonLink="#"  
  backgroundColor='#221241'
/>
<StackedHeading title="Our Expertise" subtitle="Our team of experienced professionals brings a wealth of knowledge and expertise to every client engagement. With specialists in insurance, stock market investing, finance, real estate, and more, we have the skills and resources to handle all your financial needs." />
<StatsGrid cards={statCards} />
<SectionHeader title="Our Commitment to You" description="At MAK GROUP, our clients are at the heart of everything we do. We are committed to providing you with the highest level of service, support, and guidance, and to helping you achieve your financial goals." />
<section className="bg-[#FAFAFA] w-[90%] md:w-6xl mx-auto rounded-[50px] border-[1px] border-[#EBEBEB] mt-15 py-6 md:py-16">
  <div className="max-w-6xl mx-auto px-4 md:px-12">
    <div className="mb-8">
      <p className={`font-lato text-[#4EBA64] text-lg`}>
        When you work with us, you can expect :
      </p>
    </div>
    
    <ul className="space-y-4 pl-3 mb-8">
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] text-[#000000D6]">Personalized attention and customized solutions</span>
      </li>
      
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] text-[#000000D6]">Expert advice and guidance from experienced professionals</span>
      </li>
      
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] text-[#000000D6]">Access to a wide range of products and services</span>
      </li>
      
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] text-[#000000D6]">Transparency, integrity, and honesty in all our dealings</span>
      </li>
      
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] font-[400] text-[#000000D6]">Ongoing support and communication to help you stay on track</span>
      </li>
    </ul>
    
    <p className="font-['Lato'] text-[#000000]">
      Contact us today to learn more about how MAK GROUP can help you secure your financial future. We look forward to serving you.
    </p>
  </div>
</section>
<StackedHeading title="Our Team" subtitle="Our team of experienced professionals brings a wealth of knowledge and expertise to every client engagement." />
<TeamSection teamMembers={teamMembers} />
<Footer />

    </div>
  )
}

export default about