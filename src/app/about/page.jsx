import AboutHero from "@/components/abouthero";
import HeroSection from "@/components/hero";
import BlueHeroSection from "@/components/blueherosection";
import StackedHeading from "@/components/stackedheading";
import React from 'react'
import StatsGrid from "@/components/statsgrid";
import SectionHeader from "@/components/heading";
import TeamSection from "@/components/teamsection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function about() {
  const statCards = [
  {
    iconSrc: "insurance-removebg-preview.png",
    iconAlt: "Insurance",
    text: "Insurance",
    link: "/insurance-solutions"
  },
  {
    iconSrc: "sm-removebg-preview.png",
    iconAlt: "Stock Market",
    text: "Stock Market",
    link: "/sm-services"
  },
  {
    iconSrc: "finance-removebg-preview.png",
    iconAlt: "Finance",
    text: "Finance",
    link: "/finance-solutions"
  },
  {
    iconSrc: "car.png",
    iconAlt: "Car",
    text: "Car",
    link: "/cars"
  },
  {
    iconSrc: "reale_state-removebg-preview.png",
    iconAlt: "Real Estate",
    text: "Real Estate",
    link: "/real-estate"
  }
];

  const teamMembers = [
    {
      image: "/KumarMakhija.jpeg",
      name: "Kumar S. Makhija",
      position: "Director"
    },
    {
      image: "/PinakAroskar.jpeg",
      name: "Pinak S. Aroskar",
      position: "Director for Loans/Financing"
    },
    {
      image: "/AnkitaMakhija.jpeg",
      name: "Ankita K. Makhija",
      position: "Partner"
    },
    {
      image: "/ArneshMakhija.jpeg",
      name: "Arnesh K. Makhija",
      position: "Partner"
    }
  ];

  return (
    <div>
      <Navbar/>
        <AboutHero />
        <HeroSection 
  title="Our Story" 
  description={"MAK Group was founded in 1952 with a clear vision: to support our clients in achieving their financial and lifestyle goals through trusted, comprehensive solutions. We started off in the automobile industry, specializing in the buying and selling of cars. As our clients’ needs evolved, so did we—expanding into insurance, the stock market, loans, and real estate.\n\nFrom these dynamic beginnings, we have grown into a full-service financial firm, offering a wide range of products and services under one roof. Over the years, we’ve earned a reputation for excellence, integrity, and personalized service. Today, we proudly serve over 400 clients—including many high-net-worth individuals—and manage assets worth over 500 crores."} 
  primaryButtonText="Book A free Call Now" 
  primaryButtonLink="#" 
  imageSrc="/Rectangle 28.jpg" 
  imageAlt="test" 
  reverseLayout={true} 
  secondaryButtonText="Chat with us on Whatsapp" 
  secondaryButtonLink="#"
  imageContainerClass="h-[80%] md:w-[100%]"
/>

<BlueHeroSection 
  title="Our Philosophy"
  description={"At MAK Group, we believe that everyone deserves access to reliable, high-quality financial guidance. Our commitment lies in building lasting relationships with our clients—grounded in trust, transparency, and mutual respect.\n\nWe take a personalized approach to every client engagement. By understanding your unique goals, needs, and aspirations, we craft tailored solutions designed to help you achieve long-term success. Whether it's protecting your family with the right insurance, growing your wealth through strategic investments, financing your dream home or car, navigating the stock market, or exploring opportunities in real estate—MAK Group is here to guide you every step of the way."} 
  primaryButtonText="Book A free Call Now" 
  primaryButtonLink="#" 
  imageSrc="/Group 49.svg" 
  imageAlt="test" 
  reverseLayout={false} 
  secondaryButtonText="Chat with us on Whatsapp" 
  secondaryButtonLink="#"  
  backgroundColor='#221241'
/>
<StackedHeading className="md:pt-24" title="Our Expertise" subtitle="Our team of experienced professionals brings a wealth of knowledge and expertise to every client engagement. With specialists in insurance, stock market investing, finance, real estate, and more, we have the skills and resources to handle all your financial needs." />
<StatsGrid cards={statCards} />
<StackedHeading className="md:pt-16" title="Our Commitment to You" subtitle="At MAK GROUP, our clients are at the heart of everything we do. We are committed to providing you with the highest level of service, support, and guidance, and to helping you achieve your financial goals." />
<section className="bg-[#FAFAFA] w-[90%] md:w-6xl mx-auto rounded-[50px] border-[1px] border-[#EBEBEB] mt-15 py-6 md:py-16">
  <div className="max-w-6xl mx-auto px-4 md:px-12">
    <div className="mb-8">
      <p className={`font-lato text-[#4EBA64] text-lg`}>
        When you work with us, you can expect&nbsp;:
      </p>
    </div>
    
    <ul className="space-y-4 pl-3 mb-8">
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] text-[#000000D6]">Personalized attention and tailored solutions</span>
      </li>
      
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] text-[#000000D6]">Expert advice and guidance from experienced professionals</span>
      </li>
      
      <li className="flex items-start">
        <span className="text-[#000000] text-xl md:text-2xl mr-3 leading-none mt-0.5">•</span>
        <span className="font-['Lato'] text-[#000000D6]">Access to a wide range of financial products and services</span>
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
<StackedHeading className="md:pt-20" title="Our Team" subtitle="Our team of experienced professionals brings a wealth of knowledge and expertise to every client engagement." />
<TeamSection teamMembers={teamMembers} />
<Footer />

    </div>
  )
}

export default about