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
import Navbar from '@/components/navbar'


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
      answer: "At MAK GROUP, we offer a comprehensive range of insurance solutions to suit both personal and commercial needs.\n\nOur offerings include:\n• Health Insurance (Individual, Family, Senior Citizens)\n• Motor Insurance (Car, Bike, Commercial Vehicles)\n• Life Insurance\n• Travel Insurance\n• Commercial & Corporate Insurance\n• Fire & Marine Insurance\n\nWhether you're safeguarding your family, vehicle, travels, or business, our expert team is here to guide you to the right policy."
    },
    {
      question: "How can I choose the right insurance plan?",
      answer: "Choosing the right plan depends on your specific needs, lifestyle, and budget.\n\nAt MAK GROUP, our experienced advisors will:\n• Understand your requirements\n• Assess your risk profile\n• Compare suitable options across multiple insurers\n• Help you select a plan that provides maximum value and coverage\n\nFeel free to reach out to us for personalized recommendations."
    },
    {
      question: "Can I customize my insurance coverage?",
      answer: "Yes, most insurance policies can be tailored to your specific needs. Depending on the product, you can:\n• Choose your sum insured\n• Add riders or add-ons (like maternity cover, critical illness, zero depreciation, etc.)\n• Select flexible tenures and premium options\n\nOur team will guide you through all customization possibilities to ensure your plan is just right for you."
    },
    {
      question: "How can I get a free insurance quote from MAK GROUP?",
      answer: "Getting a quote is quick and easy! You can:\n• Call or WhatsApp our team\n• Fill out a simple form on our website\n• Visit our office for one-on-one consultation\n\nWe'll compare plans from multiple insurers and share the best options tailored to your budget and requirements—with no obligation."
    },
    {
      question: "What should I do if I need to file an insurance claim?",
      answer: "If you need to file a claim, here's what to do:\n\nHealth or Motor Insurance: Contact our claims assistance team or the insurer's helpline immediately.\n• For cashless claims, visit a network hospital/garage and present your policy details.\n• For reimbursement, Contact us and collect all original bills and submit them along with the claim form to us! Rest we will take care.\n\nMAK GROUP offers end-to-end support in claim filing—from documentation to coordination with the insurer—to ensure a smooth and timely process."
    }
  ];

  return (
    <div>
      <Navbar/>
        <GreenImageHero title="Protect What Matters Most with MAK GROUP" description="At MAK GROUP, we understand that life is full of uncertainties. That's why we offer a wide range of insurance solutions to help you protect your health, wealth, and everything in between. Our experienced team works with leading insurance providers to bring you the best coverage options at competitive prices."
         imageSrc="/Rectangle 52.jpg" imageAlt="insurance solutions" />
         <StackedHeading title="Our Insurance Offerings" subtitle="Personalized Protection for Every Area of Your Life" />
         <FlexGridLayout itemsPerRow={3} items={insuranceItems} />
         <StackedHeading mobileAlign='center' title="Why Choose MAK GROUP for Your Insurance Needs?" subtitle="Expert Advice. Transparent Service. Trusted Coverage."/>
         <StatsGrid cards={statCards} />
         <HeroWithButtons
           title="Get a Free Insurance Quote"
           subtitle="Discover how MAK GROUP can help you protect what matters most. Submit your details and receive a tailored quote from our experts."
           buttonText="Get a Free Quote Now"
           buttonLink="#"
           primaryButtonIconType='quote'
           secondaryButtonText="Whatsapp Our Team"
           secondaryButtonLink="#"
           darkMode={true}
         />
<StackedHeading className='md:pt-[0px] pt-[60px]' title="Trusted by Clients Across Industries" subtitle="Empowering You with Experience, Trust, and Integrity." />
<TestimonialCarousel testimonials={testimonials} />
<FaqSection faqs={insuranceFaqs} />
<Footer title='Get Started with MAK GROUP Comprehensive Insurance' description="For more information or if you have any other questions, please don't hesitate to reach out to us."/>
    </div>
  )
}

export default page