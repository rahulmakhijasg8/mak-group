import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import SectionHeader from '@/components/heading'
import FlexGridLayout from '@/components/flexcardreusable'
import StackedHeading from '@/components/stackedheading'
import StatsGrid from '@/components/statsgrid'
import TestimonialCarousel from '@/components/testimonialcarousal'
import FaqSection from '@/components/FAQSection'
import Footer from '@/components/footer'
import HeroWithButtons from '@/components/herowithbuttons'
import GridItemsSection from '@/components/insurancecardsec'
import RESection from '@/components/propertycarsection'
import BulletHeroSection from '@/components/bulletherosection'
import AsymmetricCardRows from '@/components/twocardtworows'


function page() {

    const insuranceItems = [
        {
          type: 'card',
          icon: '/Medical_Insurance-removebg-preview.png',
          title: 'Medical Insurance',
          description: 'Safeguard your health and finances with our comprehensive medical insurance plans. From individual to family floater plans, we have options to suit every need and budget.',
          link: 'medical-insurance',
          linkbtn:true
        },
        {
  type: 'card',
  icon: '/Vehicle_Insurance-removebg-preview.png',
  title: 'Vehicle Insurance',
  description: 'Keep your vehicles secure on the road with our vehicle insurance offerings. We provide coverage for cars, bikes, and commercial vehicles, with add-on options for enhanced protection.',
  link: 'vehicle-insurance',
  linkbtn:true,
},
        {
          type: 'card',
          title: 'Life Insurance',
          icon: '/Life_Insurance-removebg-preview.png',
          description:"Ensure your family's financial security with our life insurance solutions. Choose from term insurance, endowment plans, ULIPs, and more, tailored to your unique requirements.",
          link: 'life-insurance',
          linkbtn:true
        },
        {
            type: 'card',
            title: 'Travel Insurance',
            icon:'/Travel_Insurance_-removebg-preview.png',
            description:"Travel with peace of mind knowing you're covered against unexpected emergencies. Our travel insurance plans offer medical coverage, trip cancellation, baggage loss, and more.",
            link: 'travel-insurance',
            linkbtn:true
          },
          {
            type: 'card',
            title: 'Commercial Insurance',
            icon:'/Commercial_Insurance-removebg-preview.png',
            description:"Protect your business assets and operations with our commercial insurance options. From property to liability coverage, we help you safeguard your enterprise against potential risks.",
            link: 'commercial-insurance',
            linkbtn:true
          },
        // Additional items...
      ];

      const statCards = [
        {
          iconSrc: "/wide_range.png",
          iconAlt: "Wide Selection",
          text: "Wide range of insurance products across multiple sectors"
        },
        {
          iconSrc: "partnership.png",
          iconAlt: "Partnership",
          text: "Partnerships with leading insurance providers"
        },
        {
          iconSrc: "competitive.png",
          iconAlt: "Competitive pricing",
          text: "Competitive pricing and customizable plans"
        },
        {
          iconSrc: "expert.png",
          iconAlt: "Expert Guidance",
          text: "Expert guidance and personalized service"
        },
        {
          iconSrc: "hassle-free.png",
          iconAlt: "hassle-free",
          text: "Hassle-free claims support"
        }
      ];

       // Custom WhatsApp icon component
const WhatsAppIcon = ({ className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 18 18" 
      className={className}
      fill="none"
    >
      <g clipPath="url(#clip0_320_1944)">
        <path d="M13.1284 10.7306L13.1216 10.7869C11.4724 9.96487 11.2999 9.85537 11.0869 10.1749C10.9392 10.3961 10.5086 10.8979 10.3789 11.0464C10.2477 11.1926 10.1172 11.2039 9.8944 11.1026C9.6694 10.9901 8.94715 10.7539 8.09215 9.98887C7.42615 9.39262 6.97915 8.66137 6.84715 8.43637C6.6274 8.05687 7.08715 8.00287 7.50565 7.21087C7.58065 7.05337 7.5424 6.92962 7.4869 6.81787C7.43065 6.70537 6.9829 5.60287 6.7954 5.16337C6.6154 4.72537 6.43015 4.78087 6.2914 4.78087C5.8594 4.74337 5.54365 4.74937 5.2654 5.03887C4.0549 6.36937 4.36015 7.74187 5.3959 9.20137C7.4314 11.8654 8.5159 12.3559 10.4989 13.0369C11.0344 13.2071 11.5227 13.1831 11.9089 13.1276C12.3394 13.0594 13.2341 12.5869 13.4209 12.0581C13.6122 11.5294 13.6122 11.0906 13.5559 10.9894C13.5004 10.8881 13.3534 10.8319 13.1284 10.7306Z" fill="currentColor"/>
        <path d="M15.39 2.58707C9.62325 -2.98768 0.0795 1.05557 0.07575 8.92007C0.07575 10.4921 0.4875 12.0251 1.272 13.3788L0 18.0003L4.75125 16.7613C10.68 19.9638 17.997 15.7113 18 8.92457C18 6.54257 17.07 4.30082 15.3787 2.61632L15.39 2.58707ZM16.5015 8.89983C16.497 14.6246 10.2127 18.1998 5.2425 15.2778L4.9725 15.1173L2.16 15.8486L2.91375 13.1148L2.7345 12.8336C-0.3585 7.90983 3.195 1.47482 9.054 1.47482C10.0324 1.47236 11.0016 1.66399 11.9055 2.03862C12.8094 2.41325 13.6299 2.96343 14.3197 3.65732C15.0133 4.34251 15.5634 5.15898 15.938 6.05908C16.3126 6.95919 16.5042 7.92489 16.5015 8.89983Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_320_1944">
          <rect width="18" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  const testimonials = [
    {
      quote: "The team at MAK GROUP helped me find the perfect home loan for my needs. Their guidance and support made the process so easy.",
      name: "Priyaj Patel",
      location: "Bangalore",
      avatarSrc: "/testimonial-photo.svg"
    },
    {
      quote: "I was impressed by the professionalism and expertise shown by MAK GROUP when helping me with my financial planning.",
      name: "Rahul Sharma",
      location: "Mumbai",
      avatarSrc: "/testimonial-photo.svg"
    },
    {
      quote: "Working with MAK GROUP has transformed my business's financial strategy. Their advice was invaluable.",
      name: "Anita Desai",
      location: "Delhi",
      avatarSrc: "/testimonial-photo.svg"
    },
    {
      quote: "The investment options provided by MAK GROUP have significantly improved my portfolio performance.",
      name: "Kiran Reddy",
      location: "Hyderabad",
      avatarSrc: "/testimonial-photo.svg"
    },
  ];

  const insuranceFaqs = [
    {
      question: "What types of insurance does MAK GROUP offer?",
      answer: "You can schedule a property viewing by contacting our customer service team through our website, calling our office, or using the 'Schedule Viewing' button on any property listing. We typically arrange viewings within 24-48 hours of your request."
    },
    {
      question: "How do I choose the right insurance plan?",
      answer: "Choosing the right insurance plan depends on your specific needs, budget, and risk profile. Our experienced team at MAK GROUP can help you assess your requirements and guide you towards the most suitable insurance solutions. Feel free to contact us for personalized advice."
    },
    {
      question: "Can I customize my insurance coverage?",
      answer: "Yes, we charge a standard brokerage fee of one month's rent for residential properties and 2% of the annual rent for commercial properties. This fee covers all our services including property search, viewings, paperwork, and move-in support."
    },
    {
      question: "How can I get a free insurance quote from MAK GROUP?",
      answer: "The rental process typically takes 3-7 days from application to move-in. This includes property selection, documentation verification, agreement preparation, and key handover. The timeline may vary depending on property availability and documentation readiness."
    },
    {
      question: "What should I do if I need to file an insurance claim?",
      answer: "Yes, we offer multiple online payment options for rent including bank transfers, UPI, and credit/debit cards through our secure payment portal. You can set up automatic monthly payments or pay manually each month."
    }
  ];

  return (
    <div>
        <GreenImageHero title="Protect What Matters Most with MAK GROUP" description="At MAK GROUP, we understand that life is full of uncertainties. That's why we offer a wide range of insurance solutions to help you protect your health, wealth, and everything in between. Our experienced team works with leading insurance providers to bring you the best coverage options at competitive prices."
         imageSrc="/Rectangle 52.jpg" imageAlt="insurance solutions" />
         <SectionHeader title="Our Insurance Offerings" description="Personalized Protection for Every Area of Your Life" />
         <FlexGridLayout itemsPerRow={3} items={insuranceItems} />
         <StackedHeading title="Why Choose MAK GROUP for Your Insurance Needs?" subtitle="Expert Advice. Transparent Service. Trusted Coverage."/>
         <StatsGrid cards={statCards} />
<SectionHeader title="Trusted by Clients Across Industries" description="Empowering You with Experience, Trust, and Integrity." />
<TestimonialCarousel testimonials={testimonials} />
<FaqSection faqs={insuranceFaqs} />
<Footer title='Get Started with MAK GROUP Comprehensive Insurance' description="For more information or if you have any other questions, please don't hesitate to reach out to us."/>
    </div>
  )
}

export default page