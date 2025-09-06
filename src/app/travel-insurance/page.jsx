"use client"

import React from 'react'
import InsuranceHero from '@/components/insurancehero'
import StackedHeading from '@/components/stackedheading'
import BulletHeroSection from '@/components/bulletherosection';
import FaqSection from '@/components/FAQSection';
import Footer from '@/components/footer';
import AsymmetricCardRows from '@/components/twocardtworows';
import SingleForm from '@/components/singleform';
import Navbar from '@/components/navbar';
import FormStatusMessage from '@/components/FormStatusMessage';
import useFormSubmission from '@/hooks/useFormSubmission';
import Image from 'next/image';
import Companies from '@/components/companies';


function page() {

     const personalLiability = {
        icon: <img src="/personal_liability.png" alt="Equity Trading" width={60} height={60} />,
        title: "Personal Liability ",
        description: "Protect yourself against legal liabilities arising from accidents or damages caused to third parties during your trip.",
      };
      
      const lossordelay = {
        icon: <img src="/loss_or_delay.png" alt="Investments" width={60} height={60} />,
        title: "Loss or Delay of Baggage",
        description: "In case your luggage is lost, stolen, or delayed, MAK GROUP's travel insurance provides coverage to help you manage the situation.",
      };

      const trip_cancellation = {
        icon: <img src="/trip_cancellation.png" alt="Equity Trading" width={60} height={60} />,
        title: "Trip Cancellation & Interruption",
        description: "Unforeseen events can disrupt your travel plans. Our travel insurance covers trip cancellations and interruptions, ensuring that you don't lose your investment.",
      };
      
      const medicalProtection = {
        icon: <img src="/medical_protection.png" alt="Investments" width={60} height={60} />,
        title: "Medical Protection",
        description: " International hospital costs can be tremendously high, even for basic day-care treatment. MAK GROUP's travel insurance covers your medical expenses, giving you peace of mind while traveling.",
      };


      const { 
    handleFormSubmit, 
    submitStatus, 
    resetStatus 
  } = useFormSubmission({
    formType: 'Travel Insurance Quote',
    emailSubject: 'New Travel Insurance Quote Request',
    emailRecipient: 'contact@makgroup.co.in',
    submittingMessage: 'Submitting your travel insurance quote request...',
    successMessage: 'Your travel insurance quote request has been submitted successfully! Our team will get back to you soon.',
    errorMessage: 'There was an error submitting your request. Please try again or contact our support team.'
  });

      const carFormConfig = {
        steps: [
          {
            id: "travelInsurance",
            title: "Travel Details",
            subtitle: "Our experts will help you choose the best travel insurance plan to suit your needs and budget.",
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
                id: "destination",
                type: "text",
                label: "Destination",
                placeholder: "Your Destination",
                required: true
              },
    
              {
                id: "travel dates",
                type: "text",
                label: "Travel Dates",
                placeholder: "Your Travel Dates",
                required: true
              },
    
              {
                id: "no of travellers",
                type: "number",
                label: "Number Of Travellers",
                placeholder: "No Of Travellers",
                required: true,
              },
              {
                id: "age of travellers",
                type: "text",
                label: "Age Of Travellers",
                placeholder: "Ages Of Travellers",
                required: true,
              },
              // ...other fields
            ]},
        ]}

        const insuranceFaqs = [
    {
      question: "Is travel insurance mandatory for international trips?",
      answer: "Many embassies do require it for visa approval—especially Schengen countries, the USA, the UK, and others.\n\nRegardless of requirement, having travel insurance is highly recommended as medical expenses abroad can be extremely high. Travel insurance protects you from unforeseen costs like hospital bills, trip cancellations, baggage loss, or personal liability during your trip."
    },
    {
      question: "Can I extend my travel insurance coverage during my trip?",
      answer: "Yes, you can often extend your travel insurance coverage during your trip, but there are conditions and limitations.\n\nYou will typically need to request the extension before your current policy expires and often while you are still abroad, subject to eligibility criteria and submitting required documents like a good health declaration."
    },
    {
      question: "How do I file a claim under my travel insurance policy?",
      answer: "1. For Cashless Hospitalization:\nIf hospitalization is for more than 24 hours, and the hospital is in the network, the claim can be processed on a cashless basis. Submit your Health ID or policy details at the hospital's insurance desk, and they will coordinate with the insurer directly.\n\n2. For Reimbursement Claims:\nIf you were unable to file a cashless claim while abroad, you can file a reimbursement claim once you're back in India.\n\nCollect all required documents such as:\n• Hospital bills & medical reports\n• Passport copy with immigration stamp\n• Flight tickets or boarding pass\n• Duly filled claim form\n\nOn reaching back, you can send all the documents to us and we will handle it from there."
    },
    {
      question: "Are pre-existing medical conditions covered under travel insurance?",
      answer: "Yes, but with limited coverage. Most travel insurance plans cover life-threatening situations arising from pre-existing diseases (PEDs).\n\nFor example, some TATA AIG policies cover PEDs up to USD 20,000, depending on the sum insured and plan selected. It's important to disclose all pre-existing conditions at the time of policy purchase to ensure claim eligibility and transparency."
    },
    {
      question: "Is there a limit on how much the travel insurance will pay for medical treatment abroad?",
      answer: "The policy offers Unlimited Sum Insured, with coverage of up to sum insured per incident or loss, arising from any different illness or injury. This means that each medical emergency is treated as a separate event, and upto the sum insured it can be claimed for each of such event, subject to policy terms and conditions."
    },
    // {
    //   question: "What is the difference between single-trip and multi-trip travel insurance?",
    //   answer: "Single-trip travel insurance covers you for one specific trip, while multi-trip insurance provides coverage for multiple trips within a specified period, usually one year."
    // },
  ];

  const companyLogos = [
  {
    src: "/tata-aig.png",
    alt: "Tata AIG",
    width: 160,
  },
  {
    src: "/NivaBupa1.png",
    alt: "Niva Bupa",
    width: 200,
  },
  {
    src: "/HDFC Ergo.png",
    alt: "HDFC Ergo",
    width: 180,
  },
  {
    src: "/Care Insuranc.svg",
    alt: "Care Insurance",
    width: 160,
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
        <InsuranceHero greentitle="Travel Insurance:" title="Explore the World Worry-Free with MAK GROUP" description="Embark on your adventures with confidence, knowing that you're protected against unforeseen circumstances. MAK Insurance's travel insurance plans offer comprehensive coverage to ensure that you can travel anywhere around the world without a worry on your mind."
                    imageAlt="Travel Insurance" imageSrc="/Rectangle 56.jpg"/>
        </div>
        <Companies companyLogos={companyLogos} isStatic={true} />
        <StackedHeading mobileAlign='center' title="Why You Need Travel Insurance?" subtitle="Stay Protected Against Unexpected Events Abroad" />
        <AsymmetricCardRows firstRowCard1={personalLiability} firstRowCard2={lossordelay} secondRowCard1={trip_cancellation} secondRowCard2={medicalProtection} />
        <BulletHeroSection primaryButtonNewTab={false} imageSrc="/travel-insurance.png" primaryButtonText="Get Insured Today" primaryButtonLink="#freequote" imageAlt="travel-insurance" title="Benefits of MAK GROUP's Travel Insurance" bulletPoints={[
                {
                  title: "",
                  description: "Comprehensive coverage for medical expenses, trip cancellations, baggage loss, and personal liability."
                },
                {
                  title: "",
                  description: "Cashless claim services in international countries for hassle-free assistance."
                },
                {
                  title: "",
                  description: "24/7 global support and emergency assistance"
                },
                {
                  title: "",
                  description: "Customizable plans to suit your specific travel needs."
                },
                {
                  title: "",
                  description: "Competitive premiums and easy online purchase process"
                }
              ]}
              lightMode={false} />

        <div className='bg-[#FAFAFA] w-full pt-0 pb-16 px-4 '>

      <div id='freequote' className='w-full pt-8 md:pt-16 pb-16 px-4 '>
        <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
          Get a Free Travel Insurance Quote 
        </h2>
        
        <h3 className="font-['Lato'] pb-8 md:px-45 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
          Don't let worries hold you back from exploring the world. Get a free travel insurance quote from MAK GROUP today. Simply provide us with your travel details, including:
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
              submitButtonText='Request a Quote' 
              submitButtonIconType='mail'
            />
          </>
        )}
      </div>
            </div>
        <FaqSection faqs={insuranceFaqs} />
        <Footer title="Get Started with MAK GROUP Travel Insurance" description="Travel the world with confidence, knowing that MAK GROUP's travel insurance has got you covered. Get in touch with us today to secure your peace of mind on your next adventure."/>
    </div>
  )
}

export default page