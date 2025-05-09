// components/MultiStepForm/FormField.jsx
import { ChevronDown } from 'lucide-react';

const FormField = ({ field, value, onChange, error }) => {
  const renderFieldByType = () => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={field.placeholder || ''}
            className={`w-full px-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-500 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
        
      case 'select':
        return (
          <div className="relative">
            <select
              value={value}
              onChange={e => onChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 ${
                error ? 'border-red-500' : 'border-gray-300'
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
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        );
      
      case 'number':
        return (
          <input
            type="number"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={field.placeholder || ''}
            min={field.min}
            max={field.max}
            step={field.step || 1}
            className={`w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
        
      // Add more field types as needed (date, checkbox, radio, etc.)
        
      default:
        return <div>Unsupported field type: {field.type}</div>;
    }
  };
  
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm pb-2 font-medium text-[#4EBA64]">
        {field.label} {field.required && <span className="text-[#4EBA64]">*</span>}
      </label>
      {renderFieldByType()}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;