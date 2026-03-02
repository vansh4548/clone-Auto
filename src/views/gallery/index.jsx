import React from "react";
import { ChevronRight, Check, Phone } from "lucide-react";
import "../../assets/css/pricing.css";
import "../../assets/css/cta.css";

import ExperiencedStaff from "../../assets/images/experienced-staff.webp";
import QualityProducts from "../../assets/images/quality-staff.webp";
import BatteryReplacement from "../../assets/images/battery-replacement.webp";


import Skilled from "../../assets/images/ExpertMechanics.svg";
import Parts from "../../assets/images/BestQualityParts.svg";
import Experience from "../../assets/images/Experience.svg";

const Gallery = () => {
  return (
    <>

      <div className="pbmit-title-bar-wrapper workshop-bg">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content ">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold">
                    Our Workshop
                  </h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner ">
                  <span>
                    <a
                      title=""
                      href="#"
                      className="home text-blue-600 hover:underline"
                    >
                      <span>Auto Wrench</span>
                    </a>
                  </span>
                  <span className="sep">
                    <ChevronRight
                      className="pbmit-base-icon-angle-right inline mx-2"
                      size={18}
                    />
                  </span>
                  <span>
                    <span className="post-root post post-post current-item">
                      Our Workshop
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="section mb-pd ">
        <div className="row pt-4 gallerypy lg:flex gap-x-8 lg:container mx-auto">
          {/* Expert Mechanics */}
          <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6 ">
            <div className="pbmit-ihbox-style-1">
              <div className="pbmit-ihbox-headingicon items-start space-x-4">
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600 p-4">
                    <img src={Skilled} alt="Expert Mechanics" />
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <h2 className="pbmit-element-title text-lg font-semibold mb-2">
                    Expert Mechanics
                  </h2>
                  <div className="pbmit-heading-desc text-gray-600 text-sm">
                    Our workshop is staffed with skilled professionals who diagnose and repair vehicles with precision and reliability.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Genuine Parts */}
          <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
            <div className="pbmit-ihbox-style-1">
              <div className="pbmit-ihbox-headingicon items-start space-x-4">
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600 p-4">
                   <img src={Parts} alt="Genuine Parts" />
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <h2 className="pbmit-element-title text-lg font-semibold mb-2">
                    Genuine Parts
                  </h2>
                  <div className="pbmit-heading-desc text-gray-600 text-sm">
                   We use approved, high-quality spare parts to ensure durability, safety, and optimal vehicle performance.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Equipment */}
          <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
            <div className="pbmit-ihbox-style-1">
              <div className="pbmit-ihbox-headingicon items-start space-x-4">
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600 p-4">
                    <img src={Experience} alt="Advanced Equipment" />
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <h2 className="pbmit-element-title text-lg font-semibold mb-2">
                    Advanced Equipment
                  </h2>
                  <div className="pbmit-heading-desc text-gray-600 text-sm">
                    Our garage is equipped with modern tools and diagnostic systems to handle servicing and complex repairs efficiently.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-xl mb-pd m-spt pb-12">
        <div className="lg:container mx-auto px-4">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold pbmit-title">
              Our <span className="pbmit-global-color text-blue-600">Garage</span>
            </h2>
            <p className="text-gray-500 mt-2">Take a look inside our workspace</p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">

            <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={ExperiencedStaff} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Garage main view" 
              />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={QualityProducts} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Quality products" 
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={BatteryReplacement} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Battery replacement" 
              />
            </div>
            <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={ExperiencedStaff} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Garage main view" 
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={QualityProducts} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Quality products" 
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={BatteryReplacement} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Battery replacement" 
              />
            </div>

            {/* Optional Wide Bottom Image (Spans all 3 columns) */}
            {/* <div className="md:col-span-3 rounded-xl overflow-hidden shadow-lg group h-[250px] hidden md:block">
              <img 
                src={ExperiencedStaff} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt="Workshop panoramic" 
              />
            </div> */}
          </div>
        </div>
      </section>
      <section className="lg:mb-40 mb-20 mb-pd ">
        <div className="container mx-auto px-0 xl:px-3">
          <div className="appointment-two-bg bg-blue-600 p-6 rounded-lg">
            <div className="row flex flex-wrap -mx-4 items-center">
              <div className="col-md-12 col-xl-8 w-full xl:w-2/3 px-4 mb-6 xl:mb-0">
                <div className="pbmit-heading-subheading white-text mb-3 animation-style4">
                  <h4 className="pbmit-subtitle text-white text-lg mb-2">
                    BOOK APPOINTMENT
                  </h4>
                  <h2 className="pbmit-title text-white text-3xl font-bold">
                   Book your service today and 
                   <br />
                   drive with confidence!
                  </h2>
                </div>
                <a
                  className="pbmit-btn pbmit-btn-hover-white inline-flex items-center mt-4 px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-blue-600"
                  href="contact-us.html"
                >
                  <span className="pbmit-button-content-wrapper flex items-center">
                    <span className="pbmit-button-icon mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.76"
                        height="22.76"
                        viewBox="0 0 22.76 22.76"
                      >
                        <title>black-arrow</title>
                        <path
                          d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                        <path
                          d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                        <path
                          d="M22.34,1,1,22.34"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                      </svg>
                    </span>
                    <span className="pbmit-button-text">Book Appointment</span>
                  </span>
                </a>
              </div>
              <div className="col-md-12 col-xl-4 w-full xl:w-1/3 px-4">
                <div className="ihbox-style-area e-transform">
                  <div className="pbmit-ihbox-style-7 bg-white p-4 rounded-lg shadow-md">
                    <div className="pbmit-ihbox-box flex items-center">
                      <div className="pbmit-icon-wrapper mr-4">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-3xl text-blue-600">
                            <i className="pbmit-karsfix-icon pbmit-karsfix-icon-telephone" />
                          </div>
                        </div>
                      </div>
                      <h2 className="pbmit-element-title text-lg font-semibold">
                        <a
                          href="tel:++255 761 586 464"
                          className="flex items-center text-gray-800 hover:text-blue-600"
                        >
                          <span className="pbmit-button-text mr-2">
                            +255 761 586 464
                          </span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                    <div className="pbmit-content-wrap mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Gallery;