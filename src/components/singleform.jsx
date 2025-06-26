// Fixed SingleForm component - key changes highlighted with comments

const SingleForm = ({ 
  config, 
  onComplete,
  title,
  subtitle,
  submitButtonText = "Submit",
  submitButtonIconType = "none",
  submitButtonAlign = "center",
  secondaryButtonText = null,
  secondaryButtonLink = null,
  paddingMobile = "p-6",
  paddingDesktop = "md:p-10",
  maxFileSize = 5,
  acceptedFileTypes = {
    images: ["image/jpeg", "image/png", "image/gif"], 
    documents: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
  }
}) => {
  // ... other state and functions remain the same ...

  // FIX 1: Add safety check for config and steps
  if (!config || !config.steps || !Array.isArray(config.steps)) {
    return <div>Invalid form configuration</div>;
  }

  // Combine all steps and fields into a flat structure with safety check
  const allFields = config.steps.flatMap(step => 
    step && step.fields && Array.isArray(step.fields) ? step.fields : []
  );

  // ... other functions remain the same until renderField ...

  // FIX 2: Add safety check for select field options
  const renderField = (field) => {
    const value = formData[field.id] || '';
    const errorMessage = errors[field.id];
    
    switch(field.type) {
      // ... other cases remain the same ...
      
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
              {/* FIX: Add safety check for options array */}
              {field.options && Array.isArray(field.options) && field.options.map(option => (
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

      // ... other cases remain the same ...
    }
  };

  // FIX 3: Add default fieldsPerRow with safety check
  const renderFields = (fields, fieldsPerRow = 3) => {
    // Add safety check for fields array
    if (!fields || !Array.isArray(fields)) {
      return null;
    }

    const renderedFields = [];
    
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
        {(title || subtitle) && (
          <StackedHeading 
            title={title} 
            subtitle={subtitle} 
            align="left" 
            className="pb-12" 
          />
        )}
        
        {/* FIX 4: Add safety checks for steps mapping */}
        {config.steps && Array.isArray(config.steps) && config.steps.map((step, stepIndex) => {
          // Skip if step is invalid
          if (!step || !step.id) return null;
          
          return (
            <div key={step.id} className="mb-8">
              <div className="pb-0">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h2>
                {step.subtitle && (
                  <p className="text-sm text-gray-600">{step.subtitle}</p>
                )}
              </div>
              
              {stepIndex > 0 && (
                <div className="h-px w-full bg-[#EBEBEB] mt-6 mb-8"></div>
              )}
              
              <div className="mb-8"></div>
              
              {/* FIX 5: Provide default fieldsPerRow if not specified */}
              {renderFields(step.fields, step.fieldsPerRow || 3)}
            </div>
          );
        })}
      </div>
      
      {/* Action buttons remain the same */}
      <div className={`mt-8 flex flex-col md:flex-row ${getButtonAlignmentClass()} gap-4 max-w-6xl mx-auto`}>
        {secondaryButtonText && secondaryButtonLink && (
          <a
            href={secondaryButtonLink}
            className="px-6 py-3 text-[#000000D6] font-['Lexend'] underline text-center"
          >
            {secondaryButtonText}
          </a>
        )}
        
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