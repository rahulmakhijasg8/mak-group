"use client";

import MultiStepForm from '@/components/MultiStepForm/MultiStepForm';
import SingleForm from '@/components/singleform';
import React from 'react'
import PropertyCarousel from '@/components/propertycardsection';
import StackedHeading from '@/components/stackedheading';
import LoanGridLayout from '@/components/loangrid';
import BulletHeroSection from '@/components/bulletherosection';
import HeroWithButtons from '@/components/herowithbuttons';
import FlexGridLayout from '@/components/flexcardreusable';

function page() {

  const carFormConfig = {
    steps: [
      {
        id: "carDetails",
        title: "Car Details",
        subtitle: "Just share your car's details and our team will handle the rest.",
        fields: [
          {
            id: "carMake",
            type: "text",
            label: "Car Make",
            placeholder: "Enter car make",
            required: true
          },
          // ...other fields
        ]
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

  const handleFormComplete = (formData) => {
    console.log("Form submitted with data:", formData);
    // Submit to your API or process the data here
    alert("Form submitted successfully!");
  };

  return (
    <div className='flex-col justify-center'>
      <div className='bg-[#EBEBEB] w-full py-8 px-4 '>
      <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
      Sell Your Car Hassle-Free 
        </h2>
        
        <h3 className="font-['Lato'] pb-8 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
        Get the Best Value with Our Quick & Easy Process
        </h3>
      <MultiStepForm config={carFormConfig} onComplete={handleFormComplete}/>
    </div>
    <PropertyCarousel
  title="Featured Cars"
  subtitle="Browse our collection of premium vehicles"
  buttonText="View All Cars"
  buttonLink="/cars"
  items={[
    {
      price: "₹5.5 Lakhs",
      title: "Maruti Suzuki Swift",
      imageSrc: "/images/cars/swift.jpg",
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
<div className='flex flex-col items-center'>
<StackedHeading title="Expert Calls and Updates" subtitle="Stay ahead of the market with our expert calls and updates.Our team continuously analyzes market trends and individual stocks to provide you with timely recommendations on what to buy, when to buy, and when to sell." />
<button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Subscribe to Our Expert Calls
        </button>
        </div>

<LoanGridLayout items={loangridItems} />

<BulletHeroSection
      title="Benefits of Choosing MAK GROUP"
      bulletPoints={[
        {
          title: "Maximum Tenure",
          description: "We offer loan tenures up to the maximum allowed by the lending institutions, giving you the flexibility to repay at your own pace."
        },
        {
          title: "No Foreclosure Charges",
          description: "We believe in transparency and do not charge any foreclosure fees if you choose to prepay your loan."
        },
        {
          title: "No ITR Required",
          description: "We understand that not everyone files an Income Tax Return (ITR). We offer loan options that do not require ITR, making the process more accessible."
        }
      ]}
      primaryButtonText="Apply for a Loan Now"
      primaryButtonLink="/contact"
      imageSrc="/images/financial-services.jpg"
      imageAlt="Financial services illustration"
    />
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