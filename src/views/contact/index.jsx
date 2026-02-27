import { useState } from "react";
import {
  ChevronRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { registerSubmisson } from "../../utils/api/submissonApi";
import toast from "react-hot-toast";
import Email from "../../assets/images/Email.svg";
import Phone from "../../assets/images/Call.svg";
import Location from "../../assets/images/Location.svg";
import Work from "../../assets/images/WorkingDays.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const res = await registerSubmisson(formData);

      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent successfully!");
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message.");
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: "mail",
      title: "Mail Us 24/7",
      detail: "info@autowrench.co.tz",
      icon: Email,
      iconClass: "text-blue-600",
    },
    {
      id: "location",
      title: "Our Location",
      detail: "Kibada Road, 15118 Dar es-Salaam, Tanzania",
      icon: Location,
      iconClass: "text-blue-600",
    },
    {
      id: "call",
      title: "Call Us 24/7",
      detail: (
        <>
          Phone: +255 761 586 464 <br />
          Phone: +255 767 888 566
        </>
      ),
      icon: Phone,
      iconClass: "text-green-500",
      hasWhatsapp: true,
    },
    {
      id: "hours",
      title: "Working Days",
      detail: (
        <>
          Mon - Fri: 9.00am - 8.00pm
          <br />
          Saturday: 10.00am - 6.00pm
          <br />
          Sunday: 10.00am - 4.00pm
        </>
      ),
      icon: Work,
      iconClass: "text-blue-600",
    },
  ];

  return (
    <>
      <div className="pbmit-title-bar-wrapper contact-bg">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold">
                    Contact Us
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
                      Contact Us
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-lg">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="row pbminfotech-gap-40px flex flex-wrap -mx-4">
            {contactInfo.map((item) => (
              <article
                key={item.id}
                className="pbmit-miconheading-style-10 w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
              >
                <div className="pbmit-ihbox-style-10">
                  <div className="pbmit-ihbox-headingicon">
                    <div className="pbmit-ihbox-wrap items-center md:items-start">
                      <div className="pbmit-ihbox-contents flex-1">
                        <h2 className="pbmit-element-title text-xl font-semibold mb-2">
                          {item.title}
                        </h2>
                        <div className="pbmit-heading-desc text-gray-600">
                          {item.detail}
                        </div>
                      </div>
                      <div className="pbmit-ihbox-icon mt-4 md:mt-0">
                        <div
                          className={`pbmit-ihbox-icon-wrapper ${item.iconClass}`}
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lgb">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="row g-0 flex flex-wrap -mx-4">
            <div className="col-md-12 col-xl-5 w-full xl:w-5/12 relative px-4">
              <div className="contact-us-left-area">
                <div className="pbmit-heading-subheading animation-style4">
                  <h4 className="pbmit-subtitle text-blue-600 mb-2">
                    Get in touch
                  </h4>
                  <h2 className="pbmit-title text-3xl font-bold mb-4">
                    Happy to answer all your questions
                  </h2>
                  <div className="pbmit-heading-desc text-gray-600">
                    We carefully screen all of our technicians, so you can rest
                    assured that your vehicle would receive the absolute highest
                    quality of service providing.
                  </div>
                </div>
                <div className="tween-style mt-6">
                  <div className="pbmit-tween-effect-style-1">
                    <div className="pbmit-tween-effect">
                      <img
                        src="images/bg/about-img-02.webp"
                        className="w-full h-auto rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-xl-7 w-full xl:w-7/12 px-4 mt-8 xl:mt-0">
              <div className="contact-form-rightbox pbmit-bg-color-light rounded-4xl shadow-md border border-gray-100 p-10 bg-gray-50/30 min-h-[500px] flex flex-col justify-center">
                {!isSubmitted ? (
                  <>
                    <div className="pbmit-heading animation-style2 mb-4 mt-2">
                      <h3 className="pbmit-title text-2xl font-semibold">
                        Send a message to staff
                      </h3>
                    </div>
                    <p className="py-3 text-gray-700">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form className="contact-form pb-5" onSubmit={handleSubmit}>
                      <div className="row flex flex-wrap -mx-2">
                        <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control w-full border border-gray-300 rounded-4xl p-4 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control w-full border border-gray-300 rounded-4xl p-4 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control w-full border border-gray-300 rounded-4xl p-4 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Your Phone"
                            required
                          />
                        </div>
                        <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-control w-full border border-gray-300 rounded-4xl p-4 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="col-md-12 w-full px-2 mb-4">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="form-control w-full border border-gray-300 rounded-4xl p-4 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Message"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="pbmit-btn mt-4 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50"
                      >
                        {isSubmitting && (
                          <Loader2 className="animate-spin" size={20} />
                        )}
                        <span className="pbmit-button-text">
                          {isSubmitting ? "Sending..." : "Submit Message"}
                        </span>
                      </button>
                    </form>
                  </>
                ) : (
                  /* Thank You State */
                  <div className="text-center py-10 animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="bg-green-100 p-4 rounded-full">
                        <CheckCircle2 className="text-green-600" size={60} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      Your message has been received. Our team will get back to
                      you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="iframe-section section-lgb pbmit-extend-animation w-full mt-10">
        <div className="w-full p-0">
          <iframe
            className="w-[95%] rounded-3xl mx-auto h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.11654261625!2d39.3144883!3d-6.8871146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c490000000001%3A0x0!2zNsKwNTMnMTMuNiJTIDM5wrAxOCc1Mi4yIkU!5e0!3m2!1sen!2stz!4v1700000000000"
            title="Auto Wrench Garage Location"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
