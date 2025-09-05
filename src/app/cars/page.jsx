"use client";

import SingleForm from '@/components/singleform';
import React from 'react'
import PropertyCarousel from '@/components/propertycardsection';
import StackedHeading from '@/components/stackedheading';
import GreenImageHero from '@/components/greenimagehero';
import TwoCardRow from '@/components/twocardrow';
import HeroSection from "@/components/hero.jsx";
import StatsGrid from '@/components/statsgrid';
import FaqSection from '@/components/FAQSection';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import FormStatusMessage from '@/components/FormStatusMessage';
import useFormSubmission from '@/hooks/useFormSubmission';
import FeatureSection from '@/components/carsloanhero';


function page() {

  const { 
    handleFormSubmit, 
    submitStatus, 
    resetStatus 
  } = useFormSubmission({
    formType: 'Car Sell',
    emailSubject: 'New Car Sell Request',
    emailRecipient: 'contact@makgroup.co.in', // Or use environment variable
    submittingMessage: 'Submitting your car details...',
    successMessage: 'Your car details have been submitted successfully! We will contact you soon.',
    errorMessage: 'There was an error submitting your car details. Please try again or contact support.'
  });

  const carFormConfig = {
  steps: [
    {
      id: "carDetails",
      title: "Car Details",
      subtitle: "Just share your car's details and our team will handle the rest.",
      fields: [
        {
            id: "personName",
            type: "text",
            label: "Name",
            placeholder: "Enter Your Name",
            required: true
          },
          {
            id: "contactNumber",
            type: "number",
            label: "Contact Number",
            placeholder: "Your Phone Number",
            required: true,
            isPhone: true
          },
        {
          id: "Carmake",
          type: "text",
          label: "Car Make",
          placeholder: "Enter car make (e.g., Maruti, Honda, Hyundai)",
          required: true
        },
        {
          id: "Car Model & Variant",
          type: "text",
          label: "Car Model & Variant",
          placeholder: "Enter car model and variant (e.g., Swift VXI, City ZX)",
          required: true
        },
        {
          id: "Fuel Type",
          type: "select",
          label: "Fuel Type",
          placeholder: "Select Fuel Type",
          required: true,
          options: [
            { value: "Petrol", label: "Petrol" },
            { value: "Diesel", label: "Diesel" },
            { value: "CNG", label: "CNG" },
            { value: "Electric", label: "Electric" },
            { value: "Hybrid", label: "Hybrid" }
          ]
        },
        {
          id: "Transmission",
          type: "select",
          label: "Transmission",
          placeholder: "Select Transmission",
          required: true,
          options: [
            { value: "Manual", label: "Manual" },
            { value: "Automatic", label: "Automatic" },
            { value: "AMT", label: "AMT (Automated Manual)" },
            { value: "CVT", label: "CVT (Continuously Variable)" }
          ]
        },
        {
          id: "Year of Manufacturing",
          type: "select",
          label: "Year of Manufacturing",
          placeholder: "Select Year Of Manufacturing",
          required: true,
          options: [
            { value: "2024", label: "2024" },
            { value: "2023", label: "2023" },
            { value: "2022", label: "2022" },
            { value: "2021", label: "2021" },
            { value: "2020", label: "2020" },
            { value: "2019", label: "2019" },
            { value: "2018", label: "2018" },
            { value: "2017", label: "2017" },
            { value: "2016", label: "2016" },
            { value: "2015", label: "2015" },
            { value: "2014", label: "2014" },
            { value: "2013", label: "2013" },
            { value: "2012", label: "2012" },
            { value: "2011", label: "2011" },
            { value: "2010", label: "2010" },
            { value: "Before 2010", label: "Before 2010" }
          ]
        },
        {
          id: "Kilometers Driven",
          type: "select",
          label: "Kilometers Driven",
          placeholder: "Select Kilometers Driven",
          required: true,
          options: [
            { value: "0-10,000", label: "0 - 10,000 km" },
            { value: "10,000-25,000", label: "10,000 - 25,000 km" },
            { value: "25,000-50,000", label: "25,000 - 50,000 km" },
            { value: "50,000-75,000", label: "50,000 - 75,000 km" },
            { value: "75,000-1,00,000", label: "75,000 - 1,00,000 km" },
            { value: "1,00,000-1,50,000", label: "1,00,000 - 1,50,000 km" },
            { value: "1,50,000-2,00,000", label: "1,50,000 - 2,00,000 km" },
            { value: "Above 2,00,000", label: "Above 2,00,000 km" }
          ]
        },
        {
          id: "Ownership",
          type: "select",
          label: "Ownership",
          placeholder: "Select Car Ownership",
          required: true,
          options: [
            { value: "First Owner", label: "First Owner" },
            { value: "Second Owner", label: "Second Owner" },
            { value: "Third Owner", label: "Third Owner" },
            { value: "Fourth Owner or More", label: "Fourth Owner or More" }
          ]
        },
        {
          id: "Location (City)",
          type: "select",
          label: "Location (City)",
          placeholder: "Select Your City",
          required: true,
          options: [
            { value: "Mumbai", label: "Mumbai" },
            { value: "Delhi", label: "Delhi" },
            { value: "Bangalore", label: "Bangalore" },
            { value: "Hyderabad", label: "Hyderabad" },
            { value: "Chennai", label: "Chennai" },
            { value: "Kolkata", label: "Kolkata" },
            { value: "Pune", label: "Pune" },
            { value: "Ahmedabad", label: "Ahmedabad" },
            { value: "Surat", label: "Surat" },
            { value: "Jaipur", label: "Jaipur" },
            { value: "Lucknow", label: "Lucknow" },
            { value: "Kanpur", label: "Kanpur" },
            { value: "Nagpur", label: "Nagpur" },
            { value: "Indore", label: "Indore" },
            { value: "Thane", label: "Thane" },
            { value: "Bhopal", label: "Bhopal" },
            { value: "Visakhapatnam", label: "Visakhapatnam" },
            { value: "Vadodara", label: "Vadodara" },
            { value: "Ghaziabad", label: "Ghaziabad" },
            { value: "Ludhiana", label: "Ludhiana" },
            { value: "Other", label: "Other" }
          ]
        }
      ]
    }
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
    // primaryButtonText: "Explore New Cars",
    // primaryButtonLink: "/book-call",
    secondaryButtonText: "Chat with us on WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
    primaryButtonIconType:'none'
  };
  
  const usedCar = {
    icon: <img src="/used_car.png" alt="Investments" width={60} height={60} />,
    title: "Used Cars",
    description: "Browse our extensive catalog of pre-owned vehicles, all thoroughly inspected and certified for quality and reliability.",
    primaryButtonText: "Browse Used Cars",
    primaryButtonLink: "#property-carousel",
    secondaryButtonText: "Chat with us on WhatsApp",
    secondaryButtonLink: "https://wa.me/+918591353530",
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

  return (
    <div className='flex-col justify-center'>
      <Navbar/>
      <GreenImageHero 
    title="Cars – Buying, Selling, Loans & Insurance"
    description="At MAK GROUP, we offer a wide range of services to cater to all your car-related needs. Whether you're looking to buy a new or used car, sell your existing vehicle, or secure a car loan or insurance, we've got you covered."
    imageSrc="/Rectangle 43.jpg"
    imageAlt="Cars"
    reverseLayout={false}
  />
      <StackedHeading  title="Buy New or Certified Used Cars" subtitle="Explore Our Trusted Network of Vehicles at the Best Prices" />
      <TwoCardRow card1={newCar} card2={usedCar} />
      <div id='property-carousel'>
      <PropertyCarousel
  title="Browse Featured Used Cars"
  subtitle="Handpicked, Certified Vehicles with Verified History"
  showNavButtons = 'true'
  items={[
    {
      price: "₹25 Lakhs",
      title: "Audi A6",
      imageSrc: "/Audi A6.jpg",
      year: "2017",
      transmission: "Automatic",
      fuel: "Diesel",
      distance: "25,000 km"
    },
    {
      price: "₹42 Lakhs",
      title: "Audi TT",
      imageSrc: "/Audi TT.JPG",
      year: "2017",
      transmission: "Automatic",
      fuel: "Petrol",
      distance: "12,000 km"
    },
    {
      price: "₹50 Lakhs",
      title: "BMW M4",
      imageSrc: "/BMW M4.JPG",
      year: "2014",
      transmission: "Automatic",
      fuel: "Diesel",
      distance: "28,000 km"
    },
    {
      price: "₹17 Lakhs",
      title: "Ford Endevour",
      imageSrc: "/Ford Endevour.jpeg",
      year: "2018",
      transmission: "Automatic",
      fuel: "Diesel",
      distance: "35,000 km"
    },
    {
      price: "₹5.25 Lakhs",
      title: "Hyundai Creta",
      imageSrc: "/Hyundai Creta.jpeg",
      year: "2016",
      transmission: "Automatic",
      fuel: "Diesel",
      distance: "53,000 km"
    },
    {
      price: "₹13.75 Lakhs",
      title: "Innova Crysta",
      imageSrc: "/Innova Crysta.jpeg",
      year: "2019",
      transmission: "Automatic",
      fuel: "Diesel",
      distance: "35,000 km"
    },
    {
      price: "₹14 Lakhs",
      title: "Jeep Compass",
      imageSrc: "/Jeep Compass.jpg",
      year: "2017",
      transmission: "Automatic",
      fuel: "Diesel",
      distance: "45,000 km"
    },
    {
      price: "₹95 Lakhs",
      title: "Mercedes GLE 53 AMG",
      imageSrc: "/Mercedes GLE 53 AMG.jpg",
      year: "2021",
      transmission: "Automatic",
      fuel: "Petrol",
      distance: "38,000 km"
    },
    {
      price: "₹1.5 Crores",
      title: "Mercedes S Class",
      imageSrc: "/Mercedes S Class.JPG",
      year: "2021",
      transmission: "Automatic",
      fuel: "Diesel",
      distance: "6,000 km"
    },
    {
      price: "₹38 Lakhs",
      title: "Mini Cooper",
      imageSrc: "/Mini Cooper.jpeg",
      year: "2020",
      transmission: "Automatic",
      fuel: "Petrol",
      distance: "5,000 km"
    },
    {
      price: "₹2.5 Lakhs",
      title: "Mitsubishi Pajero",
      imageSrc: "/Mitsubishi Pajero.jpeg",
      year: "2006",
      transmission: "Manual",
      fuel: "Diesel",
      distance: "1,25,000 km"
    },
    {
      price: "₹1 Crore",
      title: "Range Rover Sports SVR",
      imageSrc: "/Range Rover Sports SVR.jpg",
      year: "2017",
      transmission: "Automatic",
      fuel: "Petrol",
      distance: "45,000 km"
    }
]}
  type="car"
  darkMode={true}
/>
</div>
      <div className='bg-[#EBEBEB] w-full mt-[60px] md:mt-[0px] pt-8 pb-16 px-4 md:px-[60px] lg:px-[80px]'>
      <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
      Sell Your Car Hassle-Free 
        </h2>
        
        <h3 className="font-['Lato'] pb-8 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
        Get the Best Value with Our Quick & Easy Process
        </h3>
      {submitStatus?.type === 'success' ? (
    <FormStatusMessage 
      status={submitStatus} 
      onReset={resetStatus} 
    />
  ) : (
    <>
      {/* Show loading/error status above the form */}
      {submitStatus && (
        <FormStatusMessage status={submitStatus} />
      )}
      
      {/* Your SingleForm component */}
      <SingleForm 
        config={carFormConfig} 
        onComplete={handleFormSubmit}
        submitButtonText="Submit Car Details"
        submitButtonIconType="mail"
        submitButtonAlign="center"
      />
    </>
  )}
</div>
    <FeatureSection title="Car Loans" imageSrc="/Rectangle 44.jpg" imageAlt="Car Loans" description="We have partnered with leading banks and financial institutions to offer competitive car loan options. Our experienced team will guide you through the process and help you secure the best loan terms based on your needs and eligibility."
                  primaryButtonText="Apply for a Car Loan" primaryButtonIconType='gamepad' secondaryButtonLink="https://wa.me/+918591353530" secondaryButtonText="Message Us on Whatsapp" reverseLayout={true} imageContainerClass='h-[370px] w-[100%]' primaryButtonLink="#" />
    <FeatureSection title="Car Insurance" imageSrc="/Rectangle 45.jpg" imageAlt="Car Insurance" description="Protect your vehicle with comprehensive car insurance plans from top insurers. We offer a range of options, including third-party liability, own damage, and add-on covers, to ensure your car is fully protected against unforeseen circumstances."
                  primaryButtonText="Get a Car Insurance Quote" paddingClass='' primaryButtonIconType='quote' reverseLayout={false} primaryButtonLink="/vehicle-insurance" imageContainerClass='h-[370px] w-[100%]' />

<StackedHeading title="Why Choose MAK GROUP for Your Car Needs?" subtitle="One Place. Multiple Solutions. Total Peace of Mind." />
<StatsGrid cards={statCards} />
<FaqSection faqs={carFaqs} />
<Footer title='Get Started with MAK GROUP Cars' description="Contact us today to discuss your car buying, selling, loan, or insurance needs. Our team is ready to assist you every step of the way." />

    </div>
  )
}

export default page