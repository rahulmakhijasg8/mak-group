import React from 'react'
import InsuranceHero from '@/components/insurancehero'
import StackedHeading from '@/components/stackedheading'
import TwoCardRow from '@/components/twocardrow'
import MultiStepForm from '@/components/multistepform/multistepform'
import StatsGrid from '@/components/statsgrid'
import FaqSection from '@/components/FAQSection'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'


function page() {

    const hotel_costs = {
        icon: <img src="/hotel_costs.png" alt="Equity Trading" width={60} height={60} />,
        title: "Expensive Hospital Costs for Unforeseen Circumstances",
        description: "Medical emergencies can strike when you least expect them, and the cost of hospitalization and treatment can quickly drain your savings. With medical insurance, you can have peace of mind knowing that you're financially prepared for such situations.",
      };
      
      const protection = {
        icon: <img src="/major_illness.png" alt="Investments" width={60} height={60} />,
        title: "Protection Against Major Illnesses",
        description: "In case of a major illness, such as cancer, heart disease, or a serious accident, the cost of treatment can be astronomical. Medical insurance can help cover these expenses, ensuring that you can focus on your recovery without worrying about the financial burden.",
      };

      const bulletPoints = [
              {
                title: "No Increase in Premium Due to Age (Until 1st Claim)",
                description: "With our medical insurance plans, you don't have to worry about your premiums increasing due to age until you make your first claim. This means you can enjoy stable, affordable coverage for longer."
              },
              {
                title: "International Coverage at Very Low Costs",
                description: "Our plans offer international coverage at very competitive prices, so you can travel with confidence knowing that you're protected against medical emergencies, no matter where you are."
              },
              {
                title: "Maternity Benefits",
                description: "We understand the importance of maternal health, which is why our medical insurance plans offer maternity benefits to cover the costs associated with pregnancy and childbirth."
              },
              {
                title: "Cashback for Basic Tests",
                description: "Stay proactive about your health with our cashback feature for basic medical tests. This benefit encourages you to undergo regular check-ups and preventive care, helping you maintain optimal health."
              },
              {
                title: "100% No Claim Bonus",
                description: "With our 100% no claim bonus, you can be rewarded for staying healthy. If you don't make any claims during a policy year, you'll receive a bonus that can be used to enhance your coverage or reduce your premiums."
              }
            ]

            const carFormConfig = {
    steps: [
      {
        id: "carDetails",
        title: "Personal Details",
        subtitle: "Let us help you find the perfect coverage in minutes.",
        fields: [
          {
            id: "name",
            type: "text",
            label: "Name",
            placeholder: "Enter your name",
            required: true
          },

          {
            id: "contact",
            type: "number",
            label: "Contact Number",
            placeholder: "Your phone number",
            required: true
          },

          {
            id: "Dob",
            type: "date",
            label: "Date of Birth",
            placeholder: "Your DOB",
            required: true,
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

  const statCards = [
        {
          iconSrc: "/comprehensive_coverage.png",
          iconAlt: "coverage",
          text: "Comprehensive coverage options"
        },
        {
          iconSrc: "competitive_pricing.png",
          iconAlt: "Pricing",
          text: "Competitive Pricing"
        },
        {
          iconSrc: "service_support.png",
          iconAlt: "Support",
          text: "Personalized support"
        },
        {
          iconSrc: "claims_process.png",
          iconAlt: "Claims process",
          text: "Easy claim process"
        },
        {
          iconSrc: "trusted_partnerships.png",
          iconAlt: "Insurer network",
          text: "Trusted insurer network"
        }
      ];

      const Faqs = [
    {
      question: "What is the minimum age to apply for medical insurance with MAK GROUP?",
      answer: "At MAK Group, we believe health coverage should be accessible at every stage of life.\n\nA child can be added to a family policy after 90 days of birth, provided the parents are already covered.\nAn individual policy can be issued once the child turns 18 years old.\nWe're proud to offer policies for seniors as well—even up to 99 years of age!\nIn fact, there is no upper age limit for obtaining insurance with the right plan."
    },
    {
      question: "Is there a waiting period for pre-existing conditions?",
      answer: "Yes, most medical insurance plans have a waiting period for pre-existing conditions. The duration of the waiting period varies depending on the specific plan and the insurance provider. Our team can help you understand the waiting periods applicable to your chosen plan."
    },
    {
      question: "Can I add new family members to my existing medical insurance policy?",
      answer: "Yes, depending on the plan and insurance product, you can add eligible family members to your policy. Typically, a spouse can be added during renewal, and children can be covered under the same policy as their parents up to the age of 30."
    },
    {
      question: "How do I file a claim for medical expenses?",
      answer: "For Cashless Claims (at Network Hospitals):\nIf you're getting treated at a network (cashless) hospital, please carry the following basic documents:\n\nPAN Card and Aadhaar Card\nCancelled Cheque (for any refunds, if needed)\nInsurance Policy Copy (soft copy is acceptable)\nOur team will help coordinate with the hospital and insurer to ensure a smooth cashless process.\n\nFor Reimbursement Claims (Non-Network Hospitals):\nIf you are admitted to a non-network hospital, don't worry—we offer complete in-house claim processing.\nJust provide us with all original bills, receipts, and relevant medical documents, and we will handle the entire reimbursement process on your behalf."
    },
    {
      question: "Can I buy a used car with a loan?",
      answer: "Yes, we offer multiple online payment options for rent including bank transfers, UPI, and credit/debit cards through our secure payment portal. You can set up automatic monthly payments or pay manually each month."
    }
  ];

  return (
    <div>
      <div>
        {/* <Navbar/> */}
        <InsuranceHero greentitle="Medical Insurance:" title="Protecting Your Health and Finances"
            description="At MAK GROUP, we offer a wide range of services to cater to all your car-related needs. Whether you're looking to buy a new or used car, sell your existing vehicle, or secure a car loan or insurance, we've got you covered."
            imageSrc="/Rectangle 53.jpg"
            imageAlt="insurance"
            reverseLayout={false} />
      </div>
        <StackedHeading title="Why Medical Insurance Is Essential" subtitle="Shield yourself and your family from unexpected medical expenses." />
        <TwoCardRow card1={hotel_costs} card2={protection} />
        <section 
              className="w-full py-12 md:py-20 px-4 md:px-12 bg-[#221241]"
            >
              <div className={`max-w-full mx-auto flex flex-col`}>
                {/* Content Column */}
                <div className="w-full flex flex-col justify-center">
                  <section className="w-full pt-4 md:pt-6">
              <div className="max-w-full">
                <div className="flex flex-col md:flex-row md:items-center">
                  {/* Title Column - Extreme left on desktop */}
                  <div className="w-full md:w-full mb-6 md:mb-0">
                    <h2 className="font-['Lexend'] text-[#FFFFFF] md:pr-[300px] font-normal text-[30px] md:text-[32px] lg:text-[36px] leading-tight max-w-full">
                      Key Benefits of Our Medical Insurance Products
                    </h2>
                  </div>
                  
                  {/* Description Column - Extreme right on desktop */}
                  <div className="w-full md:w-5/12">
                    <p className="font-['Lexend'] text-[#B7C7E7] font-normal text-[18x] md:text-[16px] max-w-md">
                      Designed for peace of mind, every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </section>
                  
                  <div className="font-['Lato'] text-[#B7C7E7] mt-15 ml-3 font-normal text-[18px] md:text-[20px] mb-8">
          {/* Bullet points */}
          {bulletPoints.length > 0 && (
            <div className="space-y-1">
              {bulletPoints.map((bullet, index) => (
                <div key={index} className="flex items-start pr-2 mb-8">
                  <span className="text-[#4EBA64] mr-2">•</span>
                  <div className="flex flex-col">
                    <span className="text-[#4EBA64]">{bullet.title}</span>
                    <span className="mt-2 md:mt-1 text-[16px] md:text-[18px]">{bullet.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
                </div>
              </div>
            </section>
        <div className='bg-[#EBEBEB] w-full pt-8 pb-16 px-4 '>
      <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
      Get a Free Quote 
        </h2>
        
        <h3 className="font-['Lato'] px-5 md:px-80 pb-8 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
        Interested in learning more about how our medical insurance plans can protect you and your family? Get a free quote today by providing us with the following details:
        </h3>
        <MultiStepForm config={carFormConfig} />
        </div>
        <StackedHeading title="Why Choose MAK GROUP for Medical Insurance?" subtitle="A partner you can rely on — before, during, and after your coverage starts." />
        <StatsGrid cards={statCards} />
        <FaqSection faqs={Faqs} />
        <Footer title='Get Started with MAK GROUP Medical Insurance' description='For more information or if you have any other questions, please feel free to reach out to us'/>
        </div>
  )
}

export default page