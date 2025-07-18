import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import RESection from '@/components/propertycarsection'
import PropertyCarousel from '@/components/propertycardsection';
import FaqSection from '@/components/FAQSection';
import StackedHeading from '@/components/stackedheading';
import StatsGrid from '@/components/statsgrid';
import TestimonialCarousel from '@/components/testimonialcarousal';
import SectionHeader from '@/components/heading';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


function services() {
  const featuredProperties = [
    {
      price: "Rs. 1.5 Crore",
      title: "Apartment",
      imageSrc: "/images/apartment1.jpg",
      location: "Mumbai",
      beds: "2 Beds",
      area: "1,200 sq. ft."
    },
    // Add more properties...
  ];

  const propertyFaqs = [
    {
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a property viewing by contacting our customer service team through our website, calling our office, or using the 'Schedule Viewing' button on any property listing. We typically arrange viewings within 24-48 hours of your request."
    },
    {
      question: "What documents are required for renting a property?",
      answer: "To rent a property, you'll need to provide identity proof (Aadhar card, passport, etc.), address proof, income proof (salary slips or tax returns), and employment verification. Additional documents may be required based on the property owner's requirements."
    },
    {
      question: "Do you charge any brokerage fees?",
      answer: "Yes, we charge a standard brokerage fee of one month's rent for residential properties and 2% of the annual rent for commercial properties. This fee covers all our services including property search, viewings, paperwork, and move-in support."
    },
    {
      question: "How long does the rental process take?",
      answer: "The rental process typically takes 3-7 days from application to move-in. This includes property selection, documentation verification, agreement preparation, and key handover. The timeline may vary depending on property availability and documentation readiness."
    },
    {
      question: "Can I pay rent online?",
      answer: "Yes, we offer multiple online payment options for rent including bank transfers, UPI, and credit/debit cards through our secure payment portal. You can set up automatic monthly payments or pay manually each month."
    }
  ];

  const statCards = [
    {
      iconSrc: "residential.png",
      iconAlt: "Residential",
      text: "Extensive portfolio of residential & commercial properties"
    },
    {
      iconSrc: "professionals.png",
      iconAlt: "Professionals",
      text: "Expert guidance from seasoned professionals"
    },
    {
      iconSrc: "personalized.png",
      iconAlt: "Personalized",
      text: "Personalized services tailored to your needs"
    },
    {
      iconSrc: "off-market.png",
      iconAlt: "Off-market",
      text: "Access to exclusive & off-market listings"
    },
    {
      iconSrc: "support.png",
      iconAlt: "Suport",
      text: "End-to-end support — from search to paperwork"
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

  return (
    <div>
      <Navbar/>
      <GreenImageHero 
    title="Real Estate Services"
    description="Our team of experienced professionals brings a wealth of knowledge and expertise to every client engagement. With specialists in insurance, stock market investing, finance, real estate, and more, we have the skills and resources to handle all your financial needs."
    imageSrc="/Rectangle 37.jpg"
    imageAlt="Modern luxury home with pool"
    reverseLayout={false}
  />

  <StackedHeading title="Why Choose MAK GROUP for Your Real Estate Needs?" subtitle="Personalized, Professional, and End-to-End Support" />
  <StatsGrid cards={statCards} />
  <RESection
  title="Our Real Estate Services"
  subtitle="Residential, Commercial & Transactional Expertise Under One Roof"
  cards={[
    {
      title: "Residential Properties",
      imageSrc: "/Rectangle 38.jpg",
      listItems: [
        "Apartments",
        "Villas",
        "Plots",
        "Independent Houses"
      ],
      link: "/properties/residential"
    },
    {
      title: "Commercial Properties",
      imageSrc: "/Rectangle 39.jpg",
      listItems: [
        "Office Spaces",
        "Retail Shops",
        "Warehouses",
        "Co-working Spaces"
      ],
      link: "/properties/commercial"
    },
    {
      title: "Industrial Properties",
      imageSrc: "/Rectangle 32.jpg",
      listItems: [
        "Manufacturing Units",
        "Factories",
        "Industrial Plots",
        "Storage Facilities"
      ],
      link: "/properties/industrial"
    }
  ]}
/>

<PropertyCarousel
  title="Featured Properties"
  subtitle="Explore Our Latest Listings Across Prime Locations"
  // buttonText="View More Properties"
  // buttonLink="/properties"

  items={[
  {
    price: "Rs. 1.5 Crore",
    title: "Apartment",
    imageSrc: "/Rectangle 35.jpg",
    location: "Mumbai",
    beds: "2 Beds",
    area: "1,200 sq. ft.",
    type: "Sale"
  },
  {
    price: "Rs. 35,000/month",
    title: "Apartment",
    imageSrc: "/Rectangle 35.jpg",
    location: "Mumbai",
    beds: "2 Beds",
    area: "1,200 sq. ft.",
    type: "Rent"
  },
  {
    price: "Rs. 2.2 Crore",
    title: "Apartment",
    imageSrc: "/Rectangle 35.jpg",
    location: "Mumbai",
    beds: "2 Beds",
    area: "1,200 sq. ft.",
    type: "Sale"
  },
  {
    price: "Rs. 42,000/month",
    title: "Apartment",
    imageSrc: "/Rectangle 35.jpg",
    location: "Mumbai",
    beds: "2 Beds",
    area: "1,200 sq. ft.",
    type: "Rent"
  },
  {
    price: "Rs. 1.8 Crore",
    title: "Apartment",
    imageSrc: "/Rectangle 35.jpg",
    location: "Mumbai",
    beds: "2 Beds",
    area: "1,200 sq. ft.",
    type: "Sale"
  },
  // Add more properties...
]}
/>
<StackedHeading className='md:mt-[75px]' title="Trusted by Clients Across Industries" subtitle="Empowering You with Experience, Trust, and Integrity." />
<TestimonialCarousel testimonials={testimonials} />

<FaqSection
  faqs={propertyFaqs}
/>

<Footer title='Get Started with MAK GROUP Real Estate' description='Ready to find your perfect property or get the best deals on your investment? Contact us today to discuss your real estate needs and how we can help.'/>
  </div>
  )
}

export default services