"use client"

import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="animate-pulse">
        <Image 
          src="/Mak Group Logo 1 (1).svg" 
          alt="Company Logo" 
          width={150} 
          height={150}
          priority
        />
      </div>
    </div>
  )
}