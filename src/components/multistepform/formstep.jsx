// components/MultiStepForm/FormStep.jsx
import React, { useState, forwardRef, useImperativeHandle } from 'react';

const FormStep = forwardRef(({ 
  step, 
  formData, 
  onNext, 
  onPrev, 
  isFirstStep, 
  isLastStep,
  hideButtons = false
}, ref) => {
  const [stepData, setStepData] = useState({});
  const [errors, setErrors] = useState({});
  
  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    validateAndSubmit: () => {
      handleSubmit();
    }
  }));
  
  const handleChange = (fieldId, value) => {
    setStepData(prev => ({ ...prev, [fieldId]: value }));
    
    // Clear error when field is edited
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };
  
  const validateStep = () => {
    const newErrors = {};
    
    step.fields.forEach(field => {
      const value = stepData[field.id] || formData[field.id] || '';
      
      // Custom validation if provided
      if (field.validation) {
        const error = field.validation(value);
        if (error) {
          newErrors[field.id] = error;
        }
      } 
      // Basic required validation
      else if (field.required && !value) {
        newErrors[field.id] = `${field.label} is required`;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = () => {
    if (validateStep()) {
      onNext(stepData);
    }
  };
  
  // Dropdown icon component
  const DropdownIcon = () => (
    <svg 
      className="h-5 w-5 text-[#4EBA64]" 
      viewBox="0 0 20 20" 
      fill="currentColor" 
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
        clipRule="evenodd" 
      />
    </svg>
  );
  
  // Render field based on type
  const renderField = (field) => {
    const value = stepData[field.id] || formData[field.id] || '';
    const errorMessage = errors[field.id];
    
    switch(field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={e => handleChange(field.id, e.target.value)}
            placeholder={field.placeholder || ''}
            className={`w-full px-3 py-4 border shadow-md text-sm placeholder:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errorMessage ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
      case 'select':
        return (
          <div className="relative">
            <select
              value={value}
              onChange={e => handleChange(field.id, e.target.value)}
              className={`w-full px-3 py-4 border shadow-md text-sm placeholder:text-sm rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errorMessage ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">{field.placeholder || `Select ${field.label}`}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <DropdownIcon />
            </div>
          </div>
        );
      case 'number':
        return (
          <input
            type="number"
            value={value}
            onChange={e => handleChange(field.id, e.target.value)}
            placeholder={field.placeholder || ''}
            min={field.min}
            max={field.max}
            step={field.step || 1}
            className={`w-full px-3 py-4 border shadow-md text-sm placeholder:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errorMessage ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
      default:
        return <div>Unsupported field type: {field.type}</div>;
    }
  };
  
  return (
    <div id={`form-step-${step.id}`}>
      <div className="pb-12">
        <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
        {step.subtitle && (
          <p className="text-sm text-gray-600">{step.subtitle}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {step.fields.map(field => (
          <div key={field.id} className="flex pb-2 flex-col">
            <label className="pb-3 text-sm font-[600] text-[#4EBA64]">
              {field.label} {field.required && <span className="font-[600] text-[#4EBA64]">*</span>}
            </label>
            {renderField(field)}
            {errors[field.id] && <p className="mt-1 text-xs text-red-600">{errors[field.id]}</p>}
          </div>
        ))}
      </div>
      
      {/* Only render buttons if hideButtons is false */}
      {!hideButtons && (
        <div className="mt-8 flex justify-center space-x-4">
          {!isFirstStep && (
            <button
              type="button"
              onClick={onPrev}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {isLastStep ? 'Submit' : 'Next Step'}
          </button>
        </div>
      )}
    </div>
  );
});

export default FormStep;