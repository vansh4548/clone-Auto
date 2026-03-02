import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, Quote, Car } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Modal from "../../components/Modal";
import useAuthStore from "../../store/authStore";

import "swiper/css";
import "swiper/css/navigation";
import "../../assets/css/process.css";
import "../../assets/css/counter.css";
import "../../assets/css/service.css";
import "../../assets/css/pricing.css";
import "../../assets/css/about.css";
import "../../assets/css/testimonials.css";

import AirConditioning from "../../assets/images/services/AirConditioning.webp";
import Brakeservices from "../../assets/images/services/Brakeservices.webp";
import EngineDiagnosticsRepairs from "../../assets/images/services/EngineDiagnostics.webp";
// import GeneralVehicleInspections from "../../assets/images/services/GeneralVehicleInspections.webp";
import oilchangelubrication from "../../assets/images/services/oilchangelubrication.webp";
import SuspensionSteeringRepairs from "../../assets/images/services/SuspensionSteeringRepairs.webp";
import TransmissionServices from "../../assets/images/services/TransmissionServices.webp";
import TyreServices from "../../assets/images/services/TyreServices.webp";
import BatteryTestingReplacement from "../../assets/images/services/BatteryTestingReplacement.webp";

import ExperiencedStaff from "../../assets/images/about/1.webp";
import QualityProducts from "../../assets/images/about/8.webp";
import ModernEquipment from "../../assets/images/about/2.webp";
import ArianaGreen from "../../assets/images/ariana-green.webp";
import AdelineWood from "../../assets/images/adeline-wood.webp";
import EvangelineLee from "../../assets/images/evangeline-lee.webp";
import TestimonialBg from "../../assets/images/testimonial-bg.webp";
import Hero from "../../assets/images/3.webp";
import HeroLight from "../../assets/images/4.webp";

import { getPackages } from "../../utils/api/packageApi";
import Skilled from "../../assets/images/ExpertMechanics.svg";
import Parts from "../../assets/images/BestQualityParts.svg";
import Experience from "../../assets/images/Experience.svg";

