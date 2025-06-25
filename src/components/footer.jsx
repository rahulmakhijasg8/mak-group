'use client';

// Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import NewsletterForm from './newsletterform';

export default function Footer({ 
  title = "Contact Us",
  description = "Have a question or need assistance? We're here to help. Contact us today to learn more about how MAK GROUP can help you secure your financial future.",
  address = "702, Amore Edge, S.V. Road, Khar West, Mumbai 400052",
  phone = "+91-123-456-7890",
  email = "info@makgroup.com"
}) {
  // State for dropdown
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeout = useRef(null);

  // Service links array (same as in navbar)
  const serviceLinks = [
    { href: 'real-estate', label: 'Real Estate' },
    { href: 'cars', label: 'Cars' },
    { href: 'sm-services', label: 'Stock Market Services' },
    { href: 'finance-solutions', label: 'Finance Solutions' },
    { href: 'insurance-solutions', label: 'Insurance Solutions' },
    { href: 'medical-insurance', label: 'Medical Insurance' },
    { href: 'vehicle-insurance', label: 'Vehicle Insurance' },
    { href: 'life-insurance', label: 'Life Insurance' },
    { href: 'travel-insurance', label: 'Travel Insurance' },
    { href: 'commercial-insurance', label: 'Commercial Insurance' },
  ];

  // Function to handle mouse enter for services dropdown
  const handleServicesMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setServicesOpen(true);
  };
  
  // Function to handle mouse leave for services dropdown
  const handleServicesMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  return (
    <footer className="w-full mt-12 md:mt-[100px] relative">
      {/* White Contact Card Section */}
      <div className="relative px-6 md:px-12 z-10">
        <div className="max-w-[100%] md:max-w-[80%] mx-auto bg-white border-[2px] border-[#221241] rounded-[20px] p-10 md:p-12 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            {/* Left Content */}
            <div className="md:w-8/12 mb-8 md:mb-0">
              <h2 className="font-['Lexend'] text-[#221241] font-normal text-[32px] md:text-[36px] mb-6">
                {title}
              </h2>
              <p className="font-['Lato'] text-[#000000D6] font-normal text-[18px] leading-7 max-w-full">
                {description}
              </p>
            </div>
            
            {/* Right Content - Send Message Button - Reduced size for mobile */}
            <div className="md:w-4/12 flex justify-start md:justify-center">
              <div className="bg-[#221241] rounded-full w-32 h-32 md:w-44 md:h-44 flex flex-col items-center justify-center text-center p-2">
                {/* Using Next.js Image component */}
                <Image 
                  src="/Frame.svg" 
                  alt="Send Message Icon" 
                  width={36} 
                  height={36}
                  className="md:w-[44px] md:h-[44px]"
                />
                <span className="text-[#FFFFFF] font-[500] text-[15px] md:text-lg mt-2 md:mt-3 font-['Plus_Jakarta_Sans']">Send Message</span>
              </div>
            </div>
          </div>
          
          {/* Contact Info Links - Now with even spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Address */}
            <div className="flex mb-4 items-start">
              <div className="text-[#4EBA64] mr-4 mt-1">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 18.3333C11.6667 16.1667 16.6667 12.9 16.6667 8C16.6667 4.31811 13.6819 1.33333 10 1.33333C6.31811 1.33333 3.33333 4.31811 3.33333 8C3.33333 12.9 8.33333 16.1667 10 18.3333Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-['Lato'] text-[#000000D6] md:pr-10 font-normal text-[16px] leading-6">
                {address}
              </p>
            </div>
            
            {/* Phone */}
            <div className="flex mb-4 items-start">
              <div className="text-[#4EBA64] mr-4 mt-1">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4204 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2876 16.5167 18.2667C13.9523 17.9881 11.4891 17.0962 9.32498 15.6667C7.31151 14.3515 5.60443 12.6444 4.28915 10.631C2.85001 8.45523 1.95809 5.98067 1.68332 3.40834C1.66236 3.17767 1.68993 2.94513 1.76388 2.72555C1.83784 2.50598 1.95665 2.30422 2.11273 2.13329C2.26881 1.96236 2.45888 1.82588 2.67065 1.73265C2.88241 1.63941 3.11137 1.59132 3.34332 1.59167H5.84332C6.25465 1.58767 6.65362 1.73089 6.96854 1.99611C7.28346 2.26133 7.49084 2.63066 7.54999 3.03667C7.65331 3.82505 7.84331 4.59642 8.11665 5.33667C8.23174 5.63067 8.25714 5.95502 8.19011 6.26474C8.12309 6.57447 7.96709 6.85567 7.74165 7.0675L6.76665 8.0425C8.00081 10.1282 9.70414 11.8316 11.7897 13.0658L12.7647 12.0908C12.9765 11.8654 13.2577 11.7094 13.5674 11.6424C13.8772 11.5753 14.2015 11.6007 14.4955 11.7158C15.2358 11.9892 16.0071 12.1792 16.7955 12.2825C17.2062 12.3423 17.579 12.5529 17.8451 12.8721C18.1112 13.1914 18.254 13.5953 18.25 14.0108L18.3333 14.1Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] leading-6">
                {phone}
              </p>
            </div>
            
            {/* Email */}
            <div className="flex items-start">
              <div className="text-[#4EBA64] mr-4 mt-1">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33332 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33332C2.41666 16.6667 1.66666 15.9167 1.66666 15V5.00001C1.66666 4.08334 2.41666 3.33334 3.33332 3.33334Z" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3333 5L9.99999 10.8333L1.66666 5" stroke="#4EBA64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] leading-6">
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark Purple Footer Section - Adjusted for 50% overlap */}
      <div className="bg-[#221241] w-full pt-64 pb-12 px-6 md:px-22 mt-[-180px]">
        <div className="mx-auto">
          {/* Modified grid with different column widths on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
            {/* Support Links - reduced to 1/6 on desktop */}
            <div className="md:col-span-1">
              <h3 className="font-['Lexend'] text-white font-medium text-[18px] mb-4">
                Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact-us" className="font-['Lato'] text-white text-opacity-80 hover:text-opacity-100 text-[14px] hover:underline transition-all duration-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="font-['Lato'] text-white text-opacity-80 hover:text-opacity-100 text-[14px] hover:underline transition-all duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="font-['Lato'] text-white text-opacity-80 hover:text-opacity-100 text-[14px] hover:underline transition-all duration-300">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company Links with Services Dropdown - reduced to 1/6 on desktop */}
            <div className="md:col-span-1 relative">
              <h3 className="font-['Lexend'] text-white font-medium text-[18px] mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="font-['Lato'] text-white text-opacity-80 hover:text-opacity-100 text-[14px] hover:underline transition-all duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-['Lato'] text-white text-opacity-80 hover:text-opacity-100 text-[14px] hover:underline transition-all duration-300">
                    About
                  </Link>
                </li>
                <li>
                  {/* Services with Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="flex items-center cursor-pointer">
                      <Link href="/services" className="font-['Lato'] text-white text-opacity-80 hover:text-opacity-100 text-[14px] hover:underline transition-all duration-300">
                        Services
                      </Link>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`ml-1 h-3 w-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div 
                        className="absolute bottom-full left-0 mb-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        <div className="py-2">
                          {serviceLinks.map((service) => (
                            <Link 
                              key={service.href}
                              href={service.href} 
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-['Lato'] transition-colors duration-200"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Subscription - expanded to 4/6 on desktop */}
            <div className="col-span-2 md:col-span-4 mt-6 md:mt-0">
              <h3 className="font-['Lexend'] text-white font-medium text-[18px] mb-4">
                Subscribe Our Newsletter
              </h3>
              <NewsletterForm />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-white border-opacity-20">
            <p className="font-['Lato'] text-white text-opacity-60 text-center text-[14px]">
              © {new Date().getFullYear()} <a 
                href="https://www.techdevs.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition-colors duration-300"
              >
                MAKGroup
              </a>. All rights reserved. TechDevs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}