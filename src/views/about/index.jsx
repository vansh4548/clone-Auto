import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import ExperiencedStaff from "../../assets/images/about/1.webp";
import QualityProducts from "../../assets/images/about/8.webp";
import ModernEquipment from "../../assets/images/about/2.webp";
// import ArianaGreen from "../../assets/images/about/2.webp";
import AdelineWood from "../../assets/images/about/3.webp";
import EvangelineLee from "../../assets/images/about/6.webp";
import TestimonialBg from "../../assets/images/testimonial-bg.webp";
import women from "../../assets/images/testi/1.webp";
import men1 from "../../assets/images/testi/2.webp";
import men2 from "../../assets/images/testi/3.webp";
import men3 from "../../assets/images/testi/4.webp";
import men4 from "../../assets/images/testi/5.webp";
const About = () => {
  const testimonialPrevRef = useRef(null);
  const testimonialNextRef = useRef(null);

 const testimonials = [
    {
      id: 1,
      name: "Amina K.",
      role: "Satisfied Client",
      text: "I had brake issues and was worried about safety. The team at Auto Wrench explained everything clearly and fixed it the same day. Very professional and trustworthy service!",
      img: women,
    },
    {
      id: 2,
      name: "David M.",
      role: "Customer",
      text: "Excellent service and honest pricing. They diagnosed my engine problem quickly and saved me from unnecessary repairs. Highly recommended workshop in Dar es-Salaam.",
      img: men1,
    },
    {
      id: 3,
      name: "Hassan R.",
      role: "Manager",
      text: "The technicians really know what they’re doing. My car feels smoother and more powerful after the service. Great experience overall.",
      img: men2,
    },
    {
      id: 4,
      name: "Joseph T.",
      role: "Manager",
      text: "Clean workshop, modern equipment, and skilled mechanics. They completed the job on time and kept me updated throughout the process.",
      img: men3,
    },
    {
      id: 5,
      name: "Brian L.",
      role: "Manager",
      text: "Reliable, transparent, and efficient. Auto Wrench is now my go-to garage for maintenance and repairs on Kibada Road.”",
      img: men4,
    },
  ];
  return (
    <>
      {/* Breadcrumb */}
      <div className="pbmit-title-bar-wrapper about-bg">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold">
                    About Us
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
                      About Us
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="section-xl mb-pd m-sp">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-1/2">
              <div className="pbmit-heading-subheading animation-style4">
                <h4 className="pbmit-subtitle"> About Us </h4>
                <h2 className="pbmit-title">
                  About Auto Wrench
                </h2>
              </div>
            </div>
            <div className="w-full xl:w-1/2">
              <p className="pbmit-text-editor">
                <b>Auto Wrench</b> is a professional automotive workshop based on Kibada Road, Dar es-Salaam, dedicated to delivering dependable repairs and quality maintenance. With skilled technicians and modern tools, we ensure every vehicle receives expert care and attention for a safer driving experience.

              </p>




              {/* <p className="pbmit-text-editor">
                Our mission is to provide top-quality automotive services with
                honesty, transparency, and a customer-first approach. Whether
                it’s a quick oil change, a complex engine repair, or a complete
                vehicle inspection, we handle every job with precision and care.
              </p>
              <p className="pbmit-text-editor">
                We pride ourselves on combining modern diagnostic tools with
                hands-on expertise to deliver solutions you can rely on. At Auto
                Wrench Ltd, your car is not just another job – it’s part of your
                everyday life, and we’re here to keep it running smoothly.
              </p> */}
            </div>
          </div>
          <div className="lg:flex pbmit-column-three gap-x-6">
            <article className="pbmit-static-box-style-1 w-full md:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper">
                  <img src={ExperiencedStaff} alt="" />
                  <div className="pbmit-title-wrapper">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title">
                        <a href="#">
                          <span className="pbmit-button-text">
                            {" "}
                            Experienced Staff{" "}
                          </span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-static-box-style-1 w-full md:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper">
                  <img src={QualityProducts} alt="" />
                  <div className="pbmit-title-wrapper">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title">
                        <a href="#">
                          <span className="pbmit-button-text">
                            {" "}
                            Quality Products{" "}
                          </span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-static-box-style-1 w-full md:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper">
                  <img src={ModernEquipment} alt="" />
                  <div className="pbmit-title-wrapper">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title">
                        <a href="#">
                          <span className="pbmit-button-text">
                            {" "}
                            Modern Equipment{" "}
                          </span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section >
        <div className="pbmit-entry-content container mx-auto lg:mb-35 mb-20 mb-pd">
          <div className="pbmit-service_content px-2">
            <div className="pbmit-heading animation-style2">
              <h3 className="pbmit-title mb-3 text-2xl font-semibold">
                Committed to Keeping You Moving
              </h3>
            </div>
            <p className="pbmit-firstletter mb-4">
              Founded with a vision to raise the standard of automotive service in Dar es-Salaam, Auto Wrench focuses on precision, transparency, and long-term reliability.{" "}
              <strong>
                <u>Our workshop</u>
              </strong>{" "}
            is equipped with advanced diagnostic technology and supported by experienced mechanics who handle everything from routine servicing and brake repairs to complex engine and suspension work.
             We prioritize honest communication, fair pricing, and consistent quality - building lasting relationships with drivers who trust us to keep their vehicles performing at their best.
            </p>
            <p className="mb-6">
             
            </p>
          </div>
          <div className="grid grid-cols-2 lg:gap-x-10 gap-x-5 mt-15 px-2">
            <img src={AdelineWood} className="w-full rounded-2xl" />
            <img src={EvangelineLee} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-xl ihbox-three-bg pbmit-bg-color-light mb-pd">
        <div className="lg:container mx-auto lg:px-2 px-2 m-spp">
          <div className="pbmit-heading-subheading text-center animation-style2">
            <h4 className="pbmit-subtitle"> How it Works </h4>
            <h2 className="pbmit-title">
              Get Professional Car Service in <br /> 4 simple{" "}
              <span className="pbmit-global-color">steps</span>
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4 lg:px-4">
            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Book Appointment</h2>
                      <div className="pbmit-heading-desc">
                        Book your service through our website or via call at your convenience.
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-events" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">01</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Choose Your Service</h2>
                      <div className="pbmit-heading-desc">
                        Choose the service you need from our wide range of repair and maintenance solutions.
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-report" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">02</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Expert Service
</h2>
                      <div className="pbmit-heading-desc">
                       Our skilled technicians inspect, diagnose, and service your vehicle with precision and care.
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-repair" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">03</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Drive with Confidence</h2>
                      <div className="pbmit-heading-desc">
                       After a final quality check, your vehicle is ready for a safe and smooth drive.
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-car-key" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">04</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
            <section className="section-lg mb-pd m-sp">
              <div className="lg:container px-2 mx-auto lg:px-4">
                <div className="testimonial-three-area">
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="tween-effect-style">
                      <div className="pbmit-tween-effect-style-1">
                        <div className="pbmit-tween-effect">
                          <img src={TestimonialBg} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 lg:w-7/12">
                      <div className="pbmit-heading-subheading animation-style2">
                        <h4 className="pbmit-subtitle"> CLIENT TESTIMONIALS </h4>
                        <h2 className="pbmit-title">
                          <span className="pbmit-global-color">Trusted</span> by
                         Drivers  Across <br /> Dar es-Salaam.
      
                        </h2>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-5/12 text-right">
                      <div className="testimonial-swiper-arrow swiper-btn-custom gap-x-2.5 inline-flex flex-row-reverse border border-[#151313] rounded-4xl py-3 px-1 items-center">
                        <button
                          ref={testimonialPrevRef}
                          className="swiper-button-next-custom cursor-pointer pr-3"
                        >
                          <ChevronRight
                            strokeWidth={1.5}
                            className="text-[#151313]"
                          />
                        </button>
                        <span className="w-px h-5 bg-gray-300" />
                        <button
                          ref={testimonialNextRef}
                          className="swiper-button-prev-custom cursor-pointer pl-3"
                        >
                          <ChevronLeft strokeWidth={1.5} className="text-[#151313]" />
                        </button>
                      </div>
                    </div>
                  </div>
      
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    navigation={{
                      prevEl: testimonialPrevRef.current,
                      nextEl: testimonialNextRef.current,
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = testimonialPrevRef.current;
                      swiper.params.navigation.nextEl = testimonialNextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                    slidesPerView={2}
                    spaceBetween={45}
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 16 },
                      640: { slidesPerView: 1.2, spaceBetween: 20 },
                      768: { slidesPerView: 1.5, spaceBetween: 24 },
                      1024: { slidesPerView: 2, spaceBetween: 32 },
                    }}
                  >
                    {testimonials.map((t) => (
                      <SwiperSlide key={t.id}>
                        <article className="pbmit-testimonial-style-2">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-desc">
                              <Quote size={50} className="text-[#b4aa12]" />
                              <blockquote className="pbminfotech-testimonial-text">
                                <p>{t.text}</p>
                              </blockquote>
                            </div>
                            <div className="pbmit-auther-content">
                              <h3 className="pbminfotech-box-title">{t.name}</h3>
                            
                            </div>
                            <div className="pbmit-featured-img-wrapper">
                              <div className="pbmit-featured-wrapper">
                                <img
                                  src={t.img}
                                  className="w-full h-auto"
                                  alt={t.name}
                                />
                              </div>
                            </div>
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </section>

      {/* Cta */}
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

export default About;
