// components/SingleForm/SingleForm.jsx
"use client"
import React, { useState } from 'react';
import StackedHeading from '@/components/stackedheading';

const SingleForm = ({ 
  config, 
  onComplete,
  title,
  subtitle
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  // Combine all steps and fields into a flat structure
  const allFields = config.steps.flatMap(step => step.fields);
  
  const handleChange = (fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    
    // Clear error when field is edited
    if (errors[fieldId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    allFields.forEach(field => {
      const value = formData[field.id] || '';
      
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
    if (validateForm()) {
      onComplete && onComplete(formData);
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
    const value = formData[field.id] || '';
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
    <div>
      <div className="bg-white max-w-6xl md:max-w-6xl md:mx-auto p-6 rounded-[50px]">
        {/* Title & Subtitle using StackedHeading */}
        {(title || subtitle) && (
          <StackedHeading 
            title={title} 
            subtitle={subtitle} 
            align="left" 
            className="pb-12" 
          />
        )}

        
        
        {/* Group fields by their original step */}
        {config.steps.map((step, stepIndex) => (
          <div key={step.id} className="mb-8">
            <div className="pb-0">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h2>
              {step.subtitle && (
                <p className="text-sm text-gray-600">{step.subtitle}</p>
              )}
            </div>
            <div className="h-px w-full bg-[#EBEBEB] mt-6 mb-8"></div>
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
            
            {/* Add divider between steps */}
            {stepIndex < config.steps.length - 1 && (
              <div className="h-px w-full bg-[#EBEBEB] my-6"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Submit button in grey space */}
      <div className="mt-8 flex justify-center max-w-6xl md:mx-auto">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SingleForm;