// components/multistepform/multistepform.jsx
"use client"
import { useState, useRef } from 'react';
import StepIndicator from './stepindicator';
import FormStep from './formstep';
import StackedHeading from '@/components/stackedheading';
import FormStatusMessage from '@/components/FormStatusMessage';
import { sendFormEmail } from '@/utils/emailService';

const MultiStepForm = ({ 
  config, 
  onComplete,
  title,
  subtitle,
  // Add email configuration
  emailConfig = {
    type: 'Form',
    subject: 'Form Submission',
    recipient: null,
    sender: null,
    successMessage: 'Your information has been submitted successfully!',
    errorMessage: 'There was an error submitting your information. Please try again.'
  },
  // Add default fieldsPerRow at the form level
  defaultFieldsPerRow = 3
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const formStepRef = useRef(null);
  
  const currentStep = config.steps[currentStepIndex];
  
  const handleNextStep = (stepData) => {
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);
    
    if (currentStepIndex < config.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // This is the final step, handle form submission
      handleFormSubmit(updatedData);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };
  
  const triggerStepValidation = () => {
    if (formStepRef.current && typeof formStepRef.current.validateAndSubmit === 'function') {
      formStepRef.current.validateAndSubmit();
    }
  };
  
  // Handle form submission with email
  const handleFormSubmit = async (finalFormData) => {
    // Show submitting status
    setSubmitStatus({
      type: 'info',
      message: 'Submitting your information...'
    });
    
    try {
      // Check if the form data contains file fields
      const hasFiles = finalFormData.files && Object.keys(finalFormData.files).length > 0;
      
      // Update status if processing files
      if (hasFiles) {
        setSubmitStatus({
          type: 'info',
          message: 'Processing files, this may take a moment...'
        });
      }
      
      // Update status to sending email
      setSubmitStatus({
        type: 'info',
        message: 'Sending your submission, almost done...'
      });
      
      // Send the email
      await sendFormEmail(finalFormData, {
        subject: emailConfig.subject || `${emailConfig.type || 'Form'} Submission`,
        recipient: emailConfig.recipient,
        sender: emailConfig.sender,
        formType: emailConfig.type || 'Form'
      });
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: emailConfig.successMessage || 'Your submission has been received successfully!'
      });
      
      // Call the onComplete callback if provided
      if (onComplete) {
        onComplete(finalFormData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error message
      setSubmitStatus({
        type: 'error',
        message: emailConfig.errorMessage || 'There was an error submitting your information. Please try again.'
      });
    }
  };
  
  // Reset form to initial state
  const resetForm = () => {
    setCurrentStepIndex(0);
    setFormData({});
    setSubmitStatus(null);
  };
  
  // If form has been successfully submitted, show success message
  if (submitStatus?.type === 'success') {
    return (
      <div className="bg-white max-w-6xl md:max-w-6xl md:mx-auto p-6 md:p-12 rounded-[35px]">
        <FormStatusMessage 
          status={submitStatus} 
          onReset={resetForm} 
        />
      </div>
    );
  }
  
  return (
    <div>
      <div className="bg-white max-w-6xl md:max-w-6xl md:mx-auto p-6 md:p-12 rounded-[35px]">
        {/* Title & Subtitle using StackedHeading */}
        {(title || subtitle) && (
          <StackedHeading 
            title={title} 
            subtitle={subtitle} 
            align="center" 
            className="pb-12" 
          />
        )}
        
        {/* Show loading/error status above the form */}
        {submitStatus && (
          <div className="mb-6">
            <FormStatusMessage status={submitStatus} />
          </div>
        )}
        
        <StepIndicator 
          totalSteps={config.steps.length} 
          currentStep={currentStepIndex + 1} 
        />
        
        {/* Divider */}
        <div className="h-px w-full bg-[#FAFAFA] my-6"></div>
        
        <FormStep
          key={currentStep.id}
          ref={formStepRef}
          step={currentStep}
          formData={formData}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          isFirstStep={currentStepIndex === 0}
          isLastStep={currentStepIndex === config.steps.length - 1}
          hideButtons={true} // Add prop to hide buttons in FormStep
          fieldsPerRow={currentStep.fieldsPerRow || defaultFieldsPerRow} // Pass fieldsPerRow to FormStep
        />
      </div>
      
      {/* Navigation buttons in grey space */}
      <div className="mt-8 flex justify-center space-x-4 max-w-6xl md:mx-auto">
        {currentStepIndex > 0 && (
          <button
            type="button"
            onClick={handlePrevStep}
            className="px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            disabled={submitStatus && submitStatus.type === 'info'}
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            // Simulate clicking the submit button in the FormStep
            triggerStepValidation();
          }}
          className="px-12 md:px-8 md:py-3 py-4 text-[18px] md:text-[16px] bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          disabled={submitStatus && submitStatus.type === 'info'}
        >
          {currentStepIndex === config.steps.length - 1 ? 'Submit' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;