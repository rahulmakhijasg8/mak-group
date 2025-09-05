import React, { useState } from 'react';

export default function PhotoGallery({ 
  photos = [], // Array of photo objects with src, alt, etc.
  className = "",
  showViewMore = false, // Whether to show view more functionality
  mobileInitialCount = 2, // Number of photos to show initially on mobile
  desktopInitialCount = 4 // Number of photos to show initially on desktop
}) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Don't render if no photos provided
  if (!photos || photos.length === 0) {
    return null;
  }

  const hasMorePhotos = photos.length > Math.max(mobileInitialCount, desktopInitialCount);

  return (
    <section className={`w-full mt-[32px] md:mt-[60px] px-4 md:px-[60px] lg:px-[80px] ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {photos.map((photo, index) => {
            // Calculate visibility for different screen sizes
            const hiddenOnMobile = !showAllPhotos && index >= mobileInitialCount;
            const hiddenOnDesktop = !showAllPhotos && index >= desktopInitialCount;
            
            return (
              <div 
                key={index}
                className={`
                  group cursor-pointer
                  ${hiddenOnMobile ? 'hidden' : 'block'}
                  ${hiddenOnDesktop ? 'md:hidden' : 'md:block'}
                `}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-[#4EBA64]/20 flex flex-col">
                  {/* Photo Image - Fixed height like AwardsAchievements */}
                  <div className="relative overflow-hidden bg-gray-50 w-full h-[450px]">
                    <img
                      src={photo.src || photo}
                      alt={photo.alt || `Photo ${index + 1}`}
                      className="w-full h-full p-4 group-hover:scale-105 transition-transform duration-300 object-contain"
                      style={{ pointerEvents: 'auto' }}
                      onContextMenu={(e) => e.stopPropagation()}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-[#221241]/0 group-hover:bg-[#221241]/10 transition-all duration-300 pointer-events-none" />
                  </div>

                  {/* Photo Title (if provided) */}
                  <div className="p-4 flex-shrink-0 md:h-[80px] flex items-center justify-center">
  <h3 className="font-['Lato'] text-[#221241] font-medium text-[14px] md:text-[16px] text-center leading-tight line-clamp-2">
    {photo.title}
  </h3>
</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        {showViewMore && hasMorePhotos && !showAllPhotos && (
          <div className="mt-16 md:mt-20 text-center">
            <button
              onClick={() => setShowAllPhotos(true)}
              className="
                inline-flex items-center gap-2 
                bg-[#221241] hover:bg-[#221241]/90 
                text-white font-['Lato'] font-medium
                px-6 py-3 rounded-lg 
                transition-all duration-200
                text-[14px] md:text-[16px]
              "
            >
              View More Photos
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="transition-transform duration-200"
              >
                <path 
                  d="M7 13L12 18L17 13M7 6L12 11L17 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* View Less Button */}
        {showViewMore && showAllPhotos && (
          <div className="mt-16 md:mt-20 text-center">
            <button
              onClick={() => setShowAllPhotos(false)}
              className="
                inline-flex items-center gap-2 
                bg-gray-100 hover:bg-gray-200 
                text-[#221241] font-['Lato'] font-medium
                px-6 py-3 rounded-lg 
                transition-all duration-200
                text-[14px] md:text-[16px]
              "
            >
              View Less
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="transition-transform duration-200"
              >
                <path 
                  d="M17 11L12 6L7 11M17 18L12 13L7 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Optional: Photo Count indicator */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4EBA64]/10 rounded-full">
            <div className="w-2 h-2 bg-[#4EBA64] rounded-full animate-pulse" />
            <span className="font-['Lato'] text-[#221241] font-medium text-[14px] md:text-[16px]">
              {showAllPhotos ? photos.length : Math.min(photos.length, window.innerWidth >= 768 ? desktopInitialCount : mobileInitialCount)} of {photos.length} Photos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}