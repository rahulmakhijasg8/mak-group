import { Building } from "lucide-react"

// Commercial Insurance - Professional Card Design
const CommercialInsuranceStats = () => {
  return (
    <div className="px-8 md:px-20 py-20 bg-gradient-to-b from-slate-300 to-slate-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Lexend'] font-bold text-[#221241] mb-4">Commercial Insurance</h2>
          <p className="text-[#000000D6] font-['Lato'] text-lg">Analytics of FY 24-25</p>
        </div>

        {/* Professional stat display */}
        <div className="bg-white rounded-[30px] shadow-xl border border-gray-100 overflow-hidden">
          {/* Header section with gradient */}
          <div className="bg-gradient-to-r from-[#221241] to-[#4EBA64] p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4">
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-white text-xl font-['Lato'] font-semibold">Properties Protected</h3>
          </div>

          {/* Main stat section */}
          <div className="p-12 text-center">
            <h4 className="text-6xl md:text-7xl font-bold text-[#221241] mb-4">100+</h4>
            <p className="text-2xl font-semibold font-['Lato'] text-[#221241] mb-6">Buildings / Factories Insured</p>
            <div className="w-24 h-1 bg-[#4EBA64] mx-auto mb-8"></div>
            <p className="text-[#000000D6] font-['Lato'] text-lg">Safeguarding commercial properties across industries</p>
          </div>

          {/* Bottom CTA section */}
          <div className="bg-[#EBEBEB] p-8 text-center">
            <h5 className="text-lg font-bold font-['Lato'] text-[#221241] mb-4">Secure Your Business Assets</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommercialInsuranceStats
