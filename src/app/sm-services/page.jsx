"use client"
import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import StackedHeading from '@/components/stackedheading'
import StatsGrid from '@/components/statsgrid'
import TwoCardRow from '@/components/twocardrow'
import SingleForm from '@/components/singleform'
import FaqSection from '@/components/FAQSection'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import FormStatusMessage from '@/components/FormStatusMessage';
import useFormSubmission from '@/hooks/useFormSubmission';


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
          iconSrc: "/risk-removebg-preview.png",
          iconAlt: "Risk",
          text: "Flexibility for all risk appetites"
        },
        {
          iconSrc: "/liquidity-removebg-preview.png",
          iconAlt: "Liquididty",
          text: "Liquidity – easy to buy and sell shares"
        },
        {
          iconSrc: "/diversion-removebg-preview 1.png",
          iconAlt: "Investment options",
          text: "Diversified investment options"
        }
      ];

      const smFaqs = [
        {
          question: "What is the minimum amount required to start investing in the stock market?",
          answer: "You can start investing in the stock market with as little as ₹10. This low entry barrier makes stock market investing accessible to everyone, regardless of their financial situation. Many platforms now offer fractional share ownership and small-ticket investments through various instruments like SIPs (Systematic Investment Plans), making it possible to begin your investment journey with minimal capital. This democratization of investing allows even beginners to gain practical experience and gradually build their portfolio as they become more comfortable with market dynamics."
        },
        {
          question: "How do I open a Demat and trading account with MAK GROUP?",
          answer: "To open a Demat and trading account with IIFL Securities, simply provide us with the required details and documents listed in the \"Open Your Free Demat Account\" section above. Our team will guide you through the account opening process."
        },
        {
          question: "What are the charges for trading in the stock market?",
          answer: "Account opening is completely free. However, there are several standard charges that apply to your trading activities. These include brokerage fees for executing your trades, Securities Transaction Tax (STT) which is a government levy on stock transactions, stamp duty charges that vary by state, Goods and Services Tax (GST), and service tax on various aspects of trading services. All these charges are transparently disclosed and are industry-standard across brokerage platforms. Understanding these fees is important for calculating your net returns and planning your investment strategy effectively."
        },
        {
          question: "How can I monitor my stock market investments?",
          answer: "You will receive a mobile application free of cost for monitoring your investments. This user-friendly app provides real-time tracking of your portfolio performance, with features including live market updates, detailed transaction history, profit/loss analysis, and customizable alerts for price movements. The platform also offers comprehensive dashboards with visual representations of your investment distribution and performance metrics. These digital tools ensure you always have instant access to your investment status, empowering you to make informed decisions based on current market conditions."
        },
        {
          question: "Can I invest in the stock market if I am not an Indian resident?",
          answer: "Yes, you can invest in the Indian stock market even if you are not a resident of India. Non-Resident Indians (NRIs) can invest through either an NRE (Non-Resident External) account or an NRO (Non-Resident Ordinary) account, subject to certain trading conditions and regulatory requirements. These specialized accounts are designed to accommodate foreign investors while ensuring compliance with India's foreign exchange regulations. Different tax implications may apply to NRI investors, and some investment categories might have restrictions or require additional approvals as per RBI and SEBI guidelines."
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

      const { 
  handleFormSubmit, 
  submitStatus, 
  resetStatus 
} = useFormSubmission({
  formType: 'Demat Account',
  emailSubject: 'New Demat Account Request',
  emailRecipient: 'access.techdevs@gmail.com',
  
  // Status messages for different stages
  submittingMessage: 'Preparing your account request...',
  fileProcessingMessage: 'Processing your documents, this may take a moment...',
  emailSendingMessage: 'Sending your account request, almost done...',
  successMessage: 'Your account request has been submitted successfully! We will contact you soon.',
  errorMessage: 'There was an error submitting your request. Please try again or contact our support team.'
});

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
          placeholder: "Write Your Contact Number",
          required: true,
          isPhone: true
        },
        {
          id: "email",
          type: "email",
          label: "Email",
          placeholder: "Write Your Email Address",
          required: true,
        },
        {
          id: "pan card",
          type: "text",
          label: "Pan Card Number",
          placeholder: "Write Your Pan Card Number",
          required: true,
        },
        {
          id: "pan card file",
          type: "file",
          label: "Pan Card",
          placeholder: "Upload Pan Card PDF/Image",
          required: true,
        },
        {
          id: "aadhaar card",
          type: "file",
          label: "Aadhaar Card",
          placeholder: "Upload Aadhaar Card PDF/Image",
          required: true,
        },
        {
          id: "cancelled cheque",
          type: "file",
          label: "Cancelled Cheque",
          placeholder: "Cancelled Cheque PDF",
          required: true,
        },
        {
          id: "selfie",
          type: "image",
          label: "Passport Size Photo",
          placeholder: "Upload Your Photo",
          required: true,
        },
        {
          id: "signature",
          type: "file",
          label: "Signature",
          placeholder: "Upload Your Signature",
          required: true,
        }
      ]
    }
  
        ]}

  return (
    <div>
      <Navbar/>
        <GreenImageHero title="Stock Market Services" description="At MAK GROUP, we offer comprehensive stock market services as a franchise (sub-brokers) of IIFL Securities. Our experienced team, with over 15 years of expertise, is committed to providing you with the best and most customized service and guidance to help you navigate the stock market with confidence."
                        imageSrc="/Rectangle 50.jpg" imageAlt="Stck Market Bull" />
        <StackedHeading mobileAlign='center' title="Why Choose MAK GROUP for Your Stock Market Investments?" subtitle="Trusted by Over 400 Clients. Powered by Experience." />
        <StatsGrid cards={smstats} />
        <StackedHeading mobileAlign='left' title="Our Stock Market Services" subtitle="A Full Spectrum of Investment Options to Match Your Goals" />
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
      Open Your Free IIFL Demat Account 
        </h2>
        
        <h3 className="font-['Lato'] pb-8 text-[#000000D6] text-center text-[16px] md:text-[18px] w-full ">
        Start Your Investment Journey with Ease
        </h3>
      {/* Show status message if present */}
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
              submitButtonText='Request Account Now' 
              secondaryButtonText='Need Help? Chat with Us' 
              secondaryButtonLink='#'
            />
          </>
        )}
    </div>
    <StackedHeading title="Why Invest in the Stock Market?" subtitle="The Smartest Way to Build Wealth Over Time" />
    <StatsGrid cards={investmentstats} />
    <FaqSection faqs={smFaqs} />
    <Footer title='Get Started with MAK GROUP Stock Market' description="For any further questions or inquiries, please feel free to contact our team. We are here to help you with all your stock market investment needs." />
    </div>
  )
}

export default page