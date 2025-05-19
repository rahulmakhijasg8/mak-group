// hooks/useFormSubmission.js
import { useState } from 'react';
import { createEmailFormHandler } from '@/utils/emailService';

/**
 * Custom hook for handling form submissions with email
 * @param {Object} config - Configuration for the form submission
 * @returns {Object} - Form submission state and handlers
 */
export default function useFormSubmission(config = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Create the form handler with the provided config
  const handleFormSubmit = createEmailFormHandler({
    formType: config.formType || 'Form',
    subject: config.emailSubject,
    recipient: config.emailRecipient,
    sender: config.emailSender,
    
    // Set initial submitting status
    onSubmitting: () => {
      setIsSubmitting(true);
      setSubmitStatus({
        type: 'info',
        message: config.submittingMessage || 'Submitting your information...'
      });
    },
    
    // Update status when processing files
    onFileProcessing: () => {
      setSubmitStatus({
        type: 'info',
        message: config.fileProcessingMessage || 'Processing files, this may take a moment...'
      });
    },
    
    // Update status when sending email
    onEmailSending: () => {
      setSubmitStatus({
        type: 'info',
        message: config.emailSendingMessage || 'Sending your submission, almost done...'
      });
    },
    
    // Success callback
    onSuccess: () => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: config.successMessage || 'Your information has been submitted successfully!'
      });
      
      // Call custom success handler if provided
      if (config.onSuccess && typeof config.onSuccess === 'function') {
        config.onSuccess();
      }
    },
    
    // Error callback
    onError: (error) => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'error',
        message: config.errorMessage || 'There was an error submitting your information. Please try again.'
      });
      
      // Call custom error handler if provided
      if (config.onError && typeof config.onError === 'function') {
        config.onError(error);
      }
    }
  });
  
  // Reset the submission status
  const resetStatus = () => {
    setSubmitStatus(null);
  };
  
  return {
    handleFormSubmit,
    isSubmitting,
    submitStatus,
    resetStatus
  };
}