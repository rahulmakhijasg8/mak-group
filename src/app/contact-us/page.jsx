"use client"

import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import SectionHeader from '@/components/heading'
import Footer from '@/components/footer'
import SingleForm from '@/components/singleform'
import Navbar from '@/components/navbar'

function page() {

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
                placeholder: "Your name",
                required: true
              },
    
              {
                id: "mail",
                type: "email",
                label: "Email Address",
                placeholder: "Your email address",
                required: true
              },
    
              {
                id: "phone number",
                type: "number",
                label: "Phone Number",
                placeholder: "your phone no",
                required: true,
              },
              {
                id: "subject",
                type: "select",
                label: "Age Of Travellers",
                placeholder: "select your subject",
                required: true,
              },

              {
                id: "message",
                type: "textarea",
                label: "Message",
                placeholder: "your message",
                required: true,
              },
              // ...other fields
            ]},
        ]}

        const handleFormComplete = (formData) => {
            console.log("Form submitted with data:", formData);
            // Submit to your API or process the data here
            alert("Form submitted successfully!");
          };

  return (
    <div>
      <Navbar/>
        <GreenImageHero title="Your Financial Success Starts with a Conversation" description="Whether you have questions about our services, need a personalized consultation, or just want to explore your options — the MAK GROUP team is here for you. Reach out to us today!" 
        imageSrc="/Rectangle 58.jpg" imageAlt="contact us" />
        <SectionHeader title="Quick Contact Information" description="Reach us easily through any method you prefer" />
        <div className=" max-w-7xl mx-auto py-16 md:pb-24 md:pt-18">
  {/* <ScrollReveal> */}
    <div className="flex flex-col md:flex-row">
      {/* First column - iframe (40% width) */}
      <div className="w-full md:w-2/5 mb-8 md:mb-0 p-4 md:p-0 flex items-center justify-center">
        <div className="relative w-full h-[400px] md:h-[600px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.944438193771!2d72.83493347425149!3d19.06618035228257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9005295272f%3A0xf2add47abf21e008!2sAMORE%20EDGE!5e0!3m2!1sen!2sin!4v1747262479586!5m2!1sen!2sin"
            title="JAFZA ONE Location"
            className="w-full h-full rounded-[18px]"
            style={{ border: 'none' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
      
      {/* Second column - Contact Form (60% width) */}
      <div className="w-full md:w-3/5 px-4 md:px-6">
        <SingleForm config={carFormConfig} submitButtonAlign='left'  submitButtonText="Send Message" submitButtonIconType='none' onComplete={handleFormComplete}/>
      </div>
    </div>
  {/* </ScrollReveal> */}
</div>
<Footer title="Ready to Start Your Journey with MAK GROUP?" description="Secure your future with the right financial and real estate partners." />
    </div>
  )
}

export default page