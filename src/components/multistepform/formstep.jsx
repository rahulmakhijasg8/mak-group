// components/MultiStepForm/FormStep.jsx
import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Upload, Image, X, Mail, Calendar } from 'lucide-react';

const FormStep = forwardRef(({ 
  step, 
  formData, 
  onNext, 
  onPrev, 
  isFirstStep, 
  isLastStep,
  hideButtons = false,
  // Field layout configuration
  fieldsPerRow = 3, // Default to 3 fields per row, can be overridden per step
  // File upload config
  maxFileSize = 5, // Maximum file size in MB
  acceptedFileTypes = {
    images: ["image/jpeg", "image/png", "image/gif"], 
    documents: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
  }
}, ref) => {
  const [stepData, setStepData] = useState({});
  const [errors, setErrors] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});
  const fileInputRefs = useRef({});
  const dateInputRefs = useRef({});
  const textAreaRefs = useRef({});
  
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

  // Handle text area change and auto-resize
  const handleTextAreaChange = (fieldId, e) => {
    const { value } = e.target;
    handleChange(fieldId, value);
    
    // Auto-resize textarea
    adjustTextAreaHeight(fieldId);
  };

  // Function to adjust textarea height based on content
  const adjustTextAreaHeight = (fieldId) => {
    const textArea = textAreaRefs.current[fieldId];
    if (textArea) {
      // Reset height to calculate correct scrollHeight
      textArea.style.height = 'auto';
      // Set new height based on content
      textArea.style.height = `${Math.max(100, textArea.scrollHeight)}px`;
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex ? regex.test(email) : false;
  };

  // Date validation function
  const validateDate = (dateString, minDate, maxDate) => {
    if (!dateString) return false;
    
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) return false;
    
    // Check if date is within range (if provided)
    if (minDate && date < new Date(minDate)) return false;
    if (maxDate && date > new Date(maxDate)) return false;
    
    return true;
  };
  
  const validateStep = () => {
    const newErrors = {};
    
    step.fields.forEach(field => {
      const value = stepData[field.id] || formData[field.id] || '';
      
      // Email validation
      if (field.type === 'email' && value) {
        if (!validateEmail(value)) {
          newErrors[field.id] = "Please enter a valid email address";
        }
      }
      // Date validation
      else if (field.type === 'date' && field.required) {
        if (!value) {
          newErrors[field.id] = `${field.label} is required`;
        } else if (!validateDate(value, field.minDate, field.maxDate)) {
          if (field.minDate && field.maxDate) {
            newErrors[field.id] = `Please enter a date between ${new Date(field.minDate).toLocaleDateString()} and ${new Date(field.maxDate).toLocaleDateString()}`;
          } else if (field.minDate) {
            newErrors[field.id] = `Please enter a date after ${new Date(field.minDate).toLocaleDateString()}`;
          } else if (field.maxDate) {
            newErrors[field.id] = `Please enter a date before ${new Date(field.maxDate).toLocaleDateString()}`;
          } else {
            newErrors[field.id] = `Please enter a valid date`;
          }
        }
      }
      // File upload validation
      else if (field.type === 'file' || field.type === 'image') {
        // Check if files are uploaded when required
        if (field.required && (!uploadedFiles[field.id] || uploadedFiles[field.id].length === 0)) {
          newErrors[field.id] = `${field.label} is required`;
        }
      }
      // Custom validation if provided
      else if (field.validation) {
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
      // Combine regular form data with uploaded files
      const combinedStepData = {
        ...stepData,
        files: uploadedFiles
      };
      
      onNext(combinedStepData);
    }
  };

  // Format date for display
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Handle file upload
  const handleFileUpload = (fieldId, files) => {
    const field = step.fields.find(f => f.id === fieldId);
    const fileType = field.type === 'image' ? 'images' : 'documents';
    const allowedTypes = acceptedFileTypes[fileType];
    
    // Convert FileList to array for easier manipulation
    const fileArray = Array.from(files);
    
    // Validate files
    const validFiles = fileArray.filter(file => {
      // Check file type
      const isValidType = allowedTypes.includes(file.type);
      if (!isValidType) {
        setErrors(prev => ({
          ...prev,
          [fieldId]: `Invalid file type. Accepted types: ${allowedTypes.join(', ')}`
        }));
        return false;
      }
      
      // Check file size (convert maxFileSize from MB to bytes)
      const isValidSize = file.size <= maxFileSize * 1024 * 1024;
      if (!isValidSize) {
        setErrors(prev => ({
          ...prev,
          [fieldId]: `File too large. Maximum size: ${maxFileSize}MB`
        }));
        return false;
      }
      
      return true;
    });
    
    if (validFiles.length > 0) {
      setUploadedFiles(prev => ({
        ...prev,
        [fieldId]: field.multiple ? [...(prev[fieldId] || []), ...validFiles] : [validFiles[0]]
      }));
      
      // Clear errors
      if (errors[fieldId]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[fieldId];
          return newErrors;
        });
      }
    }
  };
  
  // Remove uploaded file
  const removeFile = (fieldId, index) => {
    setUploadedFiles(prev => {
      const newFiles = { ...prev };
      if (newFiles[fieldId]) {
        newFiles[fieldId] = newFiles[fieldId].filter((_, i) => i !== index);
      }
      return newFiles;
    });
  };
  
  // Trigger file input click
  const triggerFileInput = (fieldId) => {
    if (fileInputRefs.current[fieldId]) {
      fileInputRefs.current[fieldId].click();
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
  
  // Check if a field is a textarea to handle special layout
  const isTextArea = (field) => field.type === 'textarea';
  
  // Get the grid columns class based on fieldsPerRow property
  const getGridColumnsClass = (fieldsPerRowValue = 3) => {
    switch(fieldsPerRowValue) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case 3:
      default:
        return 'grid-cols-1 md:grid-cols-3';
    }
  };
  
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
            className={`w-[95%] px-3 py-4 border text-sm placeholder:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errorMessage ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
          />
        );
      case 'email':
        return (
          <input
            type="email"
            value={value}
            onChange={e => handleChange(field.id, e.target.value)}
            placeholder={field.placeholder || 'example@domain.com'}
            className={`w-[95%] px-3 py-4 border text-sm placeholder:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errorMessage ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
          />
        );
      case 'date':
        // Get min and max dates if specified
        const minDate = field.minDate || '';
        const maxDate = field.maxDate || '';
        
        return (
          <div className="w-[95%] relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <Calendar className="h-5 w-5 text-[#4EBA64]" />
            </div>
            <input
              type="date"
              value={value}
              onChange={e => handleChange(field.id, e.target.value)}
              min={minDate}
              max={maxDate}
              className={`w-full px-3 py-4 pl-10 border text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer ${
                errorMessage ? 'border-red-500' : 'border-gray-300'
              }`}
              style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
            />
          </div>
        );
      case 'select':
        return (
          <div className="relative w-[95%]">
            <select
              value={value}
              onChange={e => handleChange(field.id, e.target.value)}
              className={`w-full px-3 py-4 border text-sm placeholder:text-sm rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errorMessage ? 'border-red-500' : 'border-gray-300'
              }`}
              style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
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
      case 'textarea':
        return (
          <textarea
            ref={el => textAreaRefs.current[field.id] = el}
            value={value}
            onChange={e => handleTextAreaChange(field.id, e)}
            placeholder={field.placeholder || ''}
            className={`w-full px-3 py-4 border text-sm placeholder:text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none min-h-[130px] ${
              errorMessage ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
          />
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
            className={`w-[95%] px-3 py-4 border text-sm placeholder:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              errorMessage ? 'border-red-500' : 'border-gray-300'
            }`}
            style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
          />
        );
      case 'file':
      case 'image':
        const isImageUpload = field.type === 'image';
        const fileType = isImageUpload ? 'images' : 'documents';
        const acceptedTypes = acceptedFileTypes[fileType].join(',');
        const files = uploadedFiles[field.id] || [];
        const icon = isImageUpload ? <Image className="h-5 w-5 mr-2" /> : <Upload className="h-5 w-5 mr-2" />;
        
        return (
          <div className="w-[95%]">
            <input
              ref={el => fileInputRefs.current[field.id] = el}
              type="file"
              accept={acceptedTypes}
              onChange={e => handleFileUpload(field.id, e.target.files)}
              multiple={field.multiple}
              className="hidden"
            />
            
            <div 
              onClick={() => triggerFileInput(field.id)}
              className={`w-full px-3 py-4 border text-sm rounded-full cursor-pointer flex items-center justify-center transition-colors hover:bg-gray-50 ${
                errorMessage ? 'border-red-500' : 'border-gray-300'
              }`}
              style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
            >
              {icon}
              <span>
                {isImageUpload 
                  ? `${files.length ? 'Change' : 'Upload'} Image${field.multiple ? '(s)' : ''}`
                  : `${files.length ? 'Change' : 'Upload'} File${field.multiple ? '(s)' : ''}`}
              </span>
            </div>
            
            {/* Preview uploaded files */}
            {files.length > 0 && (
              <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center overflow-hidden">
                      {isImageUpload && (
                        <div className="w-10 h-10 min-w-[2.5rem] mr-2 rounded-md overflow-hidden bg-gray-200">
                          <img 
                            src={URL.createObjectURL(file)} 
                            alt={file.name}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      )}
                      <div className="truncate">
                        <p className="text-xs font-medium truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(field.id, index)}
                      className="p-1 text-gray-500 rounded-full hover:bg-gray-200 ml-1 flex-shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return <div>Unsupported field type: {field.type}</div>;
    }
  };

  // Render fields with special handling for textareas
  const renderFields = () => {
    // Get fieldsPerRow from step config or use default
    const fieldsPerRowValue = step.fieldsPerRow || fieldsPerRow;
    
    // Create a new array to store the result
    const renderedFields = [];
    
    // First pass: render all non-textarea fields in the grid
    const gridFields = step.fields.filter(field => !isTextArea(field));
    if (gridFields.length > 0) {
      renderedFields.push(
        <div key="grid-fields" className={`grid ${getGridColumnsClass(fieldsPerRowValue)} md:gap-x-10 gap-y-6`}>
          {gridFields.map(field => (
            <div key={field.id} className="flex pb-2 flex-col">
              <label className="pb-3 text-sm font-[600] text-[#4EBA64]">
                {field.label} {field.required && <span className="font-[600] text-[#4EBA64]">*</span>}
              </label>
              {renderField(field)}
              {errors[field.id] && <p className="mt-1 text-xs text-red-600">{errors[field.id]}</p>}
            </div>
          ))}
        </div>
      );
    }
    
    // Second pass: render all textarea fields full width, each in its own row
    const textareaFields = step.fields.filter(field => isTextArea(field));
    if (textareaFields.length > 0) {
      textareaFields.forEach(field => {
        renderedFields.push(
          <div key={field.id} className="flex pb-2 flex-col mt-6 w-full">
            <label className="pb-3 text-sm font-[600] text-[#4EBA64]">
              {field.label} {field.required && <span className="font-[600] text-[#4EBA64]">*</span>}
            </label>
            {renderField(field)}
            {errors[field.id] && <p className="mt-1 text-xs text-red-600">{errors[field.id]}</p>}
          </div>
        );
      });
    }
    
    return renderedFields;
  };
  
  return (
    <div id={`form-step-${step.id}`}>
      <div className="pb-12">
        <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
        {step.subtitle && (
          <p className="text-sm text-gray-600">{step.subtitle}</p>
        )}
      </div>
      
      {/* Render fields with special handling for textareas */}
      {renderFields()}
      
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
            className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {isLastStep ? 'Submit' : 'Next Step'}
          </button>
        </div>
      )}
    </div>
  );
});

export default FormStep;