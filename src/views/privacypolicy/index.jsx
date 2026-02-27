import React from "react";
import { ChevronRight, FileText, ShieldCheck, Lock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="pbmit-title-bar-wrapper policy-bg">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content ">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold text-white">Privacy Policy</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span><a href="/" className="home text-[#b4aa12] hover:underline">Auto Wrench</a></span>
                  <span className="sep"><ChevronRight className="inline mx-2" size={18} /></span>
                  <span><span className="current-item">Privacy Policy</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-lgb py-20 bg-white mb-pd">
        <div className="container mx-auto px-4 max-w-5xl ">
          <div className="bg-gray-50 rounded-4xl p-8 md:p-16 border border-gray-100 shadow-sm m-sp">
            <div className="prose prose-blue max-w-none m-spp">
              
              <div className="mb-12 border-b border-gray-200 pb-8 md:text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Privacy & Data Commitment</h2>
                <p className="text-gray-600 text-lg">Effective Date: February 21, 2026</p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                At <strong>Auto Wrench</strong>, we value your privacy. This policy explains how we collect and use your
                information when you book a service through our website.
              </p>
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  Information We Collect
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Personal Details:</strong> Name, email address, and phone number.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Vehicle Information:</strong> Make, model, year, and license plate/VIN.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Booking Data:</strong> Service history, requested repairs, and appointment dates.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  How We Use Your Information
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>To process and confirm your service bookings.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>To provide updates on your vehicle’s repair status.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>To maintain a service history for your vehicle's long-term maintenance.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>To comply with Tanzanian regulatory requirements for automotive businesses.</span>
                  </li>
                </ul>
              </div>

              {/* Security */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  Data Security
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We implement industry-standard security measures to protect your data. We do not sell or
                  rent your personal information to third parties. We only share data with authorized service
                  partners (e.g., parts suppliers or diagnostic software providers) when necessary to
                  complete your repair.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;