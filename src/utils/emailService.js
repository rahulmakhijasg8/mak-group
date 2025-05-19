// utils/emailService.js

/**
 * Email service to handle form submissions
 */

/**
 * Sends form data via email
 * @param {Object} formData - The form data to send
 * @param {Object} options - Configuration options
 * @param {string} options.subject - Email subject
 * @param {string} options.recipient - Email recipient (override default)
 * @param {string} options.sender - Email sender (override default)
 * @param {string} options.formType - Type of form (car, demat, etc.)
 * @param {Function} options.onSuccess - Success callback
 * @param {Function} options.onError - Error callback
 * @returns {Promise} - A promise that resolves when the email is sent
 */
export const sendFormEmail = async (formData, options = {}) => {
  try {
    // Extract file attachments from form data
    const fileAttachments = [];
    const processedFormData = { ...formData };
    
    // Process form data to extract file data for attachments
    Object.keys(formData).forEach(key => {
      const value = formData[key];
      
      // Check if this is a file object (has name, type, size, and data properties)
      if (value && typeof value === 'object' && !Array.isArray(value) && 
          value.name && value.type && value.data) {
        
        // Add to file attachments
        fileAttachments.push({
          filename: value.name,
          content: value.data,
          contentType: value.type,
          encoding: 'base64'
        });
        
        // Replace with file info in the processed data
        processedFormData[key] = `File: ${value.name} (${(value.size / 1024).toFixed(2)} KB)`;
      }
      // Check if this is an array of file objects
      else if (Array.isArray(value) && value.length > 0 && 
              value[0] && value[0].name && value[0].type && value[0].data) {
        
        // Add each file to attachments
        value.forEach(file => {
          fileAttachments.push({
            filename: file.name,
            content: file.data,
            contentType: file.type,
            encoding: 'base64'
          });
        });
        
        // Replace with file info in the processed data
        processedFormData[key] = value.map(file => 
          `File: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`
        ).join(', ');
      }
    });
    
    console.log(`Extracted ${fileAttachments.length} file(s) for email attachments`);
    
    // Format the email data
    const emailData = {
      to: options.recipient || process.env.NEXT_PUBLIC_EMAIL_RECIPIENT, 
      from: options.sender || process.env.NEXT_PUBLIC_EMAIL_SENDER,
      subject: options.subject || "Form Submission",
      formData: processedFormData,
      formType: options.formType || "Form",
      attachments: fileAttachments.length > 0 ? fileAttachments : undefined
    };
    
    // Send the email using your API endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send email');
    }
    
    // Get the response data
    const responseData = await response.json();
    
    // Call the success callback if provided
    if (options.onSuccess && typeof options.onSuccess === 'function') {
      options.onSuccess(responseData);
    }
    
    return responseData;
  } catch (error) {
    // Call the error callback if provided
    if (options.onError && typeof options.onError === 'function') {
      options.onError(error);
    }
    
    // Re-throw the error for further handling
    throw error;
  }
};

/**
 * Creates a form handler that sends email on submission
 * @param {Object} config - Email configuration 
 * @returns {Function} - Form handler function
 */
export const createEmailFormHandler = (config = {}) => {
  return async (formData) => {
    try {
      // Set initial submitting status
      if (config.onSubmitting && typeof config.onSubmitting === 'function') {
        config.onSubmitting();
      }
      
      // Check if formData contains file fields that need processing
      let processedData = formData;
      
      // Detect if there are files in the submission
      const hasFiles = formData.files || Object.values(formData).some(value => 
          (typeof value === 'object' && value instanceof File) ||
          (Array.isArray(value) && value.length > 0 && value[0] instanceof File));
      
      // If the form data contains file elements that need processing
      if (hasFiles) {
        // Update status to processing files
        if (config.onFileProcessing && typeof config.onFileProcessing === 'function') {
          config.onFileProcessing();
        }
        
        // Process files
        processedData = await processFormFiles(formData);
      }
      
      // Update status to sending email
      if (config.onEmailSending && typeof config.onEmailSending === 'function') {
        config.onEmailSending();
      }
      
      // Send the email
      await sendFormEmail(processedData, {
        subject: config.subject || `Form Submission: ${config.formType || 'Contact'}`,
        recipient: config.recipient,
        sender: config.sender,
        formType: config.formType,
        onSuccess: config.onSuccess,
        onError: config.onError
      });
      
      return true;
    } catch (error) {
      console.error('Failed to submit form:', error);
      return false;
    }
  };
};

/**
 * Process form data to handle file uploads
 * @param {Object} formData - The form data to process
 * @returns {Promise<Object>} - A promise that resolves to processed form data
 */
const processFormFiles = async (formData) => {
  // Create a copy to avoid modifying the original
  const processedData = { ...formData };
  const filePromises = [];
  
  // Process direct file fields (for compatibility with different form implementations)
  Object.keys(formData).forEach(key => {
    const value = formData[key];
    
    // Check if this is a File object
    if (value instanceof File) {
      const promise = readFileAsBase64(value).then(base64Data => {
        processedData[key] = {
          name: value.name,
          type: value.type,
          size: value.size,
          data: base64Data
        };
      });
      
      filePromises.push(promise);
    }
    // Check if this is an array of File objects
    else if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) {
      const filesPromise = Promise.all(value.map(file => readFileAsBase64(file)))
        .then(base64DataArray => {
          processedData[key] = value.map((file, index) => ({
            name: file.name,
            type: file.type,
            size: file.size,
            data: base64DataArray[index]
          }));
        });
      
      filePromises.push(filesPromise);
    }
  });
  
  // Process files from the files object structure
  if (formData.files) {
    Object.keys(formData.files).forEach(fieldId => {
      const files = formData.files[fieldId];
      
      if (files && files.length > 0) {
        // Convert each file to include base64 data
        const filesPromise = Promise.all(files.map(file => readFileAsBase64(file)))
          .then(base64DataArray => {
            if (files.length === 1) {
              // Single file field
              processedData[fieldId] = {
                name: files[0].name,
                type: files[0].type,
                size: files[0].size,
                data: base64DataArray[0]
              };
            } else {
              // Multiple files field
              processedData[fieldId] = files.map((file, index) => ({
                name: file.name,
                type: file.type,
                size: file.size,
                data: base64DataArray[index]
              }));
            }
          });
        
        filePromises.push(filesPromise);
      }
    });
    
    // Remove the files object since we've processed it
    delete processedData.files;
  }
  
  // Wait for all file reading to complete
  await Promise.all(filePromises);
  
  return processedData;
};

/**
 * Read a file as base64 data
 * @param {File} file - The file to read
 * @returns {Promise<string>} - A promise that resolves to the base64 data
 */
const readFileAsBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      // Get base64 data without the prefix
      const base64Data = reader.result.split(',')[1];
      resolve(base64Data);
    };
    reader.readAsDataURL(file);
  });
};