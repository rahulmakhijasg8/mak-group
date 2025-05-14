"use client"
import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import StackedHeading from '@/components/stackedheading'
import StatsGrid from '@/components/statsgrid'
import SectionHeader from '@/components/heading'
import TwoCardRow from '@/components/twocardrow'
import SingleForm from '@/components/singleform'
import FaqSection from '@/components/FAQSection'
import Footer from '@/components/footer'


function page() {
    const smstats = [
        {
          iconSrc: "/service.png",
          iconAlt: "Service and Guidance",
          text: "Best and customized service and guidance"
        },
        {
          iconSrc: "/experienced_staff.png",
          iconAlt: "Experience Staff",
          text: "Highly experienced staff with over 15 years of experience"
        },
        {
          iconSrc: "assets.png",
          iconAlt: "Assets",
          text: "500 Crores Assets Under Management (AUM)"
        },
        {
          iconSrc: "clients.png",
          iconAlt: "Satisfied Clients",
          text: "400+ satisfied clients"
        },
        {
          iconSrc: "mutual_fund-removebg-preview.png",
          iconAlt: "Expertise in MF...",
          text: "Expertise in Mutual Funds, IPOs, and Unlisted Shares"
        }
      ];

      const investmentstats = [
        {
          iconSrc: "/high_return-removebg-preview.png",
          iconAlt: "High Returns",
          text: "Potential for high returns"
        },
        {
          iconSrc: "/ownership-removebg-preview.png",
          iconAlt: "Ownership",
          text: "Ownership in growing companies"
        },
        {
          iconSrc: "risk-removebg-preview.png",
          iconAlt: "Risk",
          text: "Flexibility for all risk appetites"
        },
        {
          iconSrc: "liquididty-removebg-preview.png",
          iconAlt: "Liquididty",
          text: "Liquidity – easy to buy and sell shares"
        },
        {
          iconSrc: "diversion-removebg-preview.png",
          iconAlt: "Investment options",
          text: "Diversified investment options"
        }
      ];

      const smFaqs = [
        {
          question: "What is the minimum amount required to start investing in the stock market?",
          answer: "You can schedule a property viewing by contacting our customer service team through our website, calling our office, or using the 'Schedule Viewing' button on any property listing. We typically arrange viewings within 24-48 hours of your request."
        },
        {
          question: "How do I open a Demat and trading account with MAK GROUP?",
          answer: "To open a Demat and trading account with MAK GROUP, simply provide us with the required details and documents listed in the \"Open Your Free Demat Account\" section above. Our team will guide you through the account opening process."
        },
        {
          question: "What are the charges for trading in the stock market?",
          answer: "Yes, we charge a standard brokerage fee of one month's rent for residential properties and 2% of the annual rent for commercial properties. This fee covers all our services including property search, viewings, paperwork, and move-in support."
        },
        {
          question: "How can I monitor my stock market investments?",
          answer: "The rental process typically takes 3-7 days from application to move-in. This includes property selection, documentation verification, agreement preparation, and key handover. The timeline may vary depending on property availability and documentation readiness."
        },
        {
          question: "Can I invest in the stock market if I am not an Indian resident?",
          answer: "Yes, we offer multiple online payment options for rent including bank transfers, UPI, and credit/debit cards through our secure payment portal. You can set up automatic monthly payments or pay manually each month."
        }
      ];

      const equityTrading = {
        icon: <img src="/equity_trading-removebg-preview.png" alt="Equity Trading" width={60} height={60} />,
        title: "Equity Trading",
        description: "Invest in NSE & BSE-listed companies with expert guidance.",
        primaryButtonText: "Start Trading",
        primaryButtonLink: "#",
        secondaryButtonText: "Chat with us on WhatsApp",
        secondaryButtonLink: "https://wa.me/yourphonenumber",
        primaryButtonIconType: null
      };
      
      const mutualFunds = {
        icon: <img src="/mf-removebg-preview 1.png" alt="Investments" width={60} height={60} />,
        title: "Mutual Funds",
        description: "Diversify your portfolio with curated fund schemes.",
        primaryButtonText: "Explore Mutual Funds",
        primaryButtonLink: "/#",
        secondaryButtonText: "Chat with us on WhatsApp",
        secondaryButtonLink: "https://wa.me/yourphonenumber"
      };

      const carFormConfig = {
        steps: [
          {
            id: "personalDetails",
            title: "Personal Details",
            subtitle: "To open your account, simply provide:",
            fields: [
              {
                id: "Name",
                type: "text",
                label: "Name",
                placeholder: "Enter Your Name",
                required: true
              },
    
              {
                id: "Contact Number",
                type: "number",
                label: "Contact Number",
                placeholder: "write your contact number",
                required: true
              },
    
              {
                id: "email",
                type: "email",
                label: "Email",
                placeholder: "write your email address",
                required: true,
              },
              {
                id: "pan card",
                type: "text",
                label: "Pan Card",
                placeholder: "write your Pan card number",
                required: true,
              },
              {
                id: "cancelled cheque",
                type: "file",
                label: "Cancelled Cheque",
                placeholder: "cancelled cheque details",
                required: true,
              },
              {
                id: "selfie",
                type: "image",
                label: "Selfie Photo",
                placeholder: "upload your selfie",
                required: true,
              },
              {
                id: "signature",
                type: "file",
                label: "Signature on white paper",
                placeholder: "upload your signature",
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
  return (
    <div>
        <GreenImageHero title="Stock Market Services" description="At MAK GROUP, we offer comprehensive stock market services as sub-brokers with IIFL Securities. Our experienced team, with over 15 years of expertise, is committed to providing you with the best and most customized service and guidance to help you navigate the stock market with confidence."
                        imageSrc="/Rectangle 50.jpg" imageAlt="Stck Market Bull" />
        <StackedHeading title="Why Choose MAK GROUP for Your Stock Market Investments?" subtitle="Trusted by Over 400 Clients. Powered by Experience." />
        <StatsGrid cards={smstats} />
        <SectionHeader title="Our Stock Market Services" description="A Full Spectrum of Investment Options to Match Your Goals" />
        <TwoCardRow card1={equityTrading} card2={mutualFunds} />
        {/* <div className='flex flex-col justify-center items-center'>
        <StackedHeading title="Expert Calls and Updates" subtitle="Stay ahead of the market with our expert calls and updates. Our team continuously analyzes market trends and individual stocks to provide you with timely recommendations on what to buy, when to buy, and when to sell." />
        <a 
  href='#'
  className="flex items-center mb-15 justify-center text-center mt-12 px-2 py-4 bg-[#4EBA64] text-white rounded-full font-['Lexend'] text-[18px] md:text-[14px] font-medium hover:bg-opacity-90 transition-all w-[85%] md:w-[270px] mx-auto"
>
            <span>Subscribe to Our Expert Calls</span>
          </a>
        </div> */}

        <div className='bg-[#EBEBEB] w-full pt-8 pb-16 px-4 '>
      <h2 className="font-['Lexend'] pt-8 text-[#221241] text-center font-normal text-[28px] md:text-[40px] leading-tight mb-4 w-full">
      Open Your Free Demat Account 
        </h2>
        
        <h3 className="font-['Lato'] pb-8 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
        Start Your Investment Journey with Ease
        </h3>
      <SingleForm config={carFormConfig} submitButtonText='Request Account Now' secondaryButtonText='Need Help? Chat with Us' secondaryButtonLink='#' onComplete={handleFormComplete}/>
    </div>
    <StackedHeading title="Why Invest in the Stock Market?" subtitle="The Smartest Way to Build Wealth Over Time" />
    <StatsGrid cards={investmentstats} />
    <FaqSection faqs={smFaqs} />
    <Footer title='Get Started with MAK GROUP Stock Market' description="For any further questions or inquiries, please feel free to contact our team. We are here to help you with all your stock market investment needs." />
    </div>
  )
}

export default page