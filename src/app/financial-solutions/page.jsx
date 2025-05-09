"use client";

import MultiStepForm from '@/components/multistepform/multistepform';
import SingleForm from '@/components/singleform';
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
            id: "Brand",
            type: "text",
            label: "Brand",
            placeholder: "Enter Brand Name",
            required: true
          },

          {
            id: "Number of years",
            type: "number",
            label: "Years",
            placeholder: "Enter number of years",
            required: true
          },

          {
            id: "Type",
            type: "select",
            label: "Type",
            placeholder: "Select car type",
            required: true,
            options: [
              { value: "suv", label: "SUV" },
              { value: "sedan", label: "Sedan" },
              { value: "hatchback", label: "Hatchback" },
              { value: "minivan", label: "Minivan" },
              { value: "truck", label: "Truck" },
              { value: "convertible", label: "Convertible" }
            ]
          },
          // ...other fields
        ],
      },
      {fields: [
        {
          id: "Brand",
          type: "text",
          label: "Brand",
          placeholder: "Enter Brand Name",
          required: true
        },

        {
          id: "Number of years",
          type: "number",
          label: "Years",
          placeholder: "Enter number of years",
          required: true
        },

        {
          id: "Type",
          type: "select",
          label: "Type",
          placeholder: "Select car type",
          required: true,
          options: [
            { value: "suv", label: "SUV" },
            { value: "sedan", label: "Sedan" },
            { value: "hatchback", label: "Hatchback" },
            { value: "minivan", label: "Minivan" },
            { value: "truck", label: "Truck" },
            { value: "convertible", label: "Convertible" }
          ]
        },
        // ...other fields
      ]
    }

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
    secondaryButtonLink: "https://wa.me/yourphonenumber"
  };
  
  const usedCar = {
    icon: <img src="/used_car.png" alt="Investments" width={60} height={60} />,
    title: "Used Cars",
    description: "Browse our extensive catalog of pre-owned vehicles, all thoroughly inspected and certified for quality and reliability.",
    primaryButtonText: "Browse Used Cars",
    primaryButtonLink: "/book-call",
    secondaryButtonText: "Chat with us on WhatsApp",
    secondaryButtonLink: "https://wa.me/yourphonenumber"
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
      answer: "You can schedule a property viewing by contacting our customer service team through our website, calling our office, or using the 'Schedule Viewing' button on any property listing. We typically arrange viewings within 24-48 hours of your request."
    },
    {
      question: "Can I trade in my old car while buying a new one?",
      answer: "Yes, we offer attractive trade-in options for your old car when you purchase a new one through MAK GROUP. Our team will provide you with a fair valuation for your old car, which can be adjusted against the price of the new car."
    },
    {
      question: "How long does it take to get a car loan approved?",
      answer: "Yes, we charge a standard brokerage fee of one month's rent for residential properties and 2% of the annual rent for commercial properties. This fee covers all our services including property search, viewings, paperwork, and move-in support."
    },
    {
      question: "What is the maximum tenure for a car loan?",
      answer: "The rental process typically takes 3-7 days from application to move-in. This includes property selection, documentation verification, agreement preparation, and key handover. The timeline may vary depending on property availability and documentation readiness."
    },
    {
      question: "Can I buy a used car with a loan?",
      answer: "Yes, we offer multiple online payment options for rent including bank transfers, UPI, and credit/debit cards through our secure payment portal. You can set up automatic monthly payments or pay manually each month."
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
      <MultiStepForm config={carFormConfig} onComplete={handleFormComplete}/>
    </div>
    <HeroSection title="Car Loans" imageSrc="/Rectangle 44.jpg" imageAlt="Car Loans" description="We have partnered with leading banks and financial institutions to offer competitive car loan options. Our experienced team will guide you through the process and help you secure the best loan terms based on your needs and eligibility."
                  primaryButtonText="Apply for a Car Loan" reverseLayout={true} primaryButtonLink="#" />
    <HeroSection title="Car Insurance" imageSrc="/Rectangle 45.jpg" imageAlt="Car Insurance" description="Protect your vehicle with comprehensive car insurance plans from top insurers. We offer a range of options, including third-party liability, own damage, and add-on covers, to ensure your car is fully protected against unforeseen circumstances."
                  primaryButtonText="Get a Car Insurance Quote" reverseLayout={false} primaryButtonLink="#" />
    <PropertyCarousel
  title="Featured Cars"
  subtitle="Browse our collection of premium vehicles"
  buttonText="View All Cars"
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
<div className='flex flex-col items-center'>
<StackedHeading title="Expert Calls and Updates" subtitle="Stay ahead of the market with our expert calls and updates.Our team continuously analyzes market trends and individual stocks to provide you with timely recommendations on what to buy, when to buy, and when to sell." />
<button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Subscribe to Our Expert Calls
        </button>
        </div>



    <HeroWithButtons
  title="Get a Free Insurance Quote"
  subtitle="Discover how MAK GROUP can help you protect what matters most. Submit your details and receive a tailored quote from our experts."
  buttonText="Get a Free quote Now"
  buttonLink="/cars"
  secondaryButtonText="Whatsapp Our Team"
  secondaryButtonLink="/contact"
  darkMode={true}
/>

<FlexGridLayout 
          items={[serviceItems[0]]} 
          itemsPerRow={1}
        />

<FlexGridLayout 
          items={[serviceItems.slice(0,2)]} 
          itemsPerRow={2}
        />

<FlexGridLayout 
          items={serviceItems} 
          itemsPerRow={2}
        />

    </div>
  )
}

export default page