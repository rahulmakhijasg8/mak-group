const CompaniesSection = () => {
  const companies = ["Mak Motors Pvt. Ltd.", "Mak Miles Pvt. Ltd.", "Mak Insurance Services", "Mak Mints"]

  return (
    <section className="w-full max-w-7xl mt-[60px] md:mt-[100px] py-[32px] py-[60px] md:py-16 px-4 md:px-[60px] lg:px-[80px] bg-gradient-to-br from-[#FAFAFA] to-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Lexend'] text-[#221241] font-normal text-[28px] md:text-[40px] mb-4">
            Our Group Companies
          </h2>
          <p className="font-['Lato'] text-[#000000D6] font-normal text-[16px] md:text-[18px] max-w-3xl mx-auto">
            MAK GROUP operates through multiple specialized subsidiaries, each dedicated to providing excellence in
            their respective domains.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 shadow-sm transition-all duration-300 border border-[#EBEBEB] hover:border-[#4EBA64] hover:border-opacity-50 group text-center"
            >
              {/* Company Initial Circle */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4EBA64] to-[#67C399] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-['Lexend'] font-bold text-xl">
                    {company.charAt(4)} {/* Gets 'M' from 'Mak Motors', etc. */}
                  </span>
                </div>
              </div>

              {/* Company Name */}
              <h3 className="font-['Lexend'] text-[#221241] font-medium text-[16px] md:text-[18px] group-hover:text-[#4EBA64] transition-colors duration-300">
                {company}
              </h3>
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-[15px] p-6 border border-[#EBEBEB] max-w-4xl mx-auto">
            <p className="font-['Lato'] text-[#000000D6] font-normal text-[14px] md:text-[16px] leading-relaxed">
              <span className="font-medium text-[#221241]">Compliance Notice:</span> All subsidiaries operate under the
              MAK GROUP umbrella and are committed to maintaining the highest standards of regulatory compliance and
              customer service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesSection
