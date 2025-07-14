import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import SectionHeader from '@/components/heading'
import LoanGridLayout from '@/components/loangrid';
import StackedHeading from '@/components/stackedheading';
import StatsGrid from '@/components/statsgrid';
import FaqSection from '@/components/FAQSection';
import Footer from '@/components/footer';
import BulletHeroSection from '@/components/bulletherosection';
import Navbar from '@/components/navbar';


function page() {

    const loangridItems = [
        // Card items (like Home Loans)
        {
          type: 'card',
          icon: '/HOME 1.png',
          title: 'Home Loans',
          description: 'Turn your dream of homeownership into a reality with our competitive home loan options. We offer attractive interest rates, flexible features, and hassle-free processing.',
          accentColor: '#FF9F43'
        },
        {
          type: 'card',
          icon: '/car l.png',
          title: 'Car Loans',
          description: 'Get behind the wheel of your dream car with our car loan offerings. We have partnered with leading banks and financial institutions to provide you with the best deals and seamless financing.',
          accentColor: '#4EBA64'
        },
        // Image item (like Investment)
        {
          type: 'image',
          title: 'INVESTMENT',
          imageSrc: '/Rectangle 59.jpg',
          imageAlt: 'Investment options on laptop screen'
        },
        // More items to complete the grid...
        {
          type: 'card',
          icon: '/secured l.png',
          title: 'Secured Loans',
          description: 'Leverage your assets to secure the funds you need. Our secured loan options include loans against property, gold loans, and more.',
          accentColor: '#55A5FF'
        },
        {
            type: 'card',
            icon: '/us-removebg-preview (1).png',
            title: 'Unscured Loans',
            description: 'Meet your financial needs without pledging any collateral. We offer unsecured loans with minimum documentation and quick disbursal.',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/personal_loan-removebg-preview.png',
            title: 'Personal Loans',
            description: 'From unexpected expenses to planned celebrations, our personal loans are designed to help you meet your financial goals with ease.',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/Business Loans.png',
            title: 'Business Loans',
            description: 'Fuel your business growth with our business loan options. We offer loans for working capital, equipment purchase, expansion, and more.',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/working capital.png',
            title: 'Working Capital',
            description: 'Ensure smooth cash flow for your business with our working capital solutions. We provide overdraft facilities, cash credit, and more to help you manage your day-to-day operations.',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/Bank Guarantee.png',
            title: 'Bank Guarantee',
            description: 'Secure your business transactions with our bank guarantee services. We assist in obtaining performance guarantees, financial guarantees, and other types of bank guarantees.',
            accentColor: '#55A5FF'
          },
          {
            type: 'image',
            title: 'INVESTMENT',
            imageSrc: '/Rectangle 60.jpg',
            imageAlt: 'Investment options on laptop screen'
          },
          {
            type: 'card',
            icon: '/Cash Credit (CC).png',
            title: 'Cash Credit (CC)',
            description: 'Meet your short-term business requirements with our cash credit facilities. We offer flexible limits and competitive interest rates.',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/sp-removebg-preview.png',
            title: 'Surrogate Products',
            description: 'Explore alternative financing options with our surrogate products. We offer innovative solutions tailored to your specific needs.',
            accentColor: '#55A5FF'
          },
        // Add more items to fill the 3x4 grid (12 items total)
        // ...
      ];

      const statCards = [
        {
          iconSrc: "/loan_products-removebg-preview.png",
          iconAlt: "Loan Products",
          text: "Wide range of loan products"
        },
        {
          iconSrc: "/Competitive_interest_rates-removebg-preview.png",
          iconAlt: "Interest Rates",
          text: "Competitive interest rates"
        },
        {
          iconSrc: "Flexible_repayment_options-removebg-preview.png",
          iconAlt: "Repayment Options",
          text: "Flexible repayment options"
        },
        {
          iconSrc: "Minimal_documentation-removebg-preview.png",
          iconAlt: "Documentation",
          text: "Minimal documentation"
        },
        {
          iconSrc: "Expert_guidance_and_support-removebg-preview.png",
          iconAlt: "Loan Disbursal",
          text: "Quick loan disbursal"
        }
      ];

      const loanFaqs = [
  {
    question: "What is the minimum credit score required to apply for a loan?",
    answer: "The minimum CIBIL score required is 625 for loan applications."
  },
  {
    question: "How long does it take to process a loan application?",
    answer: "If all the documents are available, it takes approximately one week's time for sanction."
  },
  {
    question: "Can I apply for a loan if I am self-employed?",
    answer: "Yes, self-employed individuals can apply for loans with us."
  },
  {
    question: "Are there any prepayment charges for loans?",
    answer: "Prepayment charges depend on the specific loan product and vary from loan to loan."
  },
  {
    question: "Can I apply for a loan online?",
    answer: "Yes, you can apply for loans through our online application process."
  }
];

  return (
    <div>
      <Navbar/>
    <GreenImageHero 
  title="Empowering Your Financial Goals, One Loan at a Time"
  description="At MAK GROUP, we understand that financial needs vary from person to person. That's why we offer a wide range of loan products to cater to your unique requirements, whether you're looking to buy your dream home, purchase a car, expand your business, or meet personal expenses."
  imageSrc="/Rectangle 51.jpg"
  imageAlt="Loans"
  reverseLayout={false}
  primaryButtonText="Chat with us on Whatsapp" primaryButtonIconType='whatsapp' primaryButtonLink="#"
/>
    <SectionHeader title="Explore Our Loan Solutions" description="Loans Designed to Fit Every Stage of Life and Business" />
    <LoanGridLayout items={loangridItems} />
    <BulletHeroSection
      title="Benefits of Choosing MAK GROUP"
      bulletPoints={[
        {
          title: "Maximum Tenure",
          description: "We offer loan tenures up to the maximum allowed by the lending institutions, giving you the flexibility to repay at your own pace.",
          hasAsterisk: true
        },
        {
          title: "No Foreclosure Charges",
          description: "We believe in transparency and do not charge any foreclosure fees if you choose to prepay your loan.",
          hasAsterisk: true
        },
        {
          title: "No ITR Required",
          description: "We understand that not everyone files an Income Tax Return (ITR). We offer loan options that do not require ITR, making the process more accessible.",
          hasAsterisk: true
        }
      ]}
      primaryButtonText="Apply for a Loan Now"
      primaryButtonLink="/contact"
      imageSrc="/financial.svg"
      imageAlt="Financial services illustration"
      showDisclaimer = 'true'
    />
    <StackedHeading mobileAlign='center' title="Why Choose MAK GROUP?" subtitle="Financing Made Simple, Fast, and Transparent" />
    <StatsGrid cards={statCards} />
    <FaqSection faqs={loanFaqs} />
    <Footer title='Get Started with MAK GROUP Finance Solutions' description='For any further questions or inquiries, please feel free to contact our team. We are here to help you with all your financing needs.' />

</div>
  )
}

export default page