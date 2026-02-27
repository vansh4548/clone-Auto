import React from "react";
import { ChevronRight, CalendarX, Banknote, Scale } from "lucide-react";

const RefundPolicy = () => {
  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold text-white">Refund & Cancellation</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span><a href="/" className="home text-[#b4aa12] hover:underline">Auto Wrench</a></span>
                  <span className="sep"></span>
                  <span><span className="current-item">Refund Policy</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-lgb py-20 bg-white mb-pd">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 rounded-4xl p-8 md:p-16 border border-gray-100 shadow-sm ">
            <div className="prose prose-blue max-w-none">
              
              <div className="mb-12 border-b border-gray-200 pb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 aboutSize">Refund & Cancellation Policy</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We aim to resolve all disputes through fair inspection and mutual agreement. Below are our terms regarding cancellations and service refunds.
                </p>
              </div>

              {/* Cancellations */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                   Cancellations
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Notice Period:</strong> We request at least 24 hours' notice for cancellations or rescheduling.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>No-Show:</strong> Repeated "no-shows" without notice may require a non-refundable deposit for future bookings.</span>
                  </li>
                </ul>
              </div>

              {/* Refunds */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                 Refunds on Services
                </h4>
                <ul className="space-y-4 text-gray-700 text-lg ml-2">
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Labor:</strong> Labor charges are generally non-refundable once the service has been performed. If you are unsatisfied with the repair, we will re-inspect the vehicle and rectify any errors caused by our workmanship at no additional cost.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#b4aa12] font-bold">•</span>
                    <span><strong>Parts:</strong> Parts that have been installed and used are non-refundable unless they are found to be defective. Returns for uninstalled "special order" parts may be subject to a restocking fee from our suppliers.</span>
                  </li>
                </ul>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 sizeloginsub">
                  Dispute Resolution
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  If you feel a refund is warranted due to a service failure, please contact our management
                  team within 7 days of vehicle collection. We aim to resolve all disputes through fair
                  inspection and mutual agreement.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;