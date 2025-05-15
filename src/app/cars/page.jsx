"use client";

import SingleForm from '@/components/singleform';
import InsuranceHero from '@/components/insurancehero';
import React from 'react'
import PropertyCarousel from '@/components/propertycardsection';
import StackedHeading from '@/components/stackedheading';
import HeroWithButtons from '@/components/herowithbuttons';
import FlexGridLayout from '@/components/flexcardreusable';
import GreenImageHero from '@/components/greenimagehero';
import SectionHeader from '@/components/heading';
import TwoCardRow from '@/components/twocardrow';
import HeroSection from "@/components/hero.jsx";
import StatsGrid from '@/components/statsgrid';
import FaqSection from '@/components/FAQSection';
import Footer from '@/components/footer';

function page() {

  const carFormConfig = {
    steps: [
      {
        id: "carDetails",
        title: "Car Details",
        subtitle: "Just share your car's details and our team will handle the rest.",
        fields: [
          {
            id: "Carmake",
            type: "text",
            label: "Car Make",
            placeholder: "Name",
            required: true
          },

          {
            id: "Car Model & Variant",
            type: "text",
            label: "Car Model & Variant",
            placeholder: "what’s your car model and variant",
            required: true
          },

          {
            id: "Fuel Type",
            type: "select",
            label: "Fuel Type",
            placeholder: "select fuel type",
            required: true,
            options: [
              { value: "Petrol", label: "Petrol" },
              { value: "Diesel", label: "Diesel" },
              { value: "CNG", label: "CNG" },
            ]
          },
          {
            id: "Transmission",
            type: "select",
            label: "Transmission",
            placeholder: "select transmission",
            required: true,
            options: [
              { value: "Petrol", label: "Petrol" },
              { value: "Diesel", label: "Diesel" },
              { value: "CNG", label: "CNG" },
            ]
          },
          {
            id: "Year of Manufacturing",
            type: "select",
            label: "Year of Manufacturing",
            placeholder: "select year of manufacturing",
            required: true,
            options: [
              { value: "Petrol", label: "Petrol" },
              { value: "Diesel", label: "Diesel" },
              { value: "CNG", label: "CNG" },
            ]
          },
          {
            id: "Kilometers Driven",
            type: "select",
            label: "Kilometers Driven",
            placeholder: "select kilometers driven",
            required: true,
            options: [
              { value: "Petrol", label: "Petrol" },
              { value: "Diesel", label: "Diesel" },
              { value: "CNG", label: "CNG" },
            ]
          },
          {
            id: "Ownership",
            type: "select",
            label: "Ownership",
            placeholder: "select car ownership",
            required: true,
            options: [
              { value: "Petrol", label: "Petrol" },
              { value: "Diesel", label: "Diesel" },
              { value: "CNG", label: "CNG" },
            ]
          },
          {
            id: "Location (City)",
            type: "select",
            label: "Location (City)",
            placeholder: "select your city",
            required: true,
            options: [
              { value: "Petrol", label: "Petrol" },
              { value: "Diesel", label: "Diesel" },
              { value: "CNG", label: "CNG" },
            ]
          },
        ],
      },

      // {
      //   id: "carDetails",
      //   title: "Car Details",
      //   subtitle: "Just share your car's details and our team will handle the rest.",
      //   fields: [
      //     {
      //       id: "carMake",
      //       type: "text",
      //       label: "Car Make",
      //       placeholder: "Enter car make",
      //       required: true
      //     },
      //     // ...other fields
      //   ]
      // },
      // ...other steps
    ]
  };

  const loangridItems = [
    // Card items (like Home Loans)
    {
      type: 'card',
      icon: '/HOME 1.png',
      title: 'Home Loans',
      description: 'Turn your dream of homeownership into a reality with our competitive home loan options. We offer attractive interest rates, flexible features, and hassle-free processing.',
      link: '/products/home-loans',
      accentColor: '#FF9F43'
    },
    {
      type: 'card',
      icon: '/icons/car.svg',
      title: 'Auto Loans',
      description: 'Get on the road with our competitive auto loan rates. Finance your new or used vehicle with flexible terms tailored to your budget.',
      link: '/products/auto-loans',
      accentColor: '#4EBA64'
    },
    // Image item (like Investment)
    {
      type: 'image',
      title: 'INVESTMENT',
      imageSrc: '/Rectangle 55.jpg',
      imageAlt: 'Investment options on laptop screen',
      link: '/products/investments'
    },
    // More items to complete the grid...
    {
      type: 'card',
      icon: '/icons/business.svg',
      title: 'Business Loans',
      description: 'Grow your business with our flexible financing solutions designed for businesses of all sizes.',
      link: '/products/business-loans',
      accentColor: '#55A5FF'
    },
    // Add more items to fill the 3x4 grid (12 items total)
    // ...
  ];

  const serviceItems = [
    {
      type: 'card',
      icon: '/icons/home.svg',
      title: 'Home Loans',
      description: 'Turn your dream of homeownership into a reality with our competitive home loan options. We offer attractive interest rates, flexible features, and hassle-free processing.',
      link: '/services/home-loans'
    },
    {
      type: 'card',
      icon: '/icons/car.svg',
      title: 'Auto Loans',
      description: 'Get on the road with our competitive auto loan rates. Finance your new or used vehicle with flexible terms tailored to your budget.',
      link: '/services/auto-loans'
    },
    {
      type: 'image',
      title: 'Investments',
      imageSrc: '/images/investment.jpg',
      imageAlt: 'Investment options',
      link: '/services/investments'
    },
    // Additional items...
  ];

  const newCar = {
    icon: <img src="/new_cars.png" alt="New Cars" width={60} height={60} />,
    title: "New Cars",
    description: "We have partnerships with leading car manufacturers to help you find the perfect new car that suits your needs and budget.",
    primaryButtonText: "Explore New Cars",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Chat with us on WhatsApp",
    secondaryButtonLink: "https://wa.me/yourphonenumber",
    primaryButtonIconType:'none'
  };
  
  const usedCar = {
    icon: <img src="/used_car.png" alt="Investments" width={60} height={60} />,
    title: "Used Cars",
    description: "Browse our extensive catalog of pre-owned vehicles, all thoroughly inspected and certified for quality and reliability.",
    primaryButtonText: "Browse Used Cars",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Chat with us on WhatsApp",
    secondaryButtonLink: "https://wa.me/yourphonenumber",
    primaryButtonIconType: 'none'
  };

  const statCards = [
    {
      iconSrc: "/ChatGPT_Image_Apr_21__2025__01_23_44_PM-removebg-preview 1.png",
      iconAlt: "Wide Selection",
      text: "Wide selection of new and pre-owned vehicles"
    },
    {
      iconSrc: "car_loans.png",
      iconAlt: "Car Loans",
      text: "Competitive car loan options"
    },
    {
      iconSrc: "car_insurance.png",
      iconAlt: "Insurance",
      text: "Comprehensive car insurance plans"
    },
    {
      iconSrc: "expert_guidance.png",
      iconAlt: "Expert Guidance",
      text: "Expert guidance and support throughout the process"
    },
    {
      iconSrc: "selling.png",
      iconAlt: "hassle-free",
      text: "Hassle-free selling process"
    }
  ];

  const carFaqs = [
    {
      question: "What documents do I need to provide to sell my car?",
      answer: "To sell your car, you'll need to provide essential documentation that establishes ownership and vehicle details. This includes your car's Registration Certificate (RC), which is the primary proof of ownership and registration status. You'll also need to disclose the current kilometer reading (KM) of your vehicle as it significantly impacts the value assessment. Additionally, clear and comprehensive photographs of your car from multiple angles (exterior, interior, engine bay, etc.) are required to help potential buyers evaluate the vehicle's condition accurately before scheduling an in-person inspection."
    },
    {
      question: "Can I trade in my old car while buying a new one?",
      answer: "Yes, we offer attractive trade-in options for your old car when you purchase a new one through MAK GROUP. Our team will provide you with a fair valuation for your old car, which can be adjusted against the price of the new car."
    },
    {
      question: "How long does it take to get a car loan approved?",
      answer: "Our car loan approval process is remarkably efficient with same-day approval available for both salaried individuals and self-employed applicants. This streamlined processing timeline applies equally regardless of your employment status, provided all required documentation is submitted correctly. Our specialized systems allow us to verify your eligibility quickly, enabling fast decisions so you can proceed with your vehicle purchase without unnecessary delays."
    },
    {
      question: "What is the maximum tenure for a car loan?",
      answer: "We offer flexible financing options with car loans available for a maximum tenure of up to 7 years. This extended repayment period allows you to manage your monthly budget effectively by spreading the cost over a longer timeframe, resulting in lower monthly payments. The loan tenure you select should balance your monthly payment comfort level with the total interest paid over the life of the loan, and our financial advisors can help you determine the optimal arrangement for your financial situation."
    },
    {
      question: "Can I buy a used car with a loan?",
      answer: "Yes, we provide comprehensive financing solutions for both used car purchases and refinancing of existing vehicles. Our used car loans offer competitive interest rates and flexible terms similar to new car financing, with adjustments based on the vehicle's age and condition. Additionally, our refinancing options allow current car owners to leverage their vehicle's equity to secure better interest rates, extend loan terms, or adjust monthly payments to better suit their financial needs."
    }
  ];

  const handleFormComplete = (formData) => {
    console.log("Form submitted with data:", formData);
    // Submit to your API or process the data here
    alert("Form submitted successfully!");
  };

  return (
    <div className='flex-col justify-center'>
      <GreenImageHero 
    title="Cars – Buying, Selling, Loans & Insurance"
    description="At MAK GROUP, we offer a wide range of services to cater to all your car-related needs. Whether you're looking to buy a new or used car, sell your existing vehicle, or secure a car loan or insurance, we've got you covered."
    imageSrc="/Rectangle 43.jpg"
    imageAlt="Cars"
    reverseLayout={false}
  />
      <SectionHeader title="Buy New or Certified Used Cars" description="Explore Our Trusted Network of Vehicles at the Best Prices" />
      <TwoCardRow card1={newCar} card2={usedCar} />
      <div className='bg-[#EBEBEB] w-full pt-8 pb-16 px-4 '>
      <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
      Sell Your Car Hassle-Free 
        </h2>
        
        <h3 className="font-['Lato'] pb-8 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
        Get the Best Value with Our Quick & Easy Process
        </h3>
      <SingleForm config={carFormConfig} onComplete={handleFormComplete}/>
    </div>
    <HeroSection title="Car Loans" imageSrc="/Rectangle 44.jpg" imageAlt="Car Loans" description="We have partnered with leading banks and financial institutions to offer competitive car loan options. Our experienced team will guide you through the process and help you secure the best loan terms based on your needs and eligibility."
                  primaryButtonText="Apply for a Car Loan" paddingY={0} primaryButtonIconType='gamepad' secondaryButtonLink="#" secondaryButtonText="Message Us on Whatsapp" reverseLayout={true} imageContainerClass='h-[70%] w-[100%]' primaryButtonLink="#" />
    <HeroSection title="Car Insurance" imageSrc="/Rectangle 45.jpg" imageAlt="Car Insurance" description="Protect your vehicle with comprehensive car insurance plans from top insurers. We offer a range of options, including third-party liability, own damage, and add-on covers, to ensure your car is fully protected against unforeseen circumstances."
                  primaryButtonText="Get a Car Insurance Quote" paddingY={0} useRegularImgTag={true} primaryButtonIconType='quote' reverseLayout={false} primaryButtonLink="#" imageContainerClass='h-[70%] w-[100%]' />
    <PropertyCarousel
  title="Featured Cars"
  subtitle="Browse our collection of premium vehicles"
  buttonText="View More Cars"
  buttonLink="/cars"
  items={[
    {
      price: "₹5.5 Lakhs",
      title: "Maruti Suzuki Swift",
      imageSrc: "/Rectangle 46.jpg",
      year: "2018",
      transmission: "Manual",
      fuel: "Petrol",
      distance: "50,000 km"
    },
    {
      price: "₹5.5 Lakhs",
      title: "Honda City",
      imageSrc: "/Rectangle 47.jpg",
      year: "2018",
      transmission: "Manual",
      fuel: "Petrol",
      distance: "50,000 km"
    },
    {
      price: "₹5.5 Lakhs",
      title: "Maruti Suzuki Swift",
      imageSrc: "/Rectangle 48.jpg",
      year: "2018",
      transmission: "Manual",
      fuel: "Petrol",
      distance: "50,000 km"
    },
    {
      price: "₹5.5 Lakhs",
      title: "Maruti Suzuki Swift",
      imageSrc: "/Rectangle 49.jpg",
      year: "2018",
      transmission: "Manual",
      fuel: "Petrol",
      distance: "50,000 km"
    },
    {
      price: "₹5.5 Lakhs",
      title: "Maruti Suzuki Swift",
      imageSrc: "/Rectangle 49.jpg",
      year: "2018",
      transmission: "Manual",
      fuel: "Petrol",
      distance: "50,000 km"
    },
    // More car items...
  ]}
  type="car"
  darkMode={true}
/>

<StackedHeading title="Why Choose MAK GROUP for Your Car Needs?" subtitle="One Place. Multiple Solutions. Total Peace of Mind." />
<StatsGrid cards={statCards} />
<FaqSection faqs={carFaqs} />
<Footer title='Get Started with MAK GROUP Cars' description="Contact us today to discuss your car buying, selling, loan, or insurance needs. Our team is ready to assist you every step of the way." />

    </div>
  )
}

export default page