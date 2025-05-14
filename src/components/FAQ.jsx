// Individual FAQ Item component
export default function FaqItem({ question, answer, isOpen, onClick }) {
    return (
      <div className="border-b border-[#EBEBEB] last:border-b-0">
        <button
          className={`w-full flex items-center justify-between py-5 px-4 text-left focus:outline-none transition-colors duration-200 ${isOpen ? 'bg-[#FAFAFA]' : ''}`}
          onClick={onClick}
        >
          <span className="font-['Lexend'] text-[#000000] text-lg font-[400]">
            {question}
          </span>
          <span className="ml-4 flex-shrink-0 transition-transform duration-200">
            {isOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="#4EBA64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="#4EBA64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 12H5" stroke="#4EBA64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
        </button>
        
        {isOpen ? (
          <div 
            className="animate-slideDown bg-[#FAFAFA] px-4 pb-5"
            style={{ animationDuration: '500ms' }}
          >
            <p style={{ whiteSpace: 'pre-wrap' }} className="font-['Lato'] text-[#000000D6] text-base">
              {answer}
            </p>
          </div>
        ) : null}
        
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              max-height: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              max-height: 500px;
              transform: translateY(0);
            }
          }
          .animate-slideDown {
            animation: slideDown forwards;
          }
        `}</style>
      </div>
    );
  }