import women from "../../assets/images/testi/1.webp";
import men1 from "../../assets/images/testi/2.webp";
import men2 from "../../assets/images/testi/3.webp";
import men3 from "../../assets/images/testi/4.webp";
import men4 from "../../assets/images/testi/5.webp";

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const testimonialPrevRef = useRef(null);
  const testimonialNextRef = useRef(null);

  const { authenticated } = useAuthStore();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const data = await getPackages();
        setPackages(data);
      } catch (error) {
        console.error("Failed to load plans", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleBookingAction = () => {
    if (authenticated) {
      navigate("/orders");
    } else {
      setIsModalOpen(true);
    }
  };

  const slides = [
    {
      id: 1,
      number: "01",
      category: "Accessories",
      title: "Tyre Services",
      img: TyreServices,
      iconClass: "pbmit-karsfix-icon-repair",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 2,
      number: "02",
      category: "Maintenance",
      title: "Air Conditioning",
      img: AirConditioning,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 3,
      number: "03",
      category: "Maintenance",
      title: "Oil Change & Lubrication",
      img: oilchangelubrication,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 4,
      number: "04",
      category: "Maintenance",
      title: "Transmission Services",
      img: TransmissionServices,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 5,
      number: "05",
      category: "Maintenance",
      title: "Brake Services",
      img: Brakeservices,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 6,
      number: "06",
      category: "Maintenance",
      title: "Suspension & Steering Repairs",
      img: SuspensionSteeringRepairs,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 7,
      number: "05",
      category: "Maintenance",
      title: "Engine Diagnostics & Repairs",
      img: SuspensionSteeringRepairs,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    // {
    //   id: 8,
    //   number: "06",
    //   category: "Maintenance",
    //   title: "General Vehicle Inspections",
    //   img: GeneralVehicleInspections,
    //   iconClass: "pbmit-karsfix-icon-tyre",
    //   link: "service-details.html",
    //   catLink: "services.html",
    // },
  ];

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
      text: "Reliable, transparent, modern equipment, skilled mechanics and efficient. Auto Wrench is now my go-to garage for maintenance and repairs on Kibada Road.",
      img: men4,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-black section-xl heros hnew">
        <div className="lg:flex lg:px-18 px-2 md:flex-row items-center md:justify-between gap-x-15">
          <div className="md:w-1/2  md:text-left">
            <div className="pbmit-heading-subheading animation-style4">
              <h4 className="pbmit-subtitle">Auto Wrench</h4>
              <h2 className="pbmit-title pb-4 hero-title">
                Welcome to Auto Wrench Ltd – Your Trusted Garage in Kigamboni.
              </h2>
              <p className="pbmit-text-editor hero-des">
                At Auto Wrench Ltd, we keep your car running safely, smoothly,
                and reliably. From quick routine maintenance to full mechanical
                repairs, our expert team in Ungindoni, Kigamboni is here to
                provide professional, affordable, and honest auto care.
              </p>
            </div>

            <div className="flex md:justify-start gap-4">
              <button
                onClick={handleBookingAction}
                className="pbmit-btn inline-flex items-center cursor-pointer heroButton"
              >
                <span className="pbmit-button-content-wrapper flex items-center ">
                  <span className="pbmit-button-text">
                    {authenticated ? "Order Now" : "Book Car Service"}
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative group">
              <img
                src={Hero}
                alt="Hero"
                className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={HeroLight}
                alt="Hero Light"
                className="w-full h-auto rounded-lg shadow-lg absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why choose us */}
      <section className="section-xl about-sec-two mb-pd m-sp">
        <div className="lg:container mx-auto lg:px-4 px-2 pbmit-col-stretched-yes pbmit-col-left">
          <div className="flex gap-x-20 whychoose">
            <div className="w-full xl:w-1/2 relative">
              <div className="pbmit-col-stretched-left">
                <div className="ihbox-style-area">
                  <div className="pbmit-ihbox-style-3">
                    <div className="pbmit-ihbox-headingicon">
                      <div className="pbmit-ihbox-wrap">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon p-4">
                            <img src={Experience} alt="" />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            15 Years of <br /> Experience
                          </h2>
                        </div>
                      </div>

                      <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 29 30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                        </svg>
                      </div>

                      <div className="pbmit-sticky-corner pbmit-top-right-corner">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 29 30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <div className="about-two-content aboutnew ">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle">Why choose us?</h4>
                  <h2 className="pbmit-title">
                    The <span className="pbmit-global-color">story</span> behind
                    service workshop
                  </h2>
                  <div className="pbmit-heading-desc">
                    At <b>Auto Wrench</b>, we believe every vehicle deserves
                    expert care and attention. Whether you're experiencing
                    unusual vibrations, poor handling, brake issues, AC
                    problems, or warning lights on your dashboard - our team is
                    ready to diagnose and fix it with precision.
                  <br />
                   From routine
                    maintenance to advanced diagnostics, we combine modern
                    equipment with experienced hands to keep your vehicle
                    performing at its best on Tanzanian roads.
                  </div>
                </div>

                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <div className="pbmit-ihbox-style-4">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                            <img
                              src={Skilled}
                              className="pbmit-karsfix-icon h-10 w-10 pbmit-karsfix-icon-automobile"
                            />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            Skilled technicians
                          </h2>
                          <div className="pbmit-heading-desc">
                            Experts deliver precise and reliable service every time.

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-2 pt-4 md:pt-0">
                    <div className="pbmit-ihbox-style-4">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                            <img
                              src={Parts}
                              className="pbmit-karsfix-icon h-10 w-10 pbmit-karsfix-icon-automobile"
                            />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            Best quality parts
                          </h2>
                          <div className="pbmit-heading-desc">
                            Premium, trusted parts for lasting performance and safety.

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a className="pbmit-btn mt-5 inline-block" href="/about">
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
                          strokeWidth="2"
                        />
                        <path
                          d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                        />
                        <path
                          d="M22.34,1,1,22.34"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <span className="pbmit-button-text">Know More</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section-xl overflow-hidden mb-pd ">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 mb-10">
            <div className="w-full xl:w-1/2">
              <div className="pbmit-heading-subheading animation-style4 text-left aboutf">
                <h4 className="pbmit-subtitle"> About Us </h4>
                <h2 className="text-[28px] md:text-[32px] font-bold leading-tight aboutsize">
                  Top-quality craftsmanship with hands-on care tried and true.
                </h2>
              </div>
            </div>
            <div className="w-full xl:w-1/2">
              <p className="pbmit-text-editor text-[15px] leading-relaxed opacity-80 mb-4">
                <b>At Auto Wrench Ltd,</b> we are more than just an auto garage
                – we are your trusted car care partner in Ungindoni, Kigamboni.
                With a team of skilled mechanics and technicians, we specialize
                in keeping your vehicle safe, reliable, and performing at its
                best.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap pbmit-column-three gap-6">
            {/* Box 1 */}
            <article className="pbmit-static-box-style-1 w-full md:w-[calc(50%-12px)] lg:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper relative group overflow-hidden rounded-[30px]">
                  <img
                    src={ExperiencedStaff}
                    alt="Experienced Staff"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pbmit-title-wrapper absolute bottom-0 left-0 right-0 p-5 bg-white mx-auto w-fit rounded-t-[25px]">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title text-[18px] font-bold">
                        <a href="#" className="flex items-center gap-2">
                          <span className="pbmit-button-text">
                            {" "}
                            Experienced Staff{" "}
                          </span>
                          <i className="pbmit-base-icon-black-arrow-1 text-[12px]" />
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Box 2 */}
            <article className="pbmit-static-box-style-1 w-full md:w-[calc(50%-12px)] lg:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper relative group overflow-hidden rounded-[30px]">
                  <img
                    src={QualityProducts}
                    alt="Quality Products"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pbmit-title-wrapper absolute bottom-0 left-0 right-0 p-5 bg-white mx-auto w-fit rounded-t-[25px]">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title text-[18px] font-bold">
                        <a href="#" className="flex items-center gap-2">
                          <span className="pbmit-button-text">
                            {" "}
                            Quality Products{" "}
                          </span>
                          <i className="pbmit-base-icon-black-arrow-1 text-[12px]" />
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Box 3 */}
            <article className="pbmit-static-box-style-1 w-full md:w-full lg:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper relative group overflow-hidden rounded-[30px]">
                  <img
                    src={ModernEquipment}
                    alt="Modern Equipment"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pbmit-title-wrapper absolute bottom-0 left-0 right-0 p-5 bg-white mx-auto w-fit rounded-t-[25px]">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title text-[18px] font-bold">
                        <a href="#" className="flex items-center gap-2">
                          <span className="pbmit-button-text">
                            {" "}
                            Modern Equipment{" "}
                          </span>
                          <i className="pbmit-base-icon-black-arrow-1 text-[12px]" />
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

      {/* Our Services */}
      <section className="section-lg-1 max-w-full overflow-hidden mb-pd m-spt">
        <div className="lg:container px-2 pbmit-col-stretched-yes pbmit-col-right lg:px-4 mx-auto">
          {/* Heading Row */}
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-7/12">
              <div className="pbmit-heading-subheading animation-style2">
                <h4 className="pbmit-subtitle"> Our Services </h4>
                <h2 className="pbmit-title">
                  We offer a{" "}
                  <span className="pbmit-global-color">wide range</span> of{" "}
                  <br />
                  car services
                </h2>
              </div>
            </div>

            <div className="w-full md:w-5/12 text-right">
              <div className="service-two-swiper-arrow swiper-btn-custom gap-x-2.5 inline-flex flex-row-reverse border border-[#151313] rounded-4xl py-3 px-1 items-center">
                <button
                  ref={nextRef}
                  aria-label="Next"
                  className="swiper-button-next-custom cursor-pointer pr-3"
                >
                  <ChevronRight strokeWidth={1.5} className="text-[#151313]" />
                </button>

                <span className="w-px h-5 bg-gray-300" />

                <button
                  ref={prevRef}
                  aria-label="Prev"
                  className="swiper-button-prev-custom cursor-pointer pl-3"
                >
                  <ChevronLeft strokeWidth={1.5} className="text-[#151313]" />
                </button>
              </div>
            </div>
          </div>

          {/* Slider + stretched area */}
          <div className="pbmit-col-stretched-right mr-[-60px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={3.6}
              spaceBetween={40}
              breakpoints={{
                320: { slidesPerView: 1.05, spaceBetween: 16 },
                640: { slidesPerView: 1.6, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3.2, spaceBetween: 32 },
                1280: { slidesPerView: 3.6, spaceBetween: 40 },
              }}
            >
              {slides.map((s) => (
                <SwiperSlide key={s.id}>
                  <article className="pbmit-service-style-2">
                    <div className="pbminfotech-post-item">
                      <div className="pbminfotech-box-content">
                        <div className="pbmit-service-image-wrapper relative">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src={s.img}
                                className="w-full h-auto"
                                alt={s.title}
                              />
                            </div>
                          </div>

                          <div className="pbmit-service-btn-wrapper">
                            <a
                              className="pbmit-service-btn"
                              href={s.link}
                              title={s.title}
                            >
                              <span className="pbmit-button-icon">
                                <ChevronRight />
                              </span>
                            </a>
                          </div>

                          <a
                            className="pbmit-link"
                            href={s.link}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="pbmit-service-icon">
                          <i className={`pbmit-karsfix-icon ${s.iconClass}`} />
                        </div>

                        <div className="pbmit-content-box">
                          <div className="pbminfotech-box-number">
                            {s.number}
                          </div>
                          <div className="pbmit-serv-cat">
                            <a href={s.catLink} rel="tag">
                              {s.category}
                            </a>
                          </div>
                          <h3 className="pbmit-service-title">
                            <a href={s.link}>{s.title}</a>
                          </h3>
                          <div className="pbmit-service-description">
                            <p>
                              Some routine car care tasks can be done at home,
                              while others may require a trained technician or
                              mechanic
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Button aligned properly */}
          {/* CTA text + centered button */}
          <div className="lg:container mx-auto px-4 mt-10 text-center">
            <div className="flex justify-center">
              <button
                onClick={handleBookingAction}
                className="pbmit-btn inline-flex items-center cursor-pointer"
              >
                <span className="pbmit-button-content-wrapper flex items-center">
                  <span className="pbmit-button-text">
                    {authenticated ? "Order Now" : "Book Car Service"}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-two-bg section-xl mb-pd m-sp">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="lg:flex gap-15">
            <div className="w-full xl:w-1/3">
              <div className="pbmit-heading-subheading animation-style2">
                <h4 className="pbmit-subtitle"> Pricing Table </h4>
                <h2 className="pbmit-title">
                  The best <span className="pbmit-global-color">pricing</span>{" "}
                  to help you!
                </h2>
                <div className="pbmit-heading-desc">
                  We use the most reliable methods to locate issues and correct
                  them to ensure your car is in top condition also check the
                  lights and system
                </div>
              </div>
            </div>

            <div className="w-full xl:w-2/3">
              <div className="pbminfotech-ele-ptable-style-3">
                <div className="pbmit-ptable-cols flex flex-wrap">
                  {loading ? (
                    <div className="w-full text-center py-10 font-bold uppercase tracking-widest">
                      Loading Services...
                    </div>
                  ) : (
                    packages.map((item) => (
                      <div
                        key={item._id || item.name}
                        className={`pbmit-ptable-col w-full md:w-1/2 lg:w-1/3 ${
                          item.name === "Standard Service Package"
                            ? "pbmit-pricing-table-featured-col"
                            : ""
                        }`}
                      >
                        <div className="pbmit-pricing-table-box">
                          <div className="pbmit-feature-wrap">
                            {item.name === "Standard Service Package" && (
                              <div className="pbmit-ptablebox-featured-w" />
                            )}
                          </div>

                          <div className="pbmit-pricing-table-inner">
                            <div className="pbmit-head-wrap">
                              <h3 className="pbminfotech-ptable-heading">
                                {item.name}
                              </h3>
                              <div className="pbmit-price-wrapper">
                                <div className="pbmit-ptable-price-w">
                                  <div className="pbminfotech-ptable-symbol">
                                    TZS
                                  </div>
                                  <div className="pbminfotech-ptable-price">
                                    {Number(item.price).toLocaleString()}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pbmit-ptable-lines">
                              {item.features &&
                                item.features.map((feature, index) => (
                                  <div
                                    key={index}
                                    className="pbmit-ptable-line"
                                  >
                                    <Check
                                      className="ti-check inline mr-2"
                                      size={22}
                                      strokeWidth={1.5}
                                    />
                                    {feature}
                                  </div>
                                ))}
                              {item.note && (
                                <div className="pbmit-ptable-recommendation mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                  {item.note}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="pbmit-price-btn">
                            <a href="#" className="pbmit-button">
                              <span className="pbmit-button-text">
                                Book Now
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => {
          setIsModalOpen(false);
          navigate("/packages");
        }}
      />
    </>
  );
};

export default Home;
