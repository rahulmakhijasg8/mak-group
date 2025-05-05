'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

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
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation links array for DRY code - now with separate About and Services
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/our-team', label: 'Our Team' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
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
      `}</style>

      <div className="mt-6 sm:mt-8 md:mt-10">
        <nav 
          className={`
            w-full 
            flex 
            items-center 
            justify-between 
            h-20
            px-4 sm:px-6 md:px-8 lg:px-12
            bg-white
            transition-all
            duration-300
            ${scrolled ? 'shadow-md sticky top-0 z-50' : ''}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Godara_Logo-01 1.png"
              alt="Godara Logo"
              height={44}
              width={177}
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center">
            {navLinks.map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`
                  font-['Lexend'] 
                  text-base 
                  transition-all 
                  duration-300
                  no-underline 
                  hover:underline
                  nav-link
                  ${index < navLinks.length - 1 ? 'mr-9' : ''}
                  ${isActive(link.href) 
                    ? 'active' 
                    : 'text-[#000000D6]'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            
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
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-[#603812] transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#603812] mt-1.5 transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#603812] mt-1.5 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <div className="py-2">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className={`
                        block px-4 py-3 hover:bg-gray-50 no-underline hover:underline
                        nav-link
                        ${isActive(link.href) 
                          ? 'active' 
                          : 'text-[#000000D6]'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}