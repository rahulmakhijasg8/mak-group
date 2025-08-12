import StackedHeading from "@/components/stackedheading"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* Header Section */}
<div className="bg-gradient-to-r from-[#221241] to-[#2a1850] text-white py-16">
        <div className="mx-auto px-6">
          <StackedHeading
            title="Terms & Conditions"
            subtitle="Please read these terms carefully before using our website and services. Your agreement ensures a smooth experience for everyone."
            titleColor="text-[#FFFFFF]"
            subtitleColor="text-[#FFFFFF]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:mx-6 px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 border-l-4 border-[#4EBA64] p-6 mb-8 rounded-r-lg">
            <p className="text-gray-700 mb-0">
              Welcome to the website of MAK Group ("we," "our," or "us"). By accessing or using our website and
              services, you agree to comply with and be bound by the following Terms & Conditions. Please read them
              carefully before using our site.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                By using this website, you confirm that you have read, understood, and agree to be bound by these Terms
                & Conditions and our Privacy Policy. If you do not agree, please do not use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                2. Services Offered
              </h2>
              <p className="text-gray-700">
                MAK Group provides financial solutions, including insurance, investments, loans, cars, and real estate
                services. All services are subject to their specific eligibility criteria, terms, and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                3. Use of Website
              </h2>
              <p className="text-gray-700 mb-4">You agree to use our website for lawful purposes only and not to:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Engage in any fraudulent or illegal activities.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Attempt to gain unauthorized access to our systems.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Copy, reproduce, or distribute our website content without prior permission.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                4. Information Accuracy
              </h2>
              <p className="text-gray-700">
                While we make every effort to ensure the accuracy of information provided on our website, we do not
                guarantee that all information is error-free, complete, or up to date. We are not liable for any errors,
                omissions, or outdated content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                5. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the content, accuracy,
                or practices of these external sites. Accessing them is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                MAK Group will not be liable for any direct, indirect, incidental, or consequential damages resulting
                from your use of our website or services, including but not limited to loss of data, profits, or
                business opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                7. Intellectual Property
              </h2>
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, and images, is the property of MAK Group
                or its licensors. You may not use, reproduce, or distribute any content without our prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                8. Changes to Terms
              </h2>
              <p className="text-gray-700">
                We may update these Terms & Conditions at any time without prior notice. Changes will be posted on this
                page with the updated date. Continued use of the website means you accept the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                9. Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms & Conditions are governed by and construed in accordance with the laws of India. Any
                disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer description="If you have any questions regarding these Terms & Conditions, please contact us:" />
    </div>
  )
}
