import React from "react";
import { ChevronRight } from "lucide-react";

const TermsConditions = () => {
  return (
    <>
       <div className="pbmit-title-bar-wrapper terms-bg ">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content ">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold text-white">Terms & Conditions</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span><a href="/" className="home text-[#b4aa12] hover:underline">Auto Wrench</a></span>
                  <span className="sep"><ChevronRight className="inline mx-2" size={18} /></span>
                  <span><span className="current-item">Terms & Conditions</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-lgb py-20 bg-white mb-pd">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 rounded-4xl p-8 md:p-16 border border-gray-100 shadow-sm m-sp">
            <div className="prose prose-blue max-w-none m-spp">
              
              <div className="mb-12 border-b border-gray-200 pb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Agreement</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  By accessing the <strong>Auto Wrench Ltd</strong> website or using our automotive services, you agree to the following Terms & Conditions. Please read them carefully.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  1. Scope of Services
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Auto Wrench Ltd provides vehicle diagnostics, maintenance, mechanical repairs, electrical repairs, and related automotive services at our workshop in Dar es-Salaam, Tanzania.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>All services are subject to inspection, parts availability, and technical feasibility.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  2. Service Estimates & Authorization
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Estimates provided online, via phone, or in person are preliminary. A final quotation will be issued after a physical inspection of the vehicle.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>No additional repairs exceeding the approved estimate will be carried out without your verbal or written authorization (via phone, WhatsApp, SMS, or email).</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  3. Diagnostic Fees
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Certain complex issues may require diagnostic testing. Diagnostic charges apply even if the customer chooses not to proceed with the recommended repair.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  4. Customer Responsibilities
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Information:</strong> You agree to provide accurate vehicle information and disclose any known issues.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Valuables:</strong> Remove all personal belongings. Auto Wrench Ltd is not responsible for loss, theft, or damage of items left inside the vehicle.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  5. Parts & Replacement Components
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We use quality parts that meet industry standards. Warranty coverage on parts is subject to manufacturer or supplier terms.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  6. Labor Warranty
                </h4>
                <p className="text-gray-700 text-lg mb-4">
                  We may provide a limited warranty on labor (e.g., 14 days or 300 km, whichever comes first). This does not cover:
                </p>
                <ul className="space-y-2 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2"><span className="text-[#b4aa12] font-bold">•</span><span>Misuse, negligence, or accidents after repair.</span></li>
                  <li className="flex gap-2"><span className="text-[#b4aa12] font-bold">•</span><span>Repairs performed by third parties after our service.</span></li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  7. Vehicle Storage & Collection
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Vehicles must be collected within 48 hours of notification. Storage fees may apply after this period.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  8. Payment Terms
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Full payment is due upon completion. Vehicles may not be released until outstanding invoices are cleared.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  9. Test Drives
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We may conduct reasonable road tests for diagnostic and quality assurance purposes.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  10. Limitation of Liability
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our liability is limited to the value of the service provided. We are not liable for indirect or consequential damages.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  11. Website Use
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Users must not submit false bookings or attempt unauthorized access to our systems.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  12. Amendments
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Auto Wrench Ltd reserves the right to update these Terms & Conditions at any time.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  13. Governing Law
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  These Terms & Conditions are governed by the laws of the United Republic of Tanzania.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;