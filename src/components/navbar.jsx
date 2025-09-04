'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [insuranceSubmenuOpen, setInsuranceSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const servicesRef = useRef(null);
  const insuranceRef = useRef(null);
  const pathname = usePathname();
  
  // Add delay for dropdown closing
  const closeTimeout = useRef(null);
  const insuranceTimeout = useRef(null);
  const hoverAreaTimeout = useRef(null);

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
      // Don't close if clicking on a link - let navigation happen
      if (event.target.closest('a')) {
        return;
      }
      
      // Don't close if clicking on a button inside the menu
      if (event.target.closest('button') && menuRef.current && menuRef.current.contains(event.target)) {
        return;
      }
      
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setServicesOpen(false);
        setInsuranceSubmenuOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
        setInsuranceSubmenuOpen(false);
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
      if (insuranceTimeout.current) {
        clearTimeout(insuranceTimeout.current);
      }
      if (hoverAreaTimeout.current) {
        clearTimeout(hoverAreaTimeout.current);
      }
    };
  }, []); // Remove dependency array issues
  
  // Function to handle mouse enter for services dropdown
  const handleServicesMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    if (insuranceTimeout.current) {
      clearTimeout(insuranceTimeout.current);
      insuranceTimeout.current = null;
    }
    setServicesOpen(true);
  };
  
  // Function to handle mouse leave for services dropdown
  const handleServicesMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false);
      setInsuranceSubmenuOpen(false);
    }, 300);
  };

  // Function to handle insurance submenu
  const handleInsuranceMouseEnter = () => {
    // Clear ALL pending timeouts
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    if (insuranceTimeout.current) {
      clearTimeout(insuranceTimeout.current);
      insuranceTimeout.current = null;
    }
    if (hoverAreaTimeout.current) {
      clearTimeout(hoverAreaTimeout.current);
      hoverAreaTimeout.current = null;
    }
    setInsuranceSubmenuOpen(true);
  };

  const handleInsuranceMouseLeave = () => {
    // Use a longer timeout for insurance submenu to handle quick movements
    insuranceTimeout.current = setTimeout(() => {
      setInsuranceSubmenuOpen(false);
    }, 400);
  };

  // New function to handle insurance submenu content hover
  const handleInsuranceSubmenuEnter = () => {
    // Clear ALL pending timeouts when entering submenu
    if (insuranceTimeout.current) {
      clearTimeout(insuranceTimeout.current);
      insuranceTimeout.current = null;
    }
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    if (hoverAreaTimeout.current) {
      clearTimeout(hoverAreaTimeout.current);
      hoverAreaTimeout.current = null;
    }
  };

  const handleInsuranceSubmenuLeave = () => {
    // Close submenu when leaving the submenu area with a delay
    hoverAreaTimeout.current = setTimeout(() => {
      setInsuranceSubmenuOpen(false);
    }, 300);
  };
  
  // Main service links (only 5)
  const mainServiceLinks = [
    { href: '/real-estate', label: 'Real Estate' },
    { href: '/cars', label: 'Cars' },
    { href: '/sm-services', label: 'Stock Market Services' },
    { href: '/finance-solutions', label: 'Loans/Financing' },
    { href: '/insurance-solutions', label: 'Insurance Solutions', hasSubmenu: true },
  ];

  // Insurance sub-links
  const insuranceLinks = [
    { href: '/medical-insurance', label: 'Medical Insurance' },
    { href: '/vehicle-insurance', label: 'Vehicle Insurance' },
    { href: '/life-insurance', label: 'Life Insurance' },
    { href: '/travel-insurance', label: 'Travel Insurance' },
    { href: '/commercial-insurance', label: 'Commercial Insurance' },
  ];

  // All service links for mobile and active state checking
  const allServiceLinks = [...mainServiceLinks.filter(link => !link.hasSubmenu), ...insuranceLinks];

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    // Check if any services page is active
    if (href === '/services') {
      return allServiceLinks.some(service => pathname.startsWith(service.href));
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
          overflow: visible;
        }

        .insurance-submenu {
          position: absolute;
          left: 100%;
          top: -4px;
          width: 220px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          margin-left: 0px;
          z-index: 60;
        }

        .insurance-item {
          position: relative;
        }

        /* Enhanced hover bridge for better UX */
        .insurance-item::before {
          content: '';
          position: absolute;
          top: -8px;
          right: -8px;
          width: 16px;
          height: calc(100% + 16px);
          background: transparent;
          z-index: 55;
        }

        .insurance-item::after {
          content: '';
          position: absolute;
          top: 0;
          right: -8px;
          width: 12px;
          height: 100%;
          background: transparent;
          z-index: 55;
        }
      `}</style>

      <div className="pt-[30px] md:pt-[35px]">
        <nav 
          className={`
            w-full 
            flex 
            items-center 
            justify-between 
            h-20
            px-[16px] md:px-[60px] lg:px-[40px]
            bg-transparent
            transition-all
            duration-300
            ${scrolled ? 'shadow-md sticky top-0 z-50 bg-white' : ''}
          `}
        >
          {/* Logo - Responsive height (larger on desktop) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Mak Group Logo 1.svg"
              alt="MAK GROUP Logo"
              height={208}
              width={208}
              className="h-11 lg:h-16 w-auto"
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
            
            {/* Services Dropdown - Desktop (NOT CLICKABLE) */}
            <div 
              className="relative mr-9"
              ref={servicesRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                className={`
                  font-['Lexend'] 
                  text-base 
                  transition-all 
                  duration-300
                  flex items-center
                  nav-link
                  cursor-pointer
                  hover:underline
                  bg-transparent
                  border-none
                  outline-none
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
              </button>
              
              {/* Services Dropdown Content with better hover area */}
              {servicesOpen && (
                <div 
                  className="services-dropdown-area"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="services-dropdown-content w-56">
                    <div className="py-2">
                      {mainServiceLinks.map((service, index) => (
                        <div key={service.label || index} className="relative">
                          {service.hasSubmenu ? (
                            // Insurance Solutions with submenu
                            <div
                              className="insurance-item relative"
                              ref={insuranceRef}
                              onMouseEnter={handleInsuranceMouseEnter}
                              onMouseLeave={handleInsuranceMouseLeave}
                            >
                              <Link 
                                href={service.href}
                                className={`
                                  flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer
                                  font-['Lexend'] no-underline hover:underline
                                  ${insuranceLinks.some(link => pathname.startsWith(link.href)) || pathname.startsWith(service.href)
                                    ? 'font-[400] text-[#221241]' 
                                    : 'font-[300] text-[#000000D6]'
                                  }
                                `}
                              >
                                <span>{service.label}</span>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className="h-4 w-4" 
                                  viewBox="0 0 20 20" 
                                  fill="currentColor"
                                >
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </Link>
                              
                              {/* Insurance Submenu */}
                              {insuranceSubmenuOpen && (
                                <div 
                                  className="insurance-submenu"
                                  onMouseEnter={handleInsuranceSubmenuEnter}
                                  onMouseLeave={handleInsuranceSubmenuLeave}
                                >
                                  <div className="py-2">
                                    {insuranceLinks.map((insurance) => (
                                      <Link 
                                        key={insurance.href}
                                        href={insurance.href} 
                                        className={`
                                          block px-4 py-3 text-sm hover:bg-gray-50 
                                          font-['Lexend'] no-underline hover:underline
                                          ${pathname.startsWith(insurance.href) 
                                            ? 'font-[400] text-[#221241]' 
                                            : 'font-[300] text-[#000000D6]'
                                          }
                                        `}
                                      >
                                        {insurance.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            // Regular service links
                            <Link 
                              href={service.href} 
                              className={`
                                block px-4 py-3 text-sm hover:bg-gray-50 
                                font-['Lexend'] no-underline hover:underline
                                ${pathname.startsWith(service.href) 
                                  ? 'font-[400] text-[#221241]' 
                                  : 'font-[300] text-[#000000D6]'
                                }
                              `}
                            >
                              {service.label}
                            </Link>
                          )}
                        </div>
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
              href="tel:+918591353530" 
              className="ml-24 px-6 py-2 bg-[#4EBA64] text-white rounded-full font-['Lexend'] font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              Call Us Now
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
                  
                  {/* Services Mobile Toggle - Shows nested structure */}
                  <div>
                    {/* Services Header */}
                    <button 
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`
                        w-full text-left px-4 py-3 hover:bg-gray-50 cursor-pointer
                        nav-link flex items-center justify-between
                        bg-transparent border-none outline-none
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
                    </button>
                    
                    {/* Service Links - Mobile shows nested structure */}
                    {servicesOpen && (
                      <div className="bg-gray-50 py-1">
                        {mainServiceLinks.map((service) => (
                          <div key={service.label}>
                            {service.hasSubmenu ? (
                              // Insurance Solutions with submenu for mobile
                              <div>
                                {/* Mobile: Add click handler to toggle submenu while still being a link */}
                                <div onClick={(e) => {
                                  // Check if clicking on the arrow area (right side)
                                  const rect = e.currentTarget.getBoundingClientRect();
                                  const clickX = e.clientX - rect.left;
                                  const arrowAreaStart = rect.width - 40; // Approximate arrow area
                                  
                                  if (clickX > arrowAreaStart) {
                                    // Clicked on arrow - toggle submenu
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setInsuranceSubmenuOpen(!insuranceSubmenuOpen);
                                  }
                                  // Otherwise, let the Link handle navigation
                                }}>
                                  <Link
                                    href={service.href}
                                    className={`
                                      w-full text-left px-8 py-3 hover:bg-gray-100 text-sm cursor-pointer
                                      font-['Lexend'] flex items-center justify-between no-underline hover:underline
                                      ${insuranceLinks.some(link => pathname.startsWith(link.href)) || pathname.startsWith(service.href)
                                        ? 'font-[400] text-[#221241]' 
                                        : 'font-[300] text-[#000000D6]'
                                      }
                                    `}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                    }}
                                  >
                                    <span>{service.label}</span>
                                    <svg 
                                      xmlns="http://www.w3.org/2000/svg" 
                                      className={`h-4 w-4 transition-transform duration-300 ${insuranceSubmenuOpen ? 'rotate-180' : ''}`}
                                      viewBox="0 0 20 20" 
                                      fill="currentColor"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setInsuranceSubmenuOpen(!insuranceSubmenuOpen);
                                      }}
                                    >
                                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </Link>
                                </div>
                                
                                {/* Insurance submenu items */}
                                {insuranceSubmenuOpen && (
                                  <div className="bg-gray-100 py-1">
                                    {insuranceLinks.map((insurance) => (
                                      <Link 
                                        key={insurance.href}
                                        href={insurance.href} 
                                        className={`
                                          block px-12 py-3 hover:bg-gray-200 text-sm
                                          font-['Lexend'] no-underline hover:underline
                                          ${pathname.startsWith(insurance.href) 
                                            ? 'font-[400] text-[#221241]' 
                                            : 'font-[300] text-[#000000D6]'
                                          }
                                        `}
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                        }}
                                      >
                                        {insurance.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              // Regular service links
                              <Link 
                                href={service.href} 
                                className={`
                                  block px-8 py-3 hover:bg-gray-100 text-sm
                                  font-['Lexend'] no-underline hover:underline
                                  ${pathname.startsWith(service.href) 
                                    ? 'font-[400] text-[#221241]' 
                                    : 'font-[300] text-[#000000D6]'
                                  }
                                `}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {service.label}
                              </Link>
                            )}
                          </div>
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