import React from "react";
import { ChevronRight, ClipboardList, UserCheck, Settings, Warehouse } from "lucide-react";

const TermsConditions = () => {
  return (
    <>
      {/* Title Bar Section */}
      <div className="pbmit-title-bar-wrapper ">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content">
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

      {/* Main Single Column Content */}
      <section className="section-lgb py-20 bg-white mb-pd">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 rounded-4xl p-8 md:p-16 border border-gray-100 shadow-sm">
            <div className="prose prose-blue max-w-none">
              
              <div className="mb-12 border-b border-gray-200 pb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Agreement</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  By using the Auto Wrench website and booking our services, you agree to the following terms and conditions.
                </p>
              </div>

              {/* Service Estimates */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
                   Service Estimates
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Online bookings provide a preliminary estimate. A final quote will be provided after a physical inspection of the vehicle at our shop in Kigamboni.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>We will not proceed with additional repairs exceeding the initial estimate without your verbal or written consent.</span>
                  </li>
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                 Customer Responsibilities
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Accuracy:</strong> You are responsible for providing correct vehicle details during the booking process.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Valuables:</strong> Customers are advised to remove all personal belongings from the vehicle. Auto Wrench is not responsible for the loss of personal items left inside vehicles.</span>
                  </li>
                </ul>
              </div>

              {/* Parts & Labor */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                   Parts and Labor
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>We use high-quality parts that meet or exceed manufacturer specifications.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Auto Wrench provides a limited warranty on labor (e.g., 14 days or 300km, whichever comes first). Warranty on parts is subject to the specific manufacturer’s terms.</span>
                  </li>
                </ul>
              </div>

              {/* Storage */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                 Vehicle Storage
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Vehicles must be picked up within 48 hours of service completion. Failure to do so may
                  result in a daily storage fee.
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