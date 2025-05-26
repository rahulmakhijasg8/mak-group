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
          link: '#',
          accentColor: '#FF9F43'
        },
        {
          type: 'card',
          icon: '/car l.png',
          title: 'Car Loans',
          description: 'Get behind the wheel of your dream car with our car loan offerings. We have partnered with leading banks and financial institutions to provide you with the best deals and seamless financing.',
          link: '#',
          accentColor: '#4EBA64'
        },
        // Image item (like Investment)
        {
          type: 'image',
          title: 'INVESTMENT',
          imageSrc: '/Rectangle 59.jpg',
          imageAlt: 'Investment options on laptop screen',
          link: '/products/investments'
        },
        // More items to complete the grid...
        {
          type: 'card',
          icon: '/secured l.png',
          title: 'Secured Loans',
          description: 'Leverage your assets to secure the funds you need. Our secured loan options include loans against property, gold loans, and more.',
          link: '#',
          accentColor: '#55A5FF'
        },
        {
            type: 'card',
            icon: '/us-removebg-preview (1).png',
            title: 'Unscured Loans',
            description: 'Meet your financial needs without pledging any collateral. We offer unsecured loans with minimum documentation and quick disbursal.',
            link: '#',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/personal_loan-removebg-preview.png',
            title: 'Personal Loans',
            description: 'From unexpected expenses to planned celebrations, our personal loans are designed to help you meet your financial goals with ease.',
            link: '#',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/Business Loans.png',
            title: 'Business Loans',
            description: 'Fuel your business growth with our business loan options. We offer loans for working capital, equipment purchase, expansion, and more.',
            link: '#',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/working capital.png',
            title: 'Working Capital',
            description: 'Ensure smooth cash flow for your business with our working capital solutions. We provide overdraft facilities, cash credit, and more to help you manage your day-to-day operations.',
            link: '#',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/Bank Guarantee.png',
            title: 'Bank Guarantee',
            description: 'Secure your business transactions with our bank guarantee services. We assist in obtaining performance guarantees, financial guarantees, and other types of bank guarantees.',
            link: '#',
            accentColor: '#55A5FF'
          },
          {
            type: 'image',
            title: 'INVESTMENT',
            imageSrc: '/Rectangle 60.jpg',
            imageAlt: 'Investment options on laptop screen',
            link: '/products/investments'
          },
          {
            type: 'card',
            icon: '/Cash Credit (CC).png',
            title: 'Cash Credit (CC)',
            description: 'Meet your short-term business requirements with our cash credit facilities. We offer flexible limits and competitive interest rates.',
            link: '#',
            accentColor: '#55A5FF'
          },
          {
            type: 'card',
            icon: '/sp-removebg-preview.png',
            title: 'Surrogate Products',
            description: 'Explore alternative financing options with our surrogate products. We offer innovative solutions tailored to your specific needs.',
            link: '#',
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
          answer: "You can schedule a property viewing by contacting our customer service team through our website, calling our office, or using the 'Schedule Viewing' button on any property listing. We typically arrange viewings within 24-48 hours of your request."
        },
        {
          question: "How long does it take to process a loan application?",
          answer: "The loan processing time depends on the type of loan and the completeness of the documentation provided. Generally, personal loans and car loans can be processed within 24-48 hours, while home loans may take 7-14 days."
        },
        {
          question: "Can I apply for a loan if I am self-employed?",
          answer: "Yes, we charge a standard brokerage fee of one month's rent for residential properties and 2% of the annual rent for commercial properties. This fee covers all our services including property search, viewings, paperwork, and move-in support."
        },
        {
          question: "Are there any prepayment charges for loans?",
          answer: "The rental process typically takes 3-7 days from application to move-in. This includes property selection, documentation verification, agreement preparation, and key handover. The timeline may vary depending on property availability and documentation readiness."
        },
        {
          question: "Can I apply for a loan online?",
          answer: "Yes, we offer multiple online payment options for rent including bank transfers, UPI, and credit/debit cards through our secure payment portal. You can set up automatic monthly payments or pay manually each month."
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
/>
    <SectionHeader title="Explore Our Loan Solutions" description="Loans Designed to Fit Every Stage of Life and Business" />
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
      imageSrc="/financial.svg"
      imageAlt="Financial services illustration"
    />
    <StackedHeading mobileAlign='center' title="Why Choose MAK GROUP?" subtitle="Financing Made Simple, Fast, and Transparent" />
    <StatsGrid cards={statCards} />
    <FaqSection faqs={loanFaqs} />
    <Footer title='Get Started with MAK GROUP Finance Solutions' description='For any further questions or inquiries, please feel free to contact our team. We are here to help you with all your financing needs.' />

</div>
  )
}

export default page