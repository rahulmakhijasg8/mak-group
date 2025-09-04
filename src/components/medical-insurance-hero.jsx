import { Award, Heart, Shield, Users, Banknote, CheckCircle, Link } from "lucide-react"

// Medical Insurance - Multi Stats Hero Banner
const MedicalInsuranceHero = () => {
  return (
    <div className="relative mt-[60px] md:mt-[100px] max-w-7xl px-4 md:px-[60px] lg:px-[80px] py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#221241] via-[#2A1B4F] to-[#4EBA64] opacity-95"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-['Lexend'] text-white mb-4">Medical Insurance Performance</h1>
          <p className="text-white/90 text-lg font-['Lato'] md:text-xl">Analytics of FY 24-25</p>
        </div>

        {/* Main Stat Highlight - Claims Settlement Ratio */}
        <div className="text-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-[30px] p-8 md:p-12 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-white mr-4" />
              <Award className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">94%</h2>
            <p className="text-white/90 font-['Lato'] text-xl">Claims Settlement Ratio</p>
          </div>
        </div>

        {/* Secondary Stats with proper icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Claims Approved */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">150</h3>
            <p className="text-white/80 font-['Lato'] text-sm">Claims Approved</p>
          </div>

          {/* Amount Paid in Claims */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Banknote className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">₹1.5Cr+</h3>
            <p className="text-white/80 font-['Lato'] text-sm">Amount Paid in Claims</p>
          </div>

          {/* Lives Insured */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">900+</h3>
            <p className="text-white/80 font-['Lato'] text-sm">Lives Insured</p>
          </div>

          {/* Satisfied Customers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">2500+</h3>
            <p className="text-white/80 font-['Lato'] text-sm">Satisfied Customers</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-white/90 font-['Lato'] text-lg mb-6">Ready to join thousands of satisfied customers?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#free-quote">
            <button className="border-2 border-white font-['Lexend'] text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#221241] transition-colors">
              Get a Free Quote Now
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalInsuranceHero
