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
import AwardsAchievements from "@/components/awardsachievements";
import SingleForm from "@/components/singleform";
import useFormSubmission from "@/hooks/useFormSubmission";
import FormStatusMessage from "@/components/FormStatusMessage";


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
    description: "Expert stock market guidance with 15+ years experience, 500 Crores AUM, and comprehensive services in equity, mutual funds, AIF & PMS.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link:"/sm-services"
  },
  {
    icon: <Image src="/car.png" alt="Car" width={60} height={60} />,
    title: "Cars",
    description: "Complete car solutions - buy new/used vehicles, sell hassle-free, secure competitive loans, and get comprehensive insurance coverage.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link: "/cars"
  },
  {
    icon: <Image src="/loan_products-removebg-preview.png" alt="Loans" width={60} height={60} />,
    title: "Loans",
    description: "Grow your wealth with our expertly managed investment portfolios tailored to your goals.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link: "/finance-solutions"
  },
  {
    icon: <Image src="/liquidity-removebg-preview.png" alt="Investment" width={60} height={60} />,
    title: "Investment",
    description: "Build long-term wealth through diversified investment strategies and professional portfolio management services.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
  },
  {
    icon: <Image src="/residential.png" alt="Real Estate" width={60} height={60} />,
    title: "Real Estate",
    description: "Discover prime residential and commercial properties with expert guidance for buying, selling, and investment opportunities.",
    primaryButtonText: "Call Us Now",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    link: "/real-estate"
  }
];

const { 
    handleFormSubmit, 
    submitStatus, 
    resetStatus 
  } = useFormSubmission({
    formType: 'Contact Form',
    emailSubject: 'New Contact Form Submission',
    emailRecipient: 'contact@makgroup.co.in',
    submittingMessage: 'Sending your message...',
    successMessage: 'Your message has been sent successfully! We will get back to you shortly.',
    errorMessage: 'There was an error sending your message. Please try again or contact us directly.'
  });

  const carFormConfig = {
    steps: [
      {
        id: "travelInsurance",
        // title: "Travel Details",
        // subtitle: "Our experts will help you choose the best travel insurance plan to suit your needs and budget.",
        fieldsPerRow: 2,
        fields: [
          {
            id: "name",
            type: "text",
            label: "Full Name",
            required: true
          },
          {
            id: "phone number",
            type: "number",
            label: "Phone Number",
            required: true,
          },
          {
            id: "mail",
            type: "email",
            label: "Email Address",
            required: true
          },
          {
            id: "message",
            type: "textarea",
            label: "Message",
            required: true,
          },
          // ...other fields
        ]
      },
    ]
  }

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
      avatarSrc: "/RahulSharma.png"
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
      avatarSrc: "/RahulSharma.png"
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
    src: "/no_change-Photoroom-removebg-preview.png",
    alt: "IIFL securites",
    width: 180,
  },
  {
    src: "/tata-aia.png",
    alt: "Tata AIA",
    width: 180,
  }
];

const exampleAwards = [
  {
    title: "TATA AIG Giant Steps - Pillar of Success",
    src: "/tataaig.jpg"
  },
  {
    title: "TOT Qualification Award 2022",
    src: "/TOT.jpg"
  },
  {
    title: "Travel Connect - Pan India",
    src: "/travelconnect.jpg"
  },
  {
    title: "UTKARSH Gold Award - Commercial Lines FY'25",
    src: "/utkarsh.jpg"
  },
  {
    title: "Vienna Training Conclave 2024",
    src: "/vienna.jpg"
  },
  {
    title: "TATA AIA TOT",
    src: "/tot1.jpg"
  },
  {
    title: "TATA AIA TOT",
    src: "/tataaia.jpg"
  },
  {
    title: "Niva Bupa Special 30 Award - July 2022",
    src: "/special30.jpg"
  },
  {
    title: "Niva Bupa Champion's Meet FY 24-25",
    src: "/nivabupa.jpg"
  },
  {
    title: "TATA AIA COT 2024",
    src: "/aiaoct'24.jpg"
  },
  {
    title: "Giant Steps Emerald Award FY'23",
    src: "/emrald.jpg"
  },
  {
    title: "Greece Training Conclave Nov-24 Achievement",
    src: "/greece.jpg"
  },
  {
    title: "H2 Achievers Leader Summit Langkawi 2024",
    src: "/h2achievers.jpg"
  },
  {
    title: "IIFL Capital Excellence in Broking Q4-FY24",
    src: "/iiflcapital-broking.jpg"
  },
  {
    title: "COT-TOT Strategy Meet Sep'23",
    src: "/mahagunam.jpg"
  }
];

  return (
    <div>
      <div className='' style={{
              backgroundImage: "url('/insuranceherobg.png')", // Fixed background image path
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: "darken",
              opacity: 100
            }}>
              <Navbar/>
              <div className="flex">
      <section className="w-full mx-auto mt-[36px] md:mt-[100px] px-[16px] md:px-[60px] lg:px-[80px]">
  <div className="flex flex-col max-w-7xl mx-auto md:flex-row gap-0 md:gap-0">
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
          className="inline-flex items-center justify-center gap-2 px-6 py-[14px] md:px-7 md:py-4 bg-[#4EBA64] text-white border-[1px] border-[#4EBA64] hover:bg-white hover:text-[#4EBA64] rounded-full font-['Lexend'] font-medium transition-all duration-300 hover:bg-opacity-90 text-[18px] md:text-lg w-auto tracking-normal"
        >
          <Calendar className="h-6 w-6" />
          Call Us Now
        </Link>
      </div>
    </div>
    
    {/* Right Column with Image */}
    <div className="w-full md:w-1/2 pt-10 md:pt-0 flex items-center justify-center">
      <div className="w-full md:w-[100%] z-10 h-[100%] md:h-[70%] [@media(min-width:776px)_and_(max-width:817px)]:h-[35%] [@media(min-width:818px)_and_(max-width:903px)]:h-[45%] [@media(min-width:904px)_and_(max-width:995px)]:h-[50%] [@media(min-width:941px)_and_(max-width:995px)]:h-[55%] [@media(min-width:971px)_and_(max-width:995px)]:h-[60%] lg:h-[100%] relative rounded-[50px]">
        <Image
          src="/Group 27.webp" // Replace with your actual image path
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
    <FiveCardRow cards={cardsArray} cardsPerRow={3} layout="grid" />
    <SectionHeading title="Why Choose MAK Group?" subtitle="Empowering You with Experience, Trust and Integrity." />
    <StatsGrid cards={statCards} />
    <HeroSection title="Ready to Take Control of Your Financial Future?" darkMode={true} imageContainerClass="w-[120%] h-[100%]" description="Let’s work together to plan, protect, and grow your wealth. Schedule your free consultation now." 
    primaryButtonText="Call Us Now" primaryButtonLink="tel:+918591353530" imageSrc="/Frame 38.webp" imageAlt="test" reverseLayout={true} secondaryButtonText="Chat with us on Whatsapp" secondaryButtonLink="https://wa.me/+918591353530"  />
    <SectionHeading title="Trusted by Clients Across Industries" subtitle="Empowering You with Experience, Trust and Integrity" />
    <TestimonialCarousel testimonials={testimonials} />
    <SectionHeading title="Awards & Achievements" />
    <AwardsAchievements showViewMore={true} photos={exampleAwards} mobileInitialCount={2}
  desktopInitialCount={4} />
  <div className="max-w-full px-4 bg-[#F1F1F1] md:px-[60px] py-[60px] md:py-[100px] lg:px-[80px] mt-[60px] md:mt-[80px]">
        <div className="mx-auto max-w-7xl">
        {/* Mobile title - only shows on mobile screens */}
        <div className="block flex justify-center md:hidden mb-6">
          <h2 className="font-['Lexend'] text-[#221241] px-4 font-normal text-[34px] leading-tight">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* First column - iframe (40% width) */}
          <div className="w-full md:w-2/5 mb-0 md:mb-0">
            <div className="relative w-full h-[565px] md:h-[620px] flex items-start">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.944438193771!2d72.83493347425149!3d19.06618035228257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9005295272f%3A0xf2add47abf21e008!2sAMORE%20EDGE!5e0!3m2!1sen!2sin!4v1747262479586!5m2!1sen!2sin"
                title="AMORE EDGE Location"
                className="w-full h-full rounded-[18px]"
                style={{ border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Second column - Contact Form (60% width) */}
          <div className="w-full md:w-3/5 mt-5 md:mt-0 px-0 md:px-6">
            {/* Desktop heading for the form section - only shows on desktop */}
            <div className="hidden md:block mt-5 md:-mt-2">
              <h2 className="font-['Lexend'] text-[#221241] pl-6 md:pl-4 font-normal text-[28px] md:text-[36px] leading-tight">
                Contact Us
              </h2>
            </div>
            
            {submitStatus?.type === 'success' ? (
              <div className="mt-12">
                <FormStatusMessage 
                  status={submitStatus} 
                  onReset={resetStatus} 
                />
              </div>
            ) : (
              <>
                {/* Show loading/error status above the form */}
                {submitStatus && (
                  <div className="mt-4 mb-2">
                    <FormStatusMessage status={submitStatus} />
                  </div>
                )}
                
                <SingleForm 
                  config={carFormConfig} 
                  submitButtonAlign='left'  
                  submitButtonText="Send Message" 
                  submitButtonIconType='none' 
                  onComplete={handleFormSubmit}
                  paddingDesktop='md:p-5 md:pt-1 md:pb-4'
                  paddingMobile='p-4 pt-2'
                />
              </>
            )}
          </div>
        </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}
