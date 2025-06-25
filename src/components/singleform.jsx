"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Phone, Mail, Info, Upload, Image as ImageIcon, X } from 'lucide-react';
import StackedHeading from '@/components/stackedheading';

// Custom Quote icon component
const QuoteIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className={className}
    fill="none"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4.14326 2.70591C3.95894 2.70591 3.77642 2.74288 3.60613 2.8147C3.43583 2.88652 3.2811 2.9918 3.15076 3.12451C3.02043 3.25722 2.91704 3.41477 2.8465 3.58817C2.77596 3.76157 2.73966 3.94741 2.73966 4.13509V21.1283L5.05744 18.1783C5.34671 17.8101 5.7136 17.5129 6.13095 17.3087C6.5483 17.1044 7.00541 16.9983 7.46847 16.9983H19.8643C20.2365 16.9983 20.5935 16.8477 20.8568 16.5797C21.12 16.3117 21.2679 15.9481 21.2679 15.5691V4.13509C21.2679 3.94736 21.2317 3.76146 21.1612 3.588C21.0907 3.41454 20.9873 3.25692 20.857 3.12415C20.7266 2.99138 20.5719 2.88606 20.4015 2.8142C20.2312 2.74235 20.0486 2.70536 19.8643 2.70536L4.14326 2.70591ZM1.05469 4.13509C1.05469 3.30102 1.38009 2.50112 1.95931 1.91134C2.53853 1.32157 3.32412 0.990234 4.14326 0.990234H19.8643C20.2699 0.990234 20.6715 1.07158 21.0462 1.22962C21.4209 1.38767 21.7614 1.61932 22.0482 1.91134C22.335 2.20337 22.5625 2.55006 22.7177 2.93161C22.873 3.31316 22.9528 3.7221 22.9528 4.13509V15.5691C22.9528 15.9821 22.873 16.391 22.7177 16.7726C22.5625 17.1541 22.335 17.5008 22.0482 17.7929C21.7614 18.0849 21.4209 18.3165 21.0462 18.4746C20.6715 18.6326 20.2699 18.714 19.8643 18.714H7.46847C7.0421 18.714 6.63838 18.911 6.3721 19.2496L3.75463 22.5811C2.85986 23.721 1.05523 23.0761 1.05523 21.6173L1.05469 4.13509Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.0741 7.27958C7.99976 7.27958 7.92847 7.30965 7.8759 7.36317C7.82334 7.41669 7.79381 7.48929 7.79381 7.56498V8.70876C7.79381 8.86683 7.9194 8.99416 8.0741 8.99416H9.47824V7.56553C9.47831 7.52796 9.4711 7.49074 9.45701 7.45602C9.44292 7.42129 9.42224 7.38974 9.39615 7.36317C9.37005 7.3366 9.33907 7.31554 9.30496 7.3012C9.27086 7.28686 9.23431 7.27951 9.19741 7.27958H8.0741ZM9.17585 10.7098C9.11117 10.8169 9.03409 10.931 8.94407 11.0529C8.56676 11.566 8.05146 12.0929 7.47902 12.6763C7.4008 12.756 7.33876 12.8505 7.29643 12.9546C7.2541 13.0586 7.23231 13.1702 7.23231 13.2828C7.23231 13.3954 7.2541 13.507 7.29643 13.611C7.33876 13.7151 7.4008 13.8096 7.47902 13.8893C7.55724 13.9689 7.6501 14.0321 7.75229 14.0752C7.85449 14.1183 7.96402 14.1405 8.07464 14.1405C8.18525 14.1405 8.29479 14.1183 8.39698 14.0752C8.49918 14.0321 8.59203 13.9689 8.67025 13.8893L8.69397 13.864C9.23838 13.3102 9.83507 12.7027 10.2922 12.0819C10.7498 11.4607 11.1627 10.7038 11.1627 9.852V7.56553C11.1627 7.03481 10.9556 6.52583 10.5871 6.15055C10.2185 5.77528 9.71863 5.56445 9.19741 5.56445H8.0741C7.55297 5.5646 7.05324 5.77549 6.6848 6.15075C6.31635 6.52601 6.10937 7.0349 6.10938 7.56553V8.70876C6.10937 9.23939 6.31635 9.74828 6.6848 10.1235C7.05324 10.4988 7.55297 10.7097 8.0741 10.7098H9.17585ZM14.8118 7.27958C14.7375 7.27958 14.6662 7.30965 14.6136 7.36317C14.5611 7.41669 14.5315 7.48929 14.5315 7.56498V8.70876C14.5315 8.86683 14.6571 8.99416 14.8118 8.99416H16.216V7.56553C16.216 7.52796 16.2088 7.49074 16.1947 7.45602C16.1806 7.42129 16.16 7.38974 16.1339 7.36317C16.1078 7.3366 16.0768 7.31554 16.0427 7.3012C16.0086 7.28686 15.972 7.27951 15.9351 7.27958H14.8118ZM15.9136 10.7098C15.8489 10.8169 15.7718 10.931 15.6818 11.0529C15.3045 11.566 14.7892 12.0929 14.2162 12.6763C14.138 12.756 14.0759 12.8505 14.0336 12.9546C13.9913 13.0586 13.9695 13.1702 13.9695 13.2828C13.9695 13.3954 13.9913 13.507 14.0336 13.611C14.0759 13.7151 14.138 13.8096 14.2162 13.8893C14.2944 13.9689 14.3873 14.0321 14.4895 14.0752C14.5917 14.1183 14.7012 14.1405 14.8118 14.1405C14.9224 14.1405 15.032 14.1183 15.1342 14.0752C15.2364 14.0321 15.3292 13.9689 15.4074 13.8893L15.4317 13.864C15.9761 13.3102 16.5728 12.7027 17.0299 12.0819C17.487 11.4607 17.8999 10.7038 17.8999 9.852V7.56553C17.8999 7.0349 17.6929 6.52601 17.3244 6.15075C16.956 5.77549 16.4563 5.5646 15.9351 5.56445H14.8118C14.2906 5.56445 13.7907 5.77528 13.4222 6.15055C13.0536 6.52583 12.8466 7.03481 12.8466 7.56553V8.70876C12.8466 9.23948 13.0536 9.74846 13.4222 10.1237C13.7907 10.499 14.2906 10.7098 14.8118 10.7098H15.9136Z" fill="currentColor"/>
  </svg>
);

// Custom Gamepad icon component
const GamepadIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
  >
    <path d="M19.5425 10.3897C18.7679 9.23288 17.9217 8.34812 17.1027 7.81004C17.295 7.51816 17.3974 7.17621 17.3971 6.82665C17.3971 6.09329 16.9549 5.46165 16.3234 5.18321L16.9891 3.44677C17.0933 3.17504 17.4102 2.34798 16.9366 1.7303C16.4603 1.10907 15.606 1.19776 14.9822 1.26254C14.8354 1.27777 14.6969 1.29216 14.5996 1.29352C14.1295 1.29948 13.859 1.12121 13.5167 0.895038C13.1653 0.662772 12.7299 0.375006 12.1097 0.375006C12.1009 0.375006 12.092 0.3751 12.0832 0.375194C11.449 0.366381 11.005 0.659585 10.6483 0.895178C10.3059 1.12135 10.0343 1.30041 9.56566 1.29357C9.46816 1.29221 9.32959 1.27782 9.18287 1.26258C8.55897 1.1978 7.70477 1.10912 7.22842 1.73035C6.7548 2.34798 7.07177 3.17504 7.17597 3.44687L7.84164 5.18326C7.21014 5.46169 6.76797 6.09333 6.76797 6.82665C6.76769 7.14664 6.85349 7.46082 7.01636 7.73626C6.16173 8.26519 5.27223 9.17827 4.46125 10.3897C3.11059 12.4072 2.33594 14.7234 2.33594 16.7445C2.33594 18.7492 3.09508 20.4285 4.53133 21.6009C6.17683 22.9441 8.69036 23.6251 12.0021 23.6251C15.3139 23.6251 17.8273 22.9441 19.4728 21.6009C20.9091 20.4286 21.6682 18.7494 21.6682 16.7447C21.6682 14.7235 20.8935 12.4073 19.5426 10.3898L19.5425 10.3897ZM9.03761 2.66129C9.21653 2.67985 9.38556 2.69743 9.54634 2.69968C10.4492 2.71257 11.0123 2.3401 11.4233 2.0686C11.7153 1.8758 11.8669 1.7813 12.0572 1.7813C12.0611 1.7813 12.065 1.7813 12.069 1.7814L12.0832 1.78168L12.0974 1.7814C12.2926 1.77812 12.4441 1.87173 12.7414 2.06823C13.1524 2.33987 13.7143 2.71149 14.619 2.69968C14.7795 2.69743 14.9485 2.6799 15.1274 2.66129C15.3017 2.64319 15.5931 2.61296 15.7715 2.62491C15.7587 2.69448 15.7317 2.79802 15.676 2.94348L14.8757 5.03129H9.28937L8.48903 2.94352C8.4333 2.79802 8.40634 2.69448 8.39355 2.62491C8.57214 2.61287 8.86333 2.64319 9.03761 2.66129ZM8.56328 7.21576C8.35239 7.21576 8.17417 7.03758 8.17417 6.82665C8.17417 6.61571 8.35239 6.43754 8.56328 6.43754H15.6017C15.8126 6.43754 15.9909 6.61571 15.9909 6.82665C15.9909 7.03758 15.8126 7.21576 15.6017 7.21576H8.56328ZM18.5836 20.5115C17.1957 21.6444 14.9813 22.2188 12.0021 22.2188C9.02294 22.2188 6.80847 21.6443 5.42059 20.5114C4.30689 19.6023 3.74219 18.3349 3.74219 16.7445C3.74219 15.0206 4.44784 12.9375 5.6298 11.172C6.75058 9.49791 7.9653 8.62201 8.58592 8.62201H15.417C16.038 8.62201 17.2531 9.49796 18.3741 11.1721C19.5562 12.9376 20.2619 15.0208 20.2619 16.7447C20.2619 18.3351 19.6972 19.6024 18.5835 20.5115H18.5836Z" fill="currentColor"/>
  </svg>
);

// Custom WhatsApp icon component
const WhatsAppIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className={className}
    fill="none"
  >
    <g clipPath="url(#clip0_309_3730)">
      <path d="M17.5071 14.3081L17.4981 14.3831C15.2991 13.2871 15.0691 13.1411 14.7851 13.5671C14.5881 13.8621 14.0141 14.5311 13.8411 14.7291C13.6661 14.9241 13.4921 14.9391 13.1951 14.8041C12.8951 14.6541 11.9321 14.3391 10.7921 13.3191C9.90414 12.5241 9.30814 11.5491 9.13214 11.2491C8.83914 10.7431 9.45214 10.6711 10.0101 9.61515C10.1101 9.40515 10.0591 9.24015 9.98514 9.09115C9.91014 8.94115 9.31314 7.47115 9.06314 6.88515C8.82314 6.30115 8.57614 6.37515 8.39114 6.37515C7.81514 6.32515 7.39414 6.33315 7.02314 6.71915C5.40914 8.49315 5.81614 10.3231 7.19714 12.2691C9.91114 15.8211 11.3571 16.4751 14.0011 17.3831C14.7151 17.6101 15.3661 17.5781 15.8811 17.5041C16.4551 17.4131 17.6481 16.7831 17.8971 16.0781C18.1521 15.3731 18.1521 14.7881 18.0771 14.6531C18.0031 14.5181 17.8071 14.4431 17.5071 14.3081Z" fill="currentColor"/>
      <path d="M20.52 3.44943C12.831 -3.98357 0.106 1.40743 0.101 11.8934C0.101 13.9894 0.65 16.0334 1.696 17.8384L0 24.0004L6.335 22.3484C14.24 26.6184 23.996 20.9484 24 11.8994C24 8.72343 22.76 5.73443 20.505 3.48843L20.52 3.44943ZM22.002 11.8664C21.996 19.4994 13.617 24.2664 6.99 20.3704L6.63 20.1564L2.88 21.1314L3.885 17.4864L3.646 17.1114C-0.478 10.5464 4.26 1.96643 12.072 1.96643C13.3766 1.96315 14.6688 2.21866 15.874 2.71816C17.0791 3.21766 18.1733 3.95124 19.093 4.87643C20.0178 5.79001 20.7513 6.87864 21.2507 8.07878C21.7502 9.27892 22.0056 10.5665 22.002 11.8664Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_309_3730">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const SingleForm = ({ 
  config, 
  onComplete,
  title,
  subtitle,
  // Button customization
  submitButtonText = "Submit",
  submitButtonIconType = "none", // Options: 'calendar', 'arrow', 'mail', 'phone', 'info', 'quote', 'gamepad', 'none'
  submitButtonAlign = "center", // Options: 'left', 'center', 'right'
  secondaryButtonText = null,
  secondaryButtonLink = null,
  // Padding customization
  paddingMobile = "p-6", // Default mobile padding (e.g., "p-6", "p-4", "px-6 py-8")
  paddingDesktop = "md:p-10", // Default desktop padding (e.g., "md:p-10", "md:px-12 md:py-8")
  // File upload config
  maxFileSize = 5, // Maximum file size in MB
  acceptedFileTypes = {
    images: ["image/jpeg", "image/png", "image/gif"], 
    documents: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
  }
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});
  const fileInputRefs = useRef({});
  const textAreaRefs = useRef({});


  
  
  // Check if a field is a textarea to handle special layout
  const isTextArea = (field) => field.type === 'textarea';
  
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

  // Adjust height for all textareas when form data changes
  useEffect(() => {
    Object.keys(textAreaRefs.current).forEach(fieldId => {
      if (formData[fieldId] !== undefined) {
        adjustTextAreaHeight(fieldId);
      }
    });
  }, [formData]);

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
  
  // Phone number validation function
  const validatePhoneNumber = (phone) => {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if it's exactly 10 digits
    return cleanPhone.length === 10;
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    allFields.forEach(field => {
      const value = formData[field.id] || '';
      
      // Email validation
      if (field.type === 'email' && value) {
        if (!validateEmail(value)) {
          newErrors[field.id] = "Please enter a valid email address";
        }
      }
      // Phone number validation (for number fields that are phone numbers)
      else if (field.type === 'number' && field.isPhone && value) {
        if (!validatePhoneNumber(value)) {
          newErrors[field.id] = "Please enter a valid 10-digit phone number";
        }
      }
      // Date validation
      else if (field.type === 'date' && field.required) {
        if (!value) {
          newErrors[field.id] = `${field.label} is required`;
        } else if (!validateDate(value, field.minDate, field.maxDate)) {
          newErrors[field.id] = `Please enter a valid date`;
        }
      }
      // File upload validation
      else if ((field.type === 'file' || field.type === 'image') && field.required) {
        if (!uploadedFiles[field.id] || uploadedFiles[field.id].length === 0) {
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

  // components/singleform.jsx (Only showing the relevant parts to modify)

// Add this function inside your SingleForm component
const prepareFormDataWithFiles = async (formData) => {
  // Create a copy to avoid modifying the original
  const processedData = { ...formData };
  const filePromises = [];
  
  // Process file fields from uploads
  if (formData.files) {
    Object.keys(formData.files).forEach(fieldId => {
      const files = formData.files[fieldId];
      
      if (files && files.length > 0) {
        // Convert each file to include base64 data
        files.forEach(file => {
          const promise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              // Get the base64 data without the prefix
              const base64Data = reader.result.split(',')[1]; 
              
              // Add file to processed data
              if (!processedData[fieldId]) {
                processedData[fieldId] = {
                  name: file.name,
                  type: file.type,
                  size: file.size,
                  data: base64Data
                };
              } else if (Array.isArray(processedData[fieldId])) {
                // Multiple files case
                processedData[fieldId].push({
                  name: file.name,
                  type: file.type,
                  size: file.size,
                  data: base64Data
                });
              } else {
                // Convert to array for multiple files
                processedData[fieldId] = [{
                  name: file.name,
                  type: file.type,
                  size: file.size,
                  data: base64Data
                }];
              }
              
              resolve();
            };
            
            reader.readAsDataURL(file);
          });
          
          filePromises.push(promise);
        });
      }
    });
  }
  
  // Wait for all file reading to complete
  await Promise.all(filePromises);
  
  return processedData;
};

// Update the handleSubmit function
const handleSubmit = async () => {
  if (validateForm()) {
    try {
      // Show processing state if needed
      // ...
      
      // Process form data with files
      const processedData = await prepareFormDataWithFiles({
        ...formData,
        files: uploadedFiles
      });
      
      // Pass the processed data to the onComplete callback
      onComplete && onComplete(processedData);
    } catch (error) {
      console.error("Error processing form data:", error);
      // Handle error if needed
    }
  }
};

// The rest of the component remains the same

  // Handle file upload
  const handleFileUpload = (fieldId, files) => {
    const field = allFields.find(f => f.id === fieldId);
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

  // Function to get the correct icon based on the iconType string
  const getButtonIcon = (iconType) => {
    switch(iconType) {
      case 'calendar':
        return <Calendar className="h-5 w-5 mr-2" />;
      case 'arrow':
        return <ArrowRight className="h-5 w-5 mr-2" />;
      case 'phone':
        return <Phone className="h-5 w-5 mr-2" />;
      case 'mail':
        return <Mail className="h-5 w-5 mr-2" />;
      case 'info':
        return <Info className="h-5 w-5 mr-2" />;
      case 'quote':
        return <QuoteIcon className="h-5 w-5 mr-2" />;
      case 'gamepad':
        return <GamepadIcon className="h-5 w-5 mr-2" />;
      case 'whatsapp':
        return <WhatsAppIcon className="h-5 w-5 mr-2" />;
      case 'none':
      default:
        return null;
    }
  };
  
  // Get the icon based on the provided icon type
  const submitIcon = getButtonIcon(submitButtonIconType);

  // Get button alignment class
  const getButtonAlignmentClass = () => {
    switch(submitButtonAlign) {
      case 'left':
        return 'justify-start pl-6 md:pl-10'; // Add padding to align with form content
      case 'right':
        return 'justify-end pr-6 md:pr-10'; // Add padding for right alignment consistency
      case 'center':
      default:
        return 'justify-center';
    }
  };
  
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
  
  // Create a ref for the date input to trigger click
  const dateInputRef = useRef(null);
  
  // Function to open date picker when left icon is clicked
  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.() || dateInputRef.current.focus();
    }
  };
  
  return (
    <div className="w-[95%] relative">
      <div 
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        onClick={openDatePicker}
      >
        <Calendar className="h-5 w-5 text-[#4EBA64]" />
      </div>
      <input
        ref={dateInputRef}
        type="date"
        value={value}
        onChange={e => handleChange(field.id, e.target.value)}
        min={minDate}
        max={maxDate}
        className={`w-full px-3 py-4 pl-10 border text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer hide-date-icon ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        }`}
        style={{ boxShadow: '0px 2px 6px 0px rgba(19, 18, 66, 0.07)' }}
      />
      <style jsx>{`
        .hide-date-icon::-webkit-calendar-picker-indicator {
          display: none;
        }
        .hide-date-icon::-webkit-inner-spin-button,
        .hide-date-icon::-webkit-outer-spin-button {
          display: none;
        }
      `}</style>
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
        const icon = isImageUpload ? <ImageIcon className="h-5 w-5 mr-2" /> : <Upload className="h-5 w-5 mr-2" />;
        
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

  // Get the grid columns class based on fieldsPerRow property
  const getGridColumnsClass = (fieldsPerRow = 3) => {
    switch(fieldsPerRow) {
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

  // Render fields in a step, handling textareas differently
  const renderFields = (fields, fieldsPerRow = 3) => {
    // Create a new array to store the result
    const renderedFields = [];
    
    // First pass: render all non-textarea fields in the grid
    const gridFields = fields.filter(field => !isTextArea(field));
    if (gridFields.length > 0) {
      renderedFields.push(
        <div key="grid-fields" className={`grid ${getGridColumnsClass(fieldsPerRow)} md:gap-x-10 gap-y-6`}>
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
    const textareaFields = fields.filter(field => isTextArea(field));
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
    <div>
      <div className={`bg-white max-w-6xl md:max-w-6xl md:mx-auto ${paddingMobile} ${paddingDesktop} rounded-[34px]`}>
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
            
            {/* Show divider if this is not the first step */}
            {stepIndex > 0 && (
              <div className="h-px w-full bg-[#EBEBEB] mt-6 mb-8"></div>
            )}
            
            {/* Add space between step title and form fields */}
            <div className="mb-8"></div>
            
            {/* Render fields with special handling for textareas */}
            {renderFields(step.fields, step.fieldsPerRow)}
          </div>
        ))}
      </div>
      
      {/* Action buttons */}
      <div className={`mt-8 flex flex-col md:flex-row ${getButtonAlignmentClass()} gap-4 max-w-6xl mx-auto`}>
        {/* Secondary button (optional) */}
        {secondaryButtonText && secondaryButtonLink && (
          <a
            href={secondaryButtonLink}
            className="px-6 py-3 text-[#000000D6] font-['Lexend'] underline text-center"
          >
            {secondaryButtonText}
          </a>
        )}
        
        {/* Submit button - aligned based on submitButtonAlign prop */}
        <button
          type="button"
          onClick={handleSubmit}
          className={`px-3 md:px-8 py-4 md:py-3 w-[60%] md:w-auto mx-auto md:mx-0 bg-green-500 font-['Lexend'] text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center`}
        >
          {submitIcon}
          <span>{submitButtonText}</span>
        </button>
      </div>
    </div>
  );
};

export default SingleForm;