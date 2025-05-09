// components/MultiStepForm/StepIndicator.jsx
import React from 'react';

const StepIndicator = ({ totalSteps, currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        
        return (
          <React.Fragment key={stepNumber}>
            {/* Step circle */}
            <div 
              className={`
                flex items-center justify-center h-8 w-8 rounded-full text-sm
                ${isActive || isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}
              `}
            >
              {stepNumber}
            </div>
            
            {/* Connecting line (if not the last step) */}
            {stepNumber < totalSteps && (
              <div className="w-16 h-1 mx-1">
                <div 
                  className={`h-full ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`}
                ></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;