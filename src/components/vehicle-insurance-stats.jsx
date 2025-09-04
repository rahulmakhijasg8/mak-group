import { Car } from "lucide-react"
import Link from "next/link"

// Option 1: Light Gradient Background (Recommended)
const VehicleInsuranceStats = () => {
  return (
    <div className="mt-[60px] md:mt-[100px] px-8 md:px-[60px] lg:px-[80px] pt-20 pb-10 bg-gradient-to-br from-[#1B4D3E] via-[#2D5A4F] to-[#4EBA64]">
      {/* Clean centered layout */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Lexend'] text-white mb-4">Vehicle Insurance</h2>
          <p className="text-white/90 font-['Lato'] text-lg">Analytics of FY 24-25</p>
        </div>

        {/* Single Stat - Large and Prominent */}
        <div className="bg-white/70 backdrop-blur-sm rounded-[40px] p-12 md:p-20 mb-12 border border-white/50 shadow-xl">
          <div className="flex justify-center mb-8">
            <div className="bg-[#4EBA64] rounded-full p-6 shadow-lg">
              <Car className="w-12 h-12 text-white" />
            </div>
          </div>

          <h3 className="text-7xl md:text-8xl font-bold font-['Lato'] text-[#221241] mb-6">850+</h3>
          <p className="text-2xl md:text-3xl font-semibold font-['Lato'] text-[#221241] mb-4">Vehicles Insured</p>
          <p className="text-[#000000D6] text-lg max-w-2xl font-['Lato'] mx-auto">Comprehensive protection for your vehicle</p>
        </div>

        {/* Simple CTA */}
        <div className="bg-white/80 backdrop-blur-sm rounded-[25px] p-8 border border-white/50 shadow-lg">
  <h4 className="text-xl font-bold text-[#221241] font-['Lato'] mb-4">Protect Your Vehicle Today</h4>
  <Link 
    href="#freequote"
    className="inline-block bg-[#4EBA64] font-['Lexend'] text-white px-8 py-3 rounded-full hover:bg-[#45A85A] transition-colors shadow-md"
  >
    Get Vehicle Insurance Quote
  </Link>
</div>
      </div>
    </div>
  )
}

// Option 2: Warm Neutral Background
const VehicleInsuranceStatsWarm = () => {
  return (
    <div className="px-8 md:px-20 pt-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Rest of component same as above */}
    </div>
  )
}

// Option 3: Cool Professional Background
const VehicleInsuranceStatsCool = () => {
  return (
    <div className="px-8 md:px-20 pt-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      {/* Rest of component same as above */}
    </div>
  )
}

// Option 4: Green Theme Matching Your Brand
const VehicleInsuranceStatsGreen = () => {
  return (
    <div className="px-8 md:px-20 pt-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Rest of component same as above */}
    </div>
  )
}

// Option 5: Subtle Pattern Background
const VehicleInsuranceStatsPattern = () => {
  return (
    <div className="px-8 md:px-20 pt-20 bg-gradient-to-br from-neutral-50 via-stone-50 to-gray-100 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30" 
           style={{
             backgroundImage: `radial-gradient(circle at 25px 25px, #4EBA64 2px, transparent 2px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      <div className="relative z-10">
        {/* Rest of component content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#221241] mb-4">Vehicle Insurance</h2>
            <p className="text-[#000000D6] text-lg">Analytics of FY 24-25</p>
          </div>

          {/* Single Stat - Large and Prominent */}
          <div className="bg-white/90 backdrop-blur-sm rounded-[40px] p-12 md:p-20 mb-12 border border-white/50 shadow-xl">
            <div className="flex justify-center mb-8">
              <div className="bg-[#4EBA64] rounded-full p-6 shadow-lg">
                <Car className="w-12 h-12 text-white" />
              </div>
            </div>

            <h3 className="text-7xl md:text-8xl font-bold text-[#221241] mb-6">850+</h3>
            <p className="text-2xl md:text-3xl font-semibold text-[#221241] mb-4">Vehicles Insured</p>
            <p className="text-[#000000D6] text-lg max-w-2xl mx-auto">Comprehensive protection for your vehicle</p>
          </div>

          {/* Simple CTA */}
          <div className="bg-white/90 backdrop-blur-sm rounded-[25px] p-8 border border-white/50 shadow-lg">
            <h4 className="text-xl font-bold text-[#221241] mb-4">Protect Your Vehicle Today</h4>
            <button className="bg-[#4EBA64] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#45A85A] transition-colors shadow-md">
              Get Vehicle Insurance Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleInsuranceStats