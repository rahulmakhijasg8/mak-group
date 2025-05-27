'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const servicesRef = useRef(null);
  const pathname = usePathname();
  
  // Add delay for dropdown closing
  const closeTimeout = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      
      // Clear any pending timeouts on unmount
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);
  
  // Function to handle mouse enter for services dropdown
  const handleServicesMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setServicesOpen(true);
  };
  
  // Function to handle mouse leave for services dropdown
  const handleServicesMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300); // 300ms delay gives user time to move to the dropdown
  };
  
  // Service links for dropdown
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

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    // Check if any services page is active
    if (href === '/services') {
      return serviceLinks.some(service => pathname.startsWith(service.href));
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Add this to your global CSS file or a style tag */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400&display=swap');
        
        body {
          background-color: white;
          margin: 0;
          padding: 0;
        }
        
        .nav-link {
          font-family: 'Lexend', sans-serif;
          font-weight: 300;
        }
        
        .nav-link.active {
          font-weight: 400;
          color: #221241;
        }
        
        .dropdown-arrow {
          transition: transform 0.3s ease;
        }
        
        .dropdown-arrow.open {
          transform: rotate(180deg);
        }
        
        /* Add dropdown hover area */
        .services-dropdown-area {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          padding-top: 20px;
          z-index: 50;
        }
        
        .services-dropdown-content {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
      `}</style>

      <div className="pt-2 md:mb-3 md:pt-4">
        <nav 
          className={`
            w-full 
            flex 
            items-center 
            justify-between 
            h-20
            px-4 sm:px-6 md:px-8 lg:px-12
            bg-transparent
            transition-all
            duration-300
            ${scrolled ? 'shadow-md sticky top-0 z-50' : ''}
          `}
        >
          {/* Logo - Responsive height (larger on desktop) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Mak Group Logo 1.svg"
              alt="MAK GROUP Logo"
              height={52}
              width={208}
              className="h-11 lg:h-13 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center">
            {/* Home link */}
            <Link 
              href="/" 
              className={`
                font-['Lexend'] 
                text-base 
                transition-all 
                duration-300
                no-underline 
                hover:underline
                nav-link
                mr-9
                ${isActive('/') 
                  ? 'active' 
                  : 'text-[#000000D6]'
                }
              `}
            >
              Home
            </Link>
            
            {/* About link */}
            <Link 
              href="/about" 
              className={`
                font-['Lexend'] 
                text-base 
                transition-all 
                duration-300
                no-underline 
                hover:underline
                nav-link
                mr-9
                ${isActive('/about') 
                  ? 'active' 
                  : 'text-[#000000D6]'
                }
              `}
            >
              About
            </Link>
            
            {/* Services Dropdown - Desktop */}
            <div 
              className="relative mr-9"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link 
                href={serviceLinks[0].href}
                className={`
                  font-['Lexend'] 
                  text-base 
                  transition-all 
                  duration-300
                  flex items-center
                  nav-link
                  cursor-pointer
                  no-underline 
                  hover:underline
                  ${isActive('/services') 
                    ? 'active' 
                    : 'text-[#000000D6]'
                  }
                `}
              >
                Services
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 h-4 w-4 dropdown-arrow ${servicesOpen ? 'open' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Services Dropdown Content with better hover area */}
              {servicesOpen && (
                <div 
                  className="services-dropdown-area"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="services-dropdown-content w-56">
                    <div className="py-2">
                      {serviceLinks.map((service) => (
                        <Link 
                          key={service.href}
                          href={service.href} 
                          className={`
                            block px-4 py-3 text-sm hover:bg-gray-50 
                            font-['Lexend'] no-underline hover:underline
                            ${pathname.startsWith(service.href) 
                              ? 'font-medium text-[#221241]' 
                              : 'text-[#000000D6]'
                            }
                          `}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Contact Us link */}
            <Link 
              href="/contact-us" 
              className={`
                font-['Lexend'] 
                text-base 
                transition-all 
                duration-300
                no-underline 
                hover:underline
                nav-link
                ${isActive('/contact-us') 
                  ? 'active' 
                  : 'text-[#000000D6]'
                }
              `}
            >
              Contact Us
            </Link>
            
            {/* Get Started Button */}
            <Link 
              href="/get-started" 
              className="ml-24 px-6 py-2 bg-[#4EBA64] text-white rounded-full font-['Lexend'] font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="relative lg:hidden" ref={menuRef}>
            <button 
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-[#603812] transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#603812] mt-1.5 transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#603812] mt-1.5 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Dropdown Menu (Mobile) */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <div className="py-2">
                  {/* Home link */}
                  <Link 
                    href="/" 
                    className={`
                      block px-4 py-3 hover:bg-gray-50 no-underline hover:underline
                      nav-link
                      ${isActive('/') 
                        ? 'active' 
                        : 'text-[#000000D6]'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  
                  {/* About link */}
                  <Link 
                    href="/about" 
                    className={`
                      block px-4 py-3 hover:bg-gray-50 no-underline hover:underline
                      nav-link
                      ${isActive('/about') 
                        ? 'active' 
                        : 'text-[#000000D6]'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  
                  {/* Services Mobile Toggle - Simplified Implementation */}
                  <div>
                    {/* Services Header */}
                    <div 
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`
                        block px-4 py-3 hover:bg-gray-50 cursor-pointer
                        nav-link flex items-center justify-between
                        ${isActive('/services') ? 'active' : 'text-[#000000D6]'}
                      `}
                    >
                      <span>Services</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`ml-1 h-4 w-4 dropdown-arrow ${servicesOpen ? 'open' : ''}`}
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Service Links */}
                    {servicesOpen && (
                      <div className="bg-gray-50 py-1">
                        {serviceLinks.map((service) => (
                          <Link 
                            key={service.href}
                            href={service.href} 
                            className={`
                              block px-8 py-3 hover:bg-gray-100 text-sm
                              font-['Lexend'] no-underline hover:underline
                              ${pathname.startsWith(service.href) 
                                ? 'font-medium text-[#221241]' 
                                : 'text-[#000000D6]'
                              }
                            `}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Contact Us link */}
                  <Link 
                    href="/contact-us" 
                    className={`
                      block px-4 py-3 hover:bg-gray-50 no-underline hover:underline
                      nav-link
                      ${isActive('/contact-us') 
                        ? 'active' 
                        : 'text-[#000000D6]'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}