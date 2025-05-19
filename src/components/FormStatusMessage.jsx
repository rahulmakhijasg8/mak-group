// components/FormStatusMessage.jsx
import React from 'react';

/**
 * Component to display form submission status messages
 */
const FormStatusMessage = ({ status, onReset }) => {
  if (!status) return null;
  
  // Success message with checkmark icon
  if (status.type === 'success') {
    return (
      <div className="p-6 mb-6 rounded-lg text-center border-2 bg-green-50 border-green-100">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-green-800 mb-2">Submission Successful</h3>
        <p className="text-green-700 mb-4">{status.message}</p>
        {onReset && (
          <button 
            onClick={onReset}
            className="px-4 py-2 bg-white text-green-600 border border-green-600 rounded-full hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit Another
          </button>
        )}
      </div>
    );
  }

  // Get the styling based on status type
  const getStatusClass = () => {
    switch (status.type) {
      case 'error':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'info':
      case 'loading':
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  // Standard status message for info/error/loading
  return (
    <div className={`p-4 mb-6 rounded-lg border ${getStatusClass()}`}>
      <div className="flex">
        {status.type === 'error' && (
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )}
        {status.type === 'loading' && (
          <div className="h-5 w-5 mr-2 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
        )}
        {status.type === 'info' && (
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z" clipRule="evenodd" />
          </svg>
        )}
        <p>{status.message}</p>
      </div>
    </div>
  );
};

export default FormStatusMessage;