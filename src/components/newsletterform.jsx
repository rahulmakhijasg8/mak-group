'use client';

import React from 'react';

export default function NewsletterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email address" 
        className="bg-white bg-opacity-10 text-[#000000D6] px-4 py-2 rounded-full w-full md:w-[500px] focus:outline-none border border-white border-opacity-20 placeholder:text-[#B7C7E7]"
        aria-label="Email address for newsletter"
      />
      <button 
        type="submit"
        className="bg-[#4EBA64] hover:bg-[#3da554] text-white px-6 py-2 rounded-full whitespace-nowrap text-sm w-1/3 sm:w-auto cursor-pointer transition-colors duration-200"
      >
        Get Started
      </button>
    </form>
  );
}