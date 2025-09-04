"use client"

import { useState } from "react";
import FaqItem from "./FAQ";

export default function FaqSection({ 
  faqs = [] 
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full mt-[60px] md:mt-[100px] px-4 md:px-[60px] lg:px-[80px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Lexend'] text-[#221241] font-[400] text-[30px] md:text-[36px] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        {/* FAQ Items */}
        <div className="bg-white mt-[25px] md:mt-[50px] rounded-[30px] overflow-hidden">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}