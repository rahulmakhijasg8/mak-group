// components/MultiStepForm/MultiStepForm.jsx
"use client"
import { useState, useRef } from 'react';
import StepIndicator from './stepindicator';
import FormStep from './formstep';
import StackedHeading from '@/components/stackedheading';

const MultiStepForm = ({ 
  config, 
  onComplete,
  title,
  subtitle,
  // Add default fieldsPerRow at the form level
  defaultFieldsPerRow = 3
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const formStepRef = useRef(null);
  
  const currentStep = config.steps[currentStepIndex];
  
  const handleNextStep = (stepData) => {
    const updatedData = { ...formData, ...stepData };
    setFormData(updatedData);
    
    if (currentStepIndex < config.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      onComplete && onComplete(updatedData);
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
        
        <StepIndicator 
          totalSteps={config.steps.length} 
          currentStep={currentStepIndex + 1} 
        />
        
        {/* Divider */}
        <div className="h-px w-full bg-[#EBEBEB] my-6"></div>
        
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
          className=" px-12 md:px-8 md:py-3 py-4 text-[18px] md:text-[16px] bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          {currentStepIndex === config.steps.length - 1 ? 'Submit' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;