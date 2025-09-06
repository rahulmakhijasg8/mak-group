"use client"

import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import SectionHeader from '@/components/heading'
import Footer from '@/components/footer'
import SingleForm from '@/components/singleform'
import Navbar from '@/components/navbar'
import FormStatusMessage from '@/components/FormStatusMessage';
import useFormSubmission from '@/hooks/useFormSubmission';


function Page() {
  const carFormConfig = {
    steps: [
      {
        id: "travelInsurance",
        // title: "Travel Details",
        // subtitle: "Our experts will help you choose the best travel insurance plan to suit your needs and budget.",
        fieldsPerRow: 2,
        fields: [
          {
            id: "name",
            type: "text",
            label: "Full Name",
            required: true
          },
          {
            id: "phone number",
            type: "number",
            label: "Phone Number",
            required: true,
          },
          {
            id: "mail",
            type: "email",
            label: "Email Address",
            required: true
          },
          {
            id: "message",
            type: "textarea",
            label: "Message",
            required: true,
          },
          // ...other fields
        ]
      },
    ]
  }

  const { 
    handleFormSubmit, 
    submitStatus, 
    resetStatus 
  } = useFormSubmission({
    formType: 'Contact Form',
    emailSubject: 'New Contact Form Submission',
    emailRecipient: 'contact@makgroup.co.in',
    submittingMessage: 'Sending your message...',
    successMessage: 'Your message has been sent successfully! We will get back to you shortly.',
    errorMessage: 'There was an error sending your message. Please try again or contact us directly.'
  });

  return (
    <div>
      <Navbar />
      <GreenImageHero 
        title="Your Financial Success Starts with a Conversation" 
        description="Whether you have questions about our services, need a personalized consultation, or just want to explore your options — the MAK GROUP team is here for you. Reach out to us today!" 
        imageSrc="/Rectangle 58.jpg" 
        imageAlt="contact us" 
      />
      <div id='contact-us' className="mx-auto max-w-7xl mt-3 px-4 md:px-[60px] lg:px-[80px] pb-16 pt-8 md:pb-24 md:pt-18">
        {/* Mobile title - only shows on mobile screens */}
        <div className="block flex justify-center md:hidden mb-6">
          <h2 className="font-['Lexend'] text-[#221241] px-4 font-normal text-[34px] leading-tight">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* First column - iframe (40% width) */}
          <div className="w-full md:w-2/5 mb-0 md:mb-0">
            <div className="relative w-full h-[565px] md:h-[620px] flex items-start">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.944438193771!2d72.83493347425149!3d19.06618035228257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9005295272f%3A0xf2add47abf21e008!2sAMORE%20EDGE!5e0!3m2!1sen!2sin!4v1747262479586!5m2!1sen!2sin"
                title="AMORE EDGE Location"
                className="w-full h-full rounded-[18px]"
                style={{ border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Second column - Contact Form (60% width) */}
          <div className="w-full md:w-3/5 md:px-6">
            {/* Desktop heading for the form section - only shows on desktop */}
            <div className="hidden md:block mt-5 md:-mt-2">
              <h2 className="font-['Lexend'] text-[#221241] pl-6 md:pl-4 font-normal text-[28px] md:text-[36px] leading-tight">
                Contact Us
              </h2>
            </div>
            
            {submitStatus?.type === 'success' ? (
              <div className="mt-12">
                <FormStatusMessage 
                  status={submitStatus} 
                  onReset={resetStatus} 
                />
              </div>
            ) : (
              <>
                {/* Show loading/error status above the form */}
                {submitStatus && (
                  <div className="mt-4 mb-2">
                    <FormStatusMessage status={submitStatus} />
                  </div>
                )}
                
                <SingleForm 
                  config={carFormConfig} 
                  submitButtonAlign='left'  
                  submitButtonText="Send Message" 
                  submitButtonIconType='none' 
                  onComplete={handleFormSubmit}
                  paddingDesktop='md:p-5 md:pt-0 md:pb-4'
                  paddingMobile='px-0'
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer 
        title="Ready to Start Your Journey with MAK GROUP?" 
        description="Secure your future with the right financial and real estate partners." 
      />
    </div>
  )
}

export default Page