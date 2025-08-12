"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AwardsAchievements({ awards = [], className = "" }) {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Don't render if no awards provided
  if (!awards || awards.length === 0) {
    return null
  }

  return (
    <section className={`w-full py-12 md:py-20 px-4 md:px-14 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {awards.map((award, index) => (
            <motion.div key={`award-${index}`} variants={itemVariants} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-[#4EBA64]/20 flex flex-col">
                {/* Award Image - Fixed height */}
                <div className="relative overflow-hidden bg-gray-50 w-full h-[450px]">
                  <Image
                    src={award.src || "/placeholder.svg"}
                    alt={award.title}
                    height={1000}
                    width={1000}
                    unoptimized={true}
                    className={`w-full h-full p-4 group-hover:scale-105 transition-transform duration-300 object-contain md:${
                      index === 2 ? 'object-contain' : 'object-cover'
                    }`}
                    style={{ pointerEvents: 'auto' }}
                    onContextMenu={(e) => e.stopPropagation()}
                  />
                  {/* Overlay on hover - doesn't interfere with right-clicks */}
                  <div className="absolute inset-0 bg-[#221241]/0 group-hover:bg-[#221241]/10 transition-all duration-300 pointer-events-none" />
                </div>

                {/* Award Title */}
                <div className="p-4 flex-shrink-0">
                  <h3 className="font-['Lato'] text-[#221241] font-medium text-[14px] md:text-[16px] text-center leading-tight">
                    {award.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4EBA64]/10 rounded-full">
            <div className="w-2 h-2 bg-[#4EBA64] rounded-full animate-pulse" />
            <span className="font-['Lato'] text-[#221241] font-medium text-[14px] md:text-[16px]">
              {awards.length} Awards & Recognitions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}