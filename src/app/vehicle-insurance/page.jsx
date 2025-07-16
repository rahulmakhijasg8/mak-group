"use client"
import React from 'react'
import InsuranceHero from '@/components/insurancehero'
import StackedHeading from '@/components/stackedheading'
import FlexGridLayout from '@/components/flexcardreusable'
import StatsGrid from '@/components/statsgrid';
import SingleForm from '@/components/singleform';
import FaqSection from '@/components/FAQSection'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import FormStatusMessage from '@/components/FormStatusMessage';
import useFormSubmission from '@/hooks/useFormSubmission';
import Image from 'next/image'


function page() {

    const coverageItems = [
        {
          type: 'card',
          icon: '/liability.png',
          title: 'Third Party Liability',
          description: 'Mandatory by law, this coverage protects you from damages sustained to others in case of an accident.',
          link: '#'
        },
        {
          type: 'card',
          title: 'Own Damage',
          icon: '/damage.png',
          description:"Get 50% cover on selected parts of your vehicle.",
        },
        {
  type: 'card',
  icon: '/add-ons.png',
  title: 'Add-Ons',
  description: 'Enhance your protection with additional coverage options:\n\n• **Zero Depreciation**: Enjoy 100% bumper-to-bumper cover in case of any accidental claim.\n\n• **Engine Cover**: Protect your engine against damage due to waterlogging and other incidents.\n\n• **Tyre Cover**: Stay covered in case of tyre bursts.\n\n• **Consumables**: Get coverage for components used in repairs, such as nuts, bolts, engine oil, and brake fluid.\n\n• **Return to Invoice**: In case of total loss of your vehicle, receive the invoice value at the time of purchase, including registration cost.',
},
      ];

      const statCards = [
        {
          iconSrc: "/comprehensive_coverage_options.png",
          iconAlt: "coverage",
          text: "Comprehensive coverage, tailored to your needs"
        },
        {
          iconSrc: "competitive_premiums.png",
          iconAlt: "Premiums",
          text: "Competitive premiums with flexible payments"
        },
        {
          iconSrc: "quick_claims.png",
          iconAlt: "claims",
          text: "Fast, stress-free claim process"
        },
        {
          iconSrc: "customer_support.png",
          iconAlt: "customer support",
          text: "24/7 customer support"
        },
        {
          iconSrc: "garages.png",
          iconAlt: "garages",
          text: "Large network of trusted garages"
        }
      ];

      const { 
    handleFormSubmit, 
    submitStatus, 
    resetStatus 
  } = useFormSubmission({
    formType: 'Vehicle Insurance Quote',
    emailSubject: 'New Vehicle Insurance Quote Request',
    emailRecipient: 'contact@makgroup.co.in',
    submittingMessage: 'Submitting your insurance quote request...',
    successMessage: 'Your insurance quote request has been submitted successfully! Our team will get back to you soon.',
    errorMessage: 'There was an error submitting your request. Please try again or contact our support team.'
  });

      const carFormConfig = {
        steps: [
          {
            id: "vehicleDetails",
            title: "Vehicle Details",
            subtitle: "Our experts will guide you through the process and help you choose the best coverage for your vehicle.",
            fields: [
              {
                id: "Name",
                type: "text",
                label: "Full Name",
                placeholder: "Enter Your Name",
                required: true
              },
    
              {
                id: "Contact Number",
                type: "number",
                label: "Contact Number",
                placeholder: "Your Contact Number",
                required: true,
                isPhone: true
              },
    
              // Updated field configuration with Indian vehicle registration validation
{
  id: "vehicleNumber",
  type: "text",
  label: "Vehicle Registration Number",
  placeholder: "Eg. MH-01-XY-0000",
  required: true,
  validation: (value) => {
    if (!value) return null; // Required validation is handled separately
    
    // Indian vehicle registration number regex pattern
    // Format: XX-00-XX-0000 or XX00XX0000 (with or without hyphens)
    // XX = State code (2 letters)
    // 00 = District code (2 digits)  
    // XX = Series (1-2 letters)
    // 0000 = Unique number (4 digits)
    
    const indianVehicleRegex = /^[A-Z]{2}[-\s]?[0-9]{2}[-\s]?[A-Z]{1,2}[-\s]?[0-9]{4}$/i;
    
    // Remove spaces and convert to uppercase for validation
    const cleanValue = value.replace(/\s+/g, '').toUpperCase();
    
    // Check if it matches the pattern
    if (!indianVehicleRegex.test(cleanValue)) {
      return "Please enter a valid Indian vehicle registration number (e.g., MH-01-XY-0000)";
    }
    
    // Additional validation: Check if state code exists (optional)
    const stateCodes = [
      'AP', 'AR', 'AS', 'BR', 'CG', 'GA', 'GJ', 'HR', 'HP', 'JK', 'JH', 
      'KA', 'KL', 'MP', 'MH', 'MN', 'ML', 'MZ', 'NL', 'OD', 'PB', 'RJ', 
      'SK', 'TN', 'TS', 'TR', 'UP', 'UK', 'WB', 'AN', 'CH', 'DN', 'DD', 
      'DL', 'LD', 'PY'
    ];
    
    const stateCode = cleanValue.substring(0, 2);
    if (!stateCodes.includes(stateCode)) {
      return "Please enter a valid Indian state code (e.g., MH, DL, KA, etc.)";
    }
    
    return null; // No error
  }
},
              {
                id: "vehicleMake",
                type: "text",
                label: "Vehicle Make & Model",
                placeholder: "Vehicle Make And Model",
                required: true,
              },
              {
          id: "Year of Manufacturing",
          type: "select",
          label: "Year of Manufacturing",
          placeholder: "Select Year Of Manufacturing",
          required: true,
          options: [
            { value: "2025", label: "2025" },
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
            { value: "Before 2010", label: "Before 2010" }]
          }
              // ...other fields
            ]},
        ]}
        
        const insuranceFaqs = [
    {
      question: "Is third-party liability insurance mandatory?",
      answer: "It is a legal requirement to have third-party insurance when driving a vehicle in India. Third-party insurance covers damages or injuries caused to a third party or their property by the insured vehicle."
    },
    {
      question: "What is the difference between own damage and third-party liability coverage? ",
      answer: "Own damage coverage protects your vehicle against damages, while third-party liability covers damages caused to others by your vehicle."
    },
    {
      question: "Can I customize my vehicle insurance policy with add-ons?",
      answer: "Add-ons are optional benefits that extend the protection of your standard comprehensive or standalone own damage car insurance policy by covering specific risks that may not be included in the basic policy, such as engine damage, roadside assistance, or zero depreciation cover."
    },
    {
      question: "How do I file a claim for my vehicle insurance?",
      answer: "Contact your insurer as soon as possible after the incident, providing details of the accident, location, and extent of the damage. You can usually do this via their helpline or website."
    },
    {
      question: "How is the premium for my vehicle insurance calculated?",
      answer: "This is based on your car's Insured Declared Value (IDV), which is essentially its current market value minus depreciation based on its age."
    }
  ];

  return (
    <div>
      <div className='w-full' style={{
                    backgroundImage: "url('/insuranceherobg.png')", // Fixed background image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}>
                    <Navbar/>
        <InsuranceHero greentitle="Vehicle Insurance:" title="Protecting Your Ride with MAK GROUP"
                    description="As a vehicle owner, it's crucial to safeguard your investment and protect yourself from potential financial liabilities. MAK GROUP offers comprehensive vehicle insurance coverage to give you peace of mind on the road."
                    imageSrc="/Rectangle 54.jpg"
                    imageAlt="vehicle-insurance"
                    reverseLayout={false} />
        </div>
        <div className="w-full object-cover h-[81px] md:h-[162px]">
        <Image 
          src="/gblockermobile.svg" 
          alt="Description of image"
          width={2000}
          height={1000}
          className="block md:hidden"
        />
        <Image 
          src="/gblocker.svg" 
          alt="Description of image"
          width={2000}
          height={1000}
          className="hidden md:block"
        />
      </div>
        <StackedHeading mobileAlign='center' title="Know Your Coverage" subtitle="Understand the Protection We Offer" />
        <FlexGridLayout itemsPerRow={2} items={coverageItems} />
        <StackedHeading className='md:px-20' mobileAlign='center' title="Why Choose MAK GROUP Vehicle Insurance?" subtitle="Experience Unmatched Service and Support" />
        <StatsGrid cards={statCards} />
        <div className='bg-[#EBEBEB] w-full pt-8 pb-16 mt-10 md:mt-30 px-4 '>
              <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
              Get a Free Quote Today 
                </h2>
                
                <h3 className="font-['Lato'] pb-8 text-[#000000D6] text-center md:px-80 text-[16px] md:text-[18px] w-full ">
                Don't leave your vehicle unprotected. Reach out to MAK GROUP for a free vehicle insurance quote. Simply provide us with the following details:
                </h3>
              {/* Show success message or form */}
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
              onComplete={handleFormSubmit} // Changed from handleFormComplete
              submitButtonText='Request Quote' 
              submitButtonIconType='whatsapp'
            />
          </>
        )}
            </div>

        <FaqSection faqs={insuranceFaqs} />
        <Footer title="Get Started with MAK GROUP Vehicle Insurance" description="Protect your ride with MAK GROUP's comprehensive vehicle insurance solutions. Get in touch with us today to secure your peace of mind on the road." />

    </div>
  )
}

export default page