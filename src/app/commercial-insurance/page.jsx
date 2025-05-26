import React from 'react'
import InsuranceHero from '@/components/insurancehero'
import StackedHeading from '@/components/stackedheading'
import GridItemsSection from '@/components/insurancecardsec'
import FlexGridLayout from '@/components/flexcardreusable'
import BulletHeroSection from '@/components/bulletherosection'
import HeroWithButtons from '@/components/herowithbuttons'
import FaqSection from '@/components/FAQSection'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

function page() {

    const commgridItems = [
        // Card items (like Home Loans)
        {
          type: 'card',
          icon: '/HOME 1.png',
          title: 'Group Medical Cover',
          description: 'Provide your employees with comprehensive medical insurance to cover any health issues that may arise.',
          link: '#',
          accentColor: '#FF9F43'
        },
        {
          type: 'card',
          icon: '/car l.png',
          title: 'Contractor All Risk Policy',
          description: 'Builders can protect themselves against damages that may occur during the construction of a new building.',
          link: '#',
          accentColor: '#4EBA64'
        },
        {
          type: 'card',
          icon: '/secured l.png',
          title: 'Surety Bonds',
          description: 'Government contractors who are required to provide bank guarantees can now opt for Surety Bond Insurance at more competitive rates.',
          link: '#',
          accentColor: '#55A5FF'
        },
        // Image item (like Investment)
        {
          type: 'image',
          title: 'INVESTMENT',
          imageSrc: '/comm_photo.png',
          imageAlt: 'image',
          link: '#'
        },
        // More items to complete the grid...
    ]

    const insuranceFaqs = [
    {
      question: "What types of businesses can benefit from commercial insurance?",
      answer: "You can schedule a property viewing by contacting our customer service team through our website, calling our office, or using the 'Schedule Viewing' button on any property listing. We typically arrange viewings within 24-48 hours of your request."
    },
    {
      question: "Is commercial insurance mandatory for businesses?",
      answer: "While not all types of commercial insurance are mandatory, certain coverages, such as workers' compensation and third-party liability, may be required by law, depending on your business type and location."
    },
    {
      question: "Can I customize my commercial insurance policy based on my business needs?",
      answer: "Yes, we charge a standard brokerage fee of one month's rent for residential properties and 2% of the annual rent for commercial properties. This fee covers all our services including property search, viewings, paperwork, and move-in support."
    },
    {
      question: "How do I determine the right amount of coverage for my business?",
      answer: "The rental process typically takes 3-7 days from application to move-in. This includes property selection, documentation verification, agreement preparation, and key handover. The timeline may vary depending on property availability and documentation readiness."
    },
    {
      question: "How do I file a claim under my commercial insurance policy?",
      answer: "Yes, we offer multiple online payment options for rent including bank transfers, UPI, and credit/debit cards through our secure payment portal. You can set up automatic monthly payments or pay manually each month."
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
        <InsuranceHero greentitle="Commercial Insurance:" title="Safeguarding Your Business with MAK GROUP" description="Running a business comes with its share of risks and uncertainties. MAK GROUP offers a wide range of commercial insurance solutions to protect your venture from potential losses and liabilities, allowing you to focus on growing your business with peace of mind."
                            imageAlt="Commercial Insurance" imageSrc="/Rectangle 57.jpg"/>
        </div>
        <StackedHeading mobileAlign='center' title="Protect Your Business Assets" subtitle="Comprehensive Coverage for Your Property, Goods, and Equipment" />
        <GridItemsSection
          cards={[
            {
              icon: '/financial_protection.png',
              title: 'Home',
              description: 'Safeguard your home from fire, burglary, terrorism, and other natural calamities. You can also protect the valuable contents of your home, such as jewelry, expensive paintings, chandeliers, and more.',
            },
            {
              icon: '/financial_planning.png',
              title: 'Factory / Office',
              description: 'Secure your office or factory premises, along with machinery, inventory, stock, and protect against breakdown losses and other risks.',
            },
            {
              icon: '/tax_free.png',
              title: 'Transport',
              description: "Ensure the safety of your goods and cargo during transportation with MAK GROUP's Marine Insurance product.",
            },
          ]}
          cardWidth={{ mobile: '95%', desktop: '38%'}} page='commercial' // Responsive width
        />
    <StackedHeading mobileAlign='center' title="Safeguard Your Employees and Contractors" subtitle="Comprehensive Coverage for Your Workforce" />
    <FlexGridLayout itemsPerRow={2} items={commgridItems} />
    <BulletHeroSection imageSrc="/travel-hero.png" imageAlt="travel insurance" title="Benefits of MAK GROUP's Commercial Insurance"
     bulletPoints={[
                {
                  title: "",
                  description: "Tailored insurance solutions to suit your specific business needs."
                },
                {
                  title: "",
                  description: "Comprehensive coverage for your assets, employees, and business operations."
                },
                {
                  title: "",
                  description: "Competitive premiums and flexible payment options."
                },
                {
                  title: "",
                  description: "Expert risk assessment and management advice."
                },
                {
                  title: "",
                  description: "Quick and efficient claims processing."
                },
                {
                  title: "",
                  description: "Dedicated customer support and assistance"
                }
              ]}
              lightMode={true} />
    <HeroWithButtons title="Tailored Insurance Plans to Match Your Business Needs" subtitle="Don't let unforeseen risks jeopardize your business. Contact MAK GROUP for a free commercial insurance quote tailored to your specific requirements. Our experts will guide you through the process and help you choose the best coverage for your business."
      darkMode={true} primaryButtonIconType='quote' buttonText="Request a Free Quote" buttonLink="#" secondaryButtonText="Whatsapp Our Team" secondaryButtonLink="#" />
      <FaqSection faqs={insuranceFaqs} />
      <Footer title='Get Started with MAK GROUP Commercial Insurance' description="Safeguard your business from potential risks and liabilities with MAK GROUP's comprehensive commercial insurance solutions. Get in touch with us today to discuss your needs and find the perfect coverage for your venture." />
    </div>
  )
}

export default page