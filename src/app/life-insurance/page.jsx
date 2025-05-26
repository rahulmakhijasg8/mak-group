import React from 'react'
import InsuranceHero from '@/components/insurancehero'
import StackedHeading from '@/components/stackedheading'
import GridItemsSection from '@/components/insurancecardsec'
import RESection from '@/components/propertycarsection'
import BulletHeroSection from '@/components/bulletherosection'
import FaqSection from '@/components/FAQSection'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import HeroWithButtons from '@/components/herowithbuttons'


function page() {

    const lifeInsuranceCards = [
      {
        title: "Term Insurance",
        imageSrc: "/Rectangle 63.jpg",
        description: "Ensure your family's financial well-being with term life insurance plans that offer high coverage at affordable premiums."
      },
      {
        title: "Saving Solutions",
        imageSrc: "/Rectangle 64.jpg",
        description: "Combine the benefits of life insurance with savings and investment options to build wealth over time."
      },
      {
        title: "Retirement Solutions",
        imageSrc: "/Rectangle 65.jpg",
        description: "Plan for a comfortable retirement with pension plans that provide regular income and financial security in your golden years."
      },
      {
        title: "Child Future Plans",
        imageSrc: "/Rectangle 66.jpg",
        description: "Plan for a comfortable retirement with pension plans that provide regular income and financial security in your golden years."
      }
    ];

    const insuranceFaqs = [
    {
      question: "What is the difference between term life insurance and whole life insurance?",
      answer: "Term life insurance provides coverage for a specific period (such as 10, 20, or 30 years), while whole life insurance offers coverage for your entire lifetime, typically up to age 100. Term plans are generally more affordable but expire at the end of the term without any return if unused. Whole life insurance, though more expensive, builds cash value over time and provides lifelong protection regardless of health changes."
    },
    {
      question: "Can I customize my life insurance policy based on my needs?",
      answer: "Yes, MAK GROUP offers customizable life insurance plans to suit your specific requirements and budget."
    },
    {
      question: "Are the premiums paid for life insurance tax-deductible?",
      answer: "No, premiums paid for personal life insurance policies are not tax-deductible. However, the life insurance benefits offer significant tax advantages. The death benefit paid to your beneficiaries is completely tax-free. Additionally, if your policy offers maturity benefits, these proceeds are also tax-exempt under current tax laws, making life insurance an effective tax-free wealth transfer tool."
    },
    {
      question: "How do I determine the right amount of life insurance coverage?",
      answer: "The appropriate amount of life insurance coverage should be determined by evaluating three key factors: your outstanding liabilities (such as mortgage, loans, and debts), your financial goals (children's education, spouse's retirement, etc.), and your current income level. A common approach is to secure coverage that's 10-15 times your annual income, but your specific circumstances may require adjustments to this formula. Consider consulting with a financial advisor who can help assess your unique situation."
    },
    {
      question: "What happens if I outlive my term life insurance policy?",
      answer: "If you outlive a standard term life insurance policy, the coverage simply ends and no benefits are paid. However, there are specialized term policies that offer a Return of Premium (ROP) feature. With an ROP policy, if you survive the term period, the insurer returns all or a significant portion of the premiums you've paid throughout the policy term. These ROP policies typically have higher premiums than standard term policies but provide this money-back benefit if you outlive the policy term."
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
        <InsuranceHero greentitle="Life Insurance:" title="Secure Your Family's Future with MAK GROUP" description="Life is full of uncertainties, and it's essential to ensure that your loved ones are financially protected even in your absence. MAK GROUP offers comprehensive life insurance solutions to help you safeguard your family's future and achieve your financial goals."
            imageAlt="Life Insurance" imageSrc="/Rectangle 55.jpg"/>
        </div>
        <StackedHeading mobileAlign='center' className='px-2' title="Why Choose Life Insurance?" subtitle="More Than Protection — It's a Smart Financial Strategy" />
        <GridItemsSection
  cards={[
    {
      icon: '/financial_protection.png',
      title: 'Financial Protection',
      description: 'Secure your family in case of life’s unforeseen events.',
    },
    {
      icon: '/financial_planning.png',
      title: 'Financial Planning',
      description: 'Protect your loved ones while working toward your goals.',
    },
    {
      icon: '/tax_free.png',
      title: 'Tax-Free Savings',
      description: 'Enjoy guaranteed, tax-efficient returns.',
    },
  ]}
  cardWidth={{ mobile: '90%', desktop: '28%',}} page='life' // Responsive width
/>

<RESection title="Types of Life Insurance Investments" subtitle="Choose a Plan That Matches Your Life Stage & Goals"
                  page='life' cards={lifeInsuranceCards} />
<BulletHeroSection imageSrc="/life-insurance.png" primaryButtonText="Apply for a Loan Now" primaryButtonLink="#" imageAlt="test" title="Benefits of MAK GROUP’s Life Insurance Plans" bulletPoints={[
        {
          title: "",
          description: "Customizable plans to suit your specific needs and budget"
        },
        {
          title: "",
          description: "Competitive premiums and flexible payment options"
        },
        {
          title: "",
          description: "Tax benefits on premiums paid and returns received"
        },
        {
          title: "",
          description: "Reliable customer support and claims assistance"
        },
        {
          title: "",
          description: "Wide range of investment options to choose from"
        }
      ]}
      lightMode={true} />
      <HeroWithButtons
  title="Ready to Protect Your Loved Ones?"
  subtitle="Don't leave your family's future to chance. Contact MAK GROUP for a free life insurance quote tailored to your needs. Our experts will help you choose the right plan to secure your loved ones' financial well-being."
  buttonText="Get a Free Quote Now"
  buttonLink="#"
  primaryButtonIconType='quote'
  secondaryButtonText="Whatsapp Our Team"
  secondaryButtonLink="#"
  darkMode={true}
/>
<FaqSection faqs={insuranceFaqs} />
<Footer title='Get Started with MAK GROUP Life Insurance' description="Secure your family's financial future with MAK GROUP's comprehensive life insurance solutions. Get in touch with us today to discuss your needs, find the perfect plan for you." />
    </div>
  )
}

export default page