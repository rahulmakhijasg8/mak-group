"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Your original GridItem component (cards only, no image support)
const GridItem = ({ icon, title, description, link, accentColor = "#4EBA64" }) => {
  const cardContent = (
    <div className="bg-[#FAFAFA] rounded-[40px] md:rounded-[20px] p-5 md:p-6 h-[280px] hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
      {/* Icon with white background */}
      {icon && (
        <div className="flex rounded-[10px] justify-center w-20 md:w-18 h-18 md:justify-center items-center mb-8 bg-[#FFFFFF] md:h-18 md:w-18">
          <Image src={icon || "/placeholder.svg"} alt="" width={500} height={500} className="w-16 h-16" />
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-[600] text-[#000000] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-[#000000D6] font-[400] text-sm">{description}</p>
    </div>
  )

  // If link is provided, wrap in Link, otherwise just return the content
  return link ? (
    <Link href={link} className="block h-full">
      {cardContent}
    </Link>
  ) : (
    <div className="block h-full">{cardContent}</div>
  )
}

// Tabbed Layout Component
const TabbedLoanLayout = ({ securedLoans = [], unsecuredLoans = [], className = "", itemClassName = "" }) => {
  const [activeTab, setActiveTab] = useState("secured")

  return (
    <div className={`px-4 md:px-[60px] lg:px-[80px] mx-auto max-w-7xl py-12 ${className}`}>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#F5F5F5] rounded-full p-2 flex w-full max-w-md">
          <button
            onClick={() => setActiveTab("secured")}
            className={`flex-1 px-4 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
              activeTab === "secured" ? "bg-[#4EBA64] text-white shadow-lg" : "text-[#221241] hover:bg-[#E0E0E0]"
            }`}
          >
            Secured Loans
          </button>
          <button
            onClick={() => setActiveTab("unsecured")}
            className={`flex-1 px-4 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
              activeTab === "unsecured" ? "bg-[#4EBA64] text-white shadow-lg" : "text-[#221241] hover:bg-[#E0E0E0]"
            }`}
          >
            Unsecured Loans
          </button>
        </div>
      </div>

      {/* Content - Removed min-h-[600px] */}
      <div>
        {activeTab === "secured" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 animate-fadeIn">
            {securedLoans.map((item, index) => (
              <div key={index} className={`${itemClassName}`}>
                <GridItem {...item} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "unsecured" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 animate-fadeIn">
            {unsecuredLoans.map((item, index) => (
              <div key={index} className={`${itemClassName}`}>
                <GridItem {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TabbedLoanLayout