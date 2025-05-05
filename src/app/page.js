"use client"

import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/hero";
import SectionHeader from "@/components/heading";
import TwoCardRow from "@/components/twocardrow";
import SectionHeading from "@/components/stackedheading";
import StatsGrid from "@/components/statsgrid";
import TestimonialCarousel from "@/components/testimonialcarousal";
import Footer from "@/components/footer";


export default function Home() {
  const insuranceCard = {
    icon: <img src="/insurance-icon.svg" alt="Insurance" width={48} height={48} />,
    title: "Insurance",
    description: "Protect yourself, your family, and your assets with our wide range of insurance products.",
    primaryButtonText: "Book A Free Call Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Chat with us on WhatsApp",
    secondaryButtonLink: "https://wa.me/yourphonenumber"
  };
  
  const investmentCard = {
    icon: <img src="/investment-icon.svg" alt="Investments" width={48} height={48} />,
    title: "Investments",
    description: "Grow your wealth with our expertly managed investment portfolios tailored to your goals.",
    primaryButtonText: "Book A Free Call Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Chat with us on WhatsApp",
    secondaryButtonLink: "https://wa.me/yourphonenumber"
  };

  const statCards = [
    {
      iconSrc: "next.svg",
      iconAlt: "Experience",
      text: "15+ years of experience"
    },
    {
      iconSrc: "next.svg",
      iconAlt: "Clients",
      text: "500+ satisfied clients"
    },
    {
      iconSrc: "next.svg",
      iconAlt: "Projects",
      text: "100+ projects completed"
    },
    {
      iconSrc: "next.svg",
      iconAlt: "Awards",
      text: "25+ industry awards"
    },
    {
      iconSrc: "next.svg",
      iconAlt: "Experts",
      text: "30+ expert advisors"
    }
  ];

  const testimonials = [
    {
      quote: "The team at MAK GROUP helped me find the perfect home loan for my needs. Their guidance and support made the process so easy.",
      name: "Priyaj Patel",
      location: "Bangalore",
      avatarSrc: "vercel.jpg"
    },
    {
      quote: "I was impressed by the professionalism and expertise shown by MAK GROUP when helping me with my financial planning.",
      name: "Rahul Sharma",
      location: "Mumbai",
      avatarSrc: "vercel.jpg"
    },
    {
      quote: "Working with MAK GROUP has transformed my business's financial strategy. Their advice was invaluable.",
      name: "Anita Desai",
      location: "Delhi",
      avatarSrc: "vercel.jpg"
    },
    {
      quote: "The investment options provided by MAK GROUP have significantly improved my portfolio performance.",
      name: "Kiran Reddy",
      location: "Hyderabad",
      avatarSrc: "vercel.jpg"
    },
    {
      quote: "Their personalized approach to insurance planning gave me peace of mind knowing my family is protected.",
      name: "Vikram Singh",
      location: "Pune",
      avatarSrc: "vercel.jpg"
    }
  ];

  return (
    <div>
      {/* <HeroSection  /> */}
      <section className="w-full py-12 md:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="font-['Lexend']  text-[#221241] font-normal text-[34px] md:text-[47px] lg:text-[47px] mb-4">
            Your Trusted Partner for All Your Financial Needs
          </h1>
          
          <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] md:text-[20px] mb-8">
            We provide innovative services that help businesses grow and succeed in today's competitive market. Our team of experts is dedicated to delivering high-quality solutions tailored to your specific needs.
          </p>
          
          <div>
            <Link 
              href="/learn-more" 
              className="inline-block px-6 py-3 bg-[#4EBA64] text-white rounded-full font-['Lexend'] font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              Book A Free Call Now
            </Link>
          </div>
        </div>
        
        {/* Right Column with Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-auto relative rounded-lg overflow-hidden">
            <Image
              src="/hero-image.jpg" // Replace with your actual image path
              alt="Business solutions illustration"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
    <SectionHeader title="Our Financial Solutions" description="Personalized services designed to meet you financial goals." />
    <TwoCardRow card1={insuranceCard} card2={investmentCard} />
    <SectionHeading title="Why Choose MAK Group?" subtitle="Empowering You with Experience, Trust and Integrity." />
    <StatsGrid cards={statCards} />
    <HeroSection title="Ready to Take Control of Your Financial Future?" description="We provide innovative services that help businesses grow and succeed in today's competitive market. Our team of experts is dedicated to delivering high-quality solutions tailored to your specific needs." 
    primaryButtonText="Book A free Call Now" primaryButtonLink="#" imageSrc="/globe.svg" imageAlt="test" reverseLayout={true} secondaryButtonText="Chat with us on Whatsapp" secondaryButtonLink="#"  />
    <SectionHeader title="Trusted by Clients Across Industries" description="Empowering You with Experience, Trust and Integrity" />
    <TestimonialCarousel testimonials={testimonials} />
    <Footer />
    </div>
  );
}
