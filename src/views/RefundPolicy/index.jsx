import React from "react";
import { ChevronRight, CalendarX, Banknote, Scale } from "lucide-react";

const RefundPolicy = () => {
  return (
    <>
      <div className="pbmit-title-bar-wrapper refund-bg">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content ">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold text-white">Refund & Cancellation</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span><a href="/" className="home text-[#b4aa12] hover:underline">Auto Wrench</a></span>
                  <span className="sep"><ChevronRight className="inline mx-2" size={18} /></span>
                  <span><span className="current-item">Refund Policy</span></span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4 aboutSize">Refund & Cancellation Policy</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At <strong>Auto Wrench Ltd</strong>, we are committed to providing professional and transparent service. This policy outlines how cancellations, refunds, and service concerns are handled.
                </p>
              </div>


              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                   1. Appointment Cancellations & Rescheduling
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Customers are requested to provide at least 24 hours’ notice for cancellations or rescheduling.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Cancellations made less than 24 hours before the appointment may affect priority booking availability.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Repeated “no-shows” without prior notice may require a non-refundable deposit for future bookings.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  2. Deposits
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Deposits paid for special-order parts or major repairs are generally non-refundable, as these items are procured specifically for your vehicle.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>In certain cases, a partial refund may be issued depending on supplier return policies.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  3. Refunds – Labor Charges
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Labor charges are non-refundable once the service has been completed.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>If you are dissatisfied, you must notify us within 7 days of collection. We will re-inspect the vehicle and correct issues related to our workmanship at no additional labor cost.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  4. Refunds – Parts
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Installed and used parts are non-refundable unless confirmed defective under manufacturer warranty.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span>Special-order parts are generally non-returnable unless defective.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  5. Service Disputes
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  If you believe a service failure has occurred, contact us immediately to bring the vehicle back for inspection. We aim to resolve all concerns through fair inspection and mutual agreement in accordance with Tanzanian consumer standards.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  6. Vehicle Collection & Abandonment
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Vehicles must be collected within 48 hours after completion notification. Storage charges may apply thereafter in accordance with applicable Tanzanian regulations.
                </p>
              </div>

              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  7. Limitation
                </h4>
                <p className="text-gray-700 text-lg mb-4">Refunds will not be issued for:</p>
                <ul className="space-y-2 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2"><span className="text-[#b4aa12] font-bold">•</span><span>Damage caused by misuse or neglect after collection.</span></li>
                  <li className="flex gap-2"><span className="text-[#b4aa12] font-bold">•</span><span>Repairs declined by the customer or pre-existing unrelated issues.</span></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;