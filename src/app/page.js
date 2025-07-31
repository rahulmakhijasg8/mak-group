"use client"

import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/hero.jsx";
import FiveCardRow from "@/components/fivecardrow";
import SectionHeading from "@/components/stackedheading";
import StatsGrid from "@/components/statsgrid";
import TestimonialCarousel from "@/components/testimonialcarousal";
import Footer from "@/components/footer";
import { Calendar } from "lucide-react";
import Navbar from "@/components/navbar";
import Companies from "@/components/companies";


export default function Home() {
  const cardsArray = [
  {
    icon: <Image src="/insurance-removebg-preview.png" alt="Insurance" width={60} height={60} />,
    title: "Insurance",
    description: "Protect yourself, your family, and your assets with our wide range of insurance products.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link: "/insurance-solutions"
  },
  {
    icon: <Image src="/sm-removebg-preview.png" alt="Investments" width={60} height={60} />,
    title: "Stock Market",
    description: "Invest wisely in the stock market with guidance from our highly experienced sub-brokers at IIFL Securities.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link:"/sm-services"
  },
  {
    icon: <Image src="/car.png" alt="Insurance" width={60} height={60} />,
    title: "Cars",
    description: "Protect yourself, your family, and your assets with our wide range of insurance products.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Whatsapp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link: "/cars"
  },
  {
    icon: <Image src="/loan_products-removebg-preview.png" alt="Investments" width={60} height={60} />,
    title: "Loans",
    description: "Grow your wealth with our expertly managed investment portfolios tailored to your goals.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Whatsapp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link: "/finance-solutions"
  },
  {
    icon: <Image src="/liquidity-removebg-preview.png" alt="Insurance" width={60} height={60} />,
    title: "Investment",
    description: "Protect yourself, your family, and your assets with our wide range of insurance products.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Whatsapp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link: "/insurance-solutions"
  }
];

  const statCards = [
    {
      iconSrc: "/ChatGPT_Image_Apr_21__2025__01_23_44_PM-removebg-preview 1.png",
      iconAlt: "Experience",
      text: "15+ years of experience"
    },
    {
      iconSrc: "assets_management.png",
      iconAlt: "Clients",
      text: "500 Cr Assets Under Management"
    },
    {
      iconSrc: "clients.png",
      iconAlt: "Projects",
      text: "Multiple HNI clients"
    },
    {
      iconSrc: "customers.png",
      iconAlt: "Awards",
      text: "400+ satisfied customers"
    },
    {
      iconSrc: "financial_solutions.png",
      iconAlt: "Experts",
      text: "All-in-One Financial Solutions"
    }
  ];

  const testimonials = [
    {
      quote: "The team at MAK GROUP helped me find the perfect home loan for my needs. Their guidance and support made the process so easy.",
      name: "Priyaj Patel",
      location: "Bangalore",
      avatarSrc: "/testimonial-photo.svg"
    },
    {
      quote: "I was impressed by the professionalism and expertise shown by MAK GROUP when helping me with my financial planning.",
      name: "Rahul Sharma",
      location: "Mumbai",
      avatarSrc: "/testimonial-photo.svg"
    },
    {
      quote: "Working with MAK GROUP has transformed my business's financial strategy. Their advice was invaluable.",
      name: "Anita Desai",
      location: "Delhi",
      avatarSrc: "/testimonial-photo.svg"
    },
    {
      quote: "The investment options provided by MAK GROUP have significantly improved my portfolio performance.",
      name: "Kiran Reddy",
      location: "Hyderabad",
      avatarSrc: "/testimonial-photo.svg"
    },
  ];

  const companyLogos = [
  {
    src: "/HDFC Ergo.png",
    alt: "HDFC Ergo",
    width: 180,
  },
  {
    src: "/NivaBupa1.png",
    alt: "Niva Bupa",
    width: 200,
  },
  {
    src: "/tata-aig.png",
    alt: "Tata AIG",
    width: 160,
  },
  {
    src: "/Care Insuranc.svg",
    alt: "Care Insurance",
    width: 160,
  },
  {
    src: "/IIFL_Securities-removebg-preview.png",
    alt: "IIFL securites",
    width: 180,
  },
  {
    src: "/tata-aia.png",
    alt: "Tata AIA",
    width: 180,
  }
];

  return (
    <div>
      <div className='w-full' style={{
              backgroundImage: "url('/insuranceherobg.png')", // Fixed background image path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: "darken",
              opacity: 100
            }}>
              <Navbar/>
      <section className="w-full py-12 md:py-20 px-4 md:px-14">
  <div className="flex flex-col md:flex-row gap-0 md:gap-0">
    {/* Left Column */}
    <div className="w-full md:w-1/2 md:pr-6 flex flex-col justify-center">
      <h1 className="font-['Lexend'] text-[#221241] font-normal text-[34px] md:text-[54px] mb-4 tracking-[0.6] leading-tight md:leading-[1.3]">
        Your Trusted Partner for All Your Financial Needs
      </h1>
      
      <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] md:text-[20px] mb-8 tracking-normal leading-relaxed md:leading-[1.6]">
        At MAK GROUP, we provide comprehensive solutions for insurance, stock market investments, finance, cars, and real estate. With over 60 years of experience and a dedicated team of experts, we are committed to helping you achieve your financial goals.
      </p>
      
      <div>
        <Link 
          href="tel:+918591353530"
          className="inline-flex items-center justify-center gap-2 px-10 py-5 md:px-7 md:py-4 bg-[#4EBA64] text-white rounded-full font-['Lexend'] font-medium transition-all duration-300 hover:bg-opacity-90 text-[18px] md:text-lg w-auto tracking-normal"
        >
          <Calendar className="h-6 w-6" />
          Call Us Now
        </Link>
      </div>
    </div>
    
    {/* Right Column with Image */}
    <div className="w-full md:w-1/2 pt-10 md:pt-0 flex items-center justify-center">
      <div className="w-full md:w-[100%] h-[100%] md:h-[70%] [@media(min-width:776px)_and_(max-width:817px)]:h-[35%] [@media(min-width:818px)_and_(max-width:903px)]:h-[45%] [@media(min-width:904px)_and_(max-width:995px)]:h-[50%] [@media(min-width:941px)_and_(max-width:995px)]:h-[55%] [@media(min-width:971px)_and_(max-width:995px)]:h-[60%] lg:h-[100%] relative rounded-[50px]">
        <Image
          src="/Group 27.png" // Replace with your actual image path
          alt="Business solutions illustration"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  </div>
</section>
    </div>
    {/* <div className="w-full object-cover h-[81px] md:h-[162px]">
  <Image 
    src="/blockermobile.svg" 
    alt="Description of image"
    width={2000}
    height={1000}
    className="block md:hidden"
  />
  <Image 
    src="/blocker.svg" 
    alt="Description of image"
    width={2000}
    height={1000}
    className="hidden md:block"
  />
</div> */}
    <Companies companyLogos={companyLogos} duration={12} />
    <SectionHeading className="mt-[60px] md:mt-[100px]" title="Our Financial Solutions" subtitle="Personalized services designed to meet you financial goals." />
    <FiveCardRow cards={cardsArray} layout="grid" />
    <SectionHeading title="Why Choose MAK Group?" subtitle="Empowering You with Experience, Trust and Integrity." />
    <StatsGrid cards={statCards} />
    <HeroSection title="Ready to Take Control of Your Financial Future?" darkMode={true} imageContainerClass="w-[120%] h-[100%]" description="Let’s work together to plan, protect, and grow your wealth. Schedule your free consultation now." 
    primaryButtonText="Call Us Now" primaryButtonLink="tel:+918591353530" imageSrc="/Group 46.svg" imageAlt="test" reverseLayout={true} secondaryButtonText="Chat with us on Whatsapp" secondaryButtonLink="https://wa.me/+918591353530"  />
    <SectionHeading className="md:pt-24" title="Trusted by Clients Across Industries" subtitle="Empowering You with Experience, Trust and Integrity" />
    <TestimonialCarousel testimonials={testimonials} />
    <Footer />
    </div>
  );
}
