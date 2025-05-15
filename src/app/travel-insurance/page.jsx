"use client"

import React from 'react'
import InsuranceHero from '@/components/insurancehero'
import StackedHeading from '@/components/stackedheading'
import BulletHeroSection from '@/components/bulletherosection';
import FaqSection from '@/components/FAQSection';
import Footer from '@/components/footer';
import AsymmetricCardRows from '@/components/twocardtworows';
import SingleForm from '@/components/singleform';


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

      const carFormConfig = {
        steps: [
          {
            id: "travelInsurance",
            title: "Travel Details",
            subtitle: "Our experts will help you choose the best travel insurance plan to suit your needs and budget.",
            fields: [
              {
                id: "destination",
                type: "text",
                label: "Destination",
                placeholder: "Your destination",
                required: true
              },
    
              {
                id: "travel dates",
                type: "text",
                label: "Travel Dates",
                placeholder: "Your travel dates",
                required: true
              },
    
              {
                id: "nooftravellers",
                type: "number",
                label: "Number Of Travellers",
                placeholder: "No of travellers",
                required: true,
              },
              {
                id: "ageoftravellers",
                type: "text",
                label: "Age Of Travellers",
                placeholder: "Ages of travellers",
                required: true,
              },
              // ...other fields
            ]},
        ]}

        const handleFormComplete = (formData) => {
            console.log("Form submitted with data:", formData);
            // Submit to your API or process the data here
            alert("Form submitted successfully!");
          };


        const insuranceFaqs = [
    {
      question: "Is travel insurance mandatory for international trips?",
      answer: "Term life insurance provides coverage for a specific period (such as 10, 20, or 30 years), while whole life insurance offers coverage for your entire lifetime, typically up to age 100. Term plans are generally more affordable but expire at the end of the term without any return if unused. Whole life insurance, though more expensive, builds cash value over time and provides lifelong protection regardless of health changes."
    },
    {
      question: "What is the difference between single-trip and multi-trip travel insurance?",
      answer: "Single-trip travel insurance covers you for one specific trip, while multi-trip insurance provides coverage for multiple trips within a specified period, usually one year."
    },
    {
      question: "Are pre-existing medical conditions covered under travel insurance?",
      answer: "No, premiums paid for personal life insurance policies are not tax-deductible. However, the life insurance benefits offer significant tax advantages. The death benefit paid to your beneficiaries is completely tax-free. Additionally, if your policy offers maturity benefits, these proceeds are also tax-exempt under current tax laws, making life insurance an effective tax-free wealth transfer tool."
    },
    {
      question: "Can I extend my travel insurance coverage during my trip?",
      answer: "The appropriate amount of life insurance coverage should be determined by evaluating three key factors: your outstanding liabilities (such as mortgage, loans, and debts), your financial goals (children's education, spouse's retirement, etc.), and your current income level. A common approach is to secure coverage that's 10-15 times your annual income, but your specific circumstances may require adjustments to this formula. Consider consulting with a financial advisor who can help assess your unique situation."
    },
    {
      question: "How do I file a claim under my travel insurance policy?",
      answer: "If you outlive a standard term life insurance policy, the coverage simply ends and no benefits are paid. However, there are specialized term policies that offer a Return of Premium (ROP) feature. With an ROP policy, if you survive the term period, the insurer returns all or a significant portion of the premiums you've paid throughout the policy term. These ROP policies typically have higher premiums than standard term policies but provide this money-back benefit if you outlive the policy term."
    }
  ];


  return (
    <div>
        <InsuranceHero greentitle="Travel Insurance:" title="Explore the World Worry-Free with MAK GROUP" description="Embark on your adventures with confidence, knowing that you're protected against unforeseen circumstances. MAK GROUP's travel insurance plans offer comprehensive coverage to ensure that you can travel anywhere around the world without a worry on your mind."
                    imageAlt="Travel Insurance" imageSrc="/Rectangle 56.jpg"/>
        <StackedHeading title="Why You Need Travel Insurance?" subtitle="Stay Protected Against Unexpected Events Abroad" />
        <AsymmetricCardRows firstRowCard1={personalLiability} firstRowCard2={lossordelay} secondRowCard1={trip_cancellation} secondRowCard2={medicalProtection} />
        <BulletHeroSection imageSrc="/travel-insurance.png" primaryButtonText="Get Insured Today" primaryButtonLink="#" imageAlt="travel-insurance" title="Benefits of MAK GROUP's Travel Insurance" bulletPoints={[
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

        <div className='bg-[#EBEBEB] w-full pt-8 pb-16 mt-10 md:mt-30 px-4 '>
              <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
              Get a Free Travel Insurance Quote 
                </h2>
                
                <h3 className="font-['Lato'] pb-8 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
                Don't let worries hold you back from exploring the world. Get a free travel insurance quote from MAK GROUP today. Simply provide us with your travel details, including:
                </h3>
              <SingleForm config={carFormConfig} submitButtonText='Request a Quote' submitButtonIconType='whatsapp' onComplete={handleFormComplete}/>
            </div>
        <FaqSection faqs={insuranceFaqs} />
        <Footer title="Get Started with MAK GROUP Travel Insurance" description="Travel the world with confidence, knowing that MAK GROUP's travel insurance has got you covered. Get in touch with us today to secure your peace of mind on your next adventure."/>
    </div>
  )
}

export default page