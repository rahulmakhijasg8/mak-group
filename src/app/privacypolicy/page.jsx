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
            title="Privacy Policy"
            subtitle="Your privacy is our priority. Learn how we protect and handle your personal information."
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
              MAK Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of the
              personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard
              your information when you visit our website, interact with us, or use our services.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Personal Information:</strong> Name, email address, phone number, address, and other details
                    you provide when contacting us or filling out forms.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Financial Information:</strong> Details you share when discussing investment, insurance,
                    loan, or other financial services (only collected when necessary and with your consent).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Technical Information:</strong> IP address, browser type, device information, and pages you
                    visit on our website.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Provide and manage our services.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Respond to your inquiries and requests.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Send important updates, offers, and service-related information.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Improve our website and customer experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Comply with legal and regulatory requirements.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                3. Sharing Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share your information only with:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Trusted partners or service providers who assist us in delivering our services.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Regulatory authorities if required by law.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                4. Data Security
              </h2>
              <p className="text-gray-700">
                We take reasonable measures to protect your personal information from unauthorized access, alteration,
                or disclosure. However, no method of data transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                5. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Access and review your personal data.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Request corrections or updates to your information.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4EBA64] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Request deletion of your personal data, subject to legal requirements.</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">To exercise these rights, please contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                6. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to external sites. We are not responsible for the privacy practices of
                those websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#221241] mb-4 border-b-2 border-[#4EBA64] pb-2">
                7. Updates to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the
                updated date.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer description="If you have any questions regarding the Privacy Policy, please contact us:" />
    </div>
  )
}
