import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import * as userApi from "../utils/api/userApi";
import * as carApi from "../utils/api/carApi";
import useAuthStore from "../store/authStore";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const navigate = useNavigate();
  const [authStep, setAuthStep] = useState("register");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpArray, setOtpArray] = useState(new Array(6).fill(""));

  const [name, setName] = useState("");
  const [carDetails, setCarDetails] = useState(null);
  const [overlayStep, setOverlayStep] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [search, setSearch] = useState("");
  const { checkSession } = useAuthStore();

  const [brands, setBrands] = useState([]);
  const filteredBrands = (brands || []).filter((brand) => {
    const nameToSearch = brand?.brandName || "";
    return nameToSearch.toLowerCase().includes((search || "").toLowerCase());
  });

  useEffect(() => {
    const fetchMasterCars = async () => {
      try {
        setLoading(true);
        const response = await carApi.getMasterCars();
        if (Array.isArray(response)) {
          setBrands(response);
        } else if (response && response.data) {
          setBrands(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch car data:", error);
        toast.error("Failed to fetch car brands.");
        setBrands([]);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchMasterCars();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setAuthStep("register");
      setOtp("");
      setOtpArray(new Array(6).fill(""));
      setPhone("");
      setName("");
      setCarDetails(null);
    }
  }, [isOpen]);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;

    try {
      const payload = {
        phone,
        name,
        carId: selectedBrand._id,
        model: selectedModel,
        gasType: selectedBrand.gasType[0],
      };

      const res = await userApi.sendOtp(payload);

      if (res.status === 200) {
        setAuthStep("otp");
        toast.success("OTP sent successfully!");
      } else {
        toast.error(res.data?.message || "Something Went Wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something Went Wrong");
    }
  };

  const handleSendLoginOtp = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;

    try {
      const res = await userApi.sentLoginOtp(phone);

      if (res.status === 200) {
        toast.success("Login OTP sent!");
        setAuthStep("otp");
      } else {
        toast.error(res.data?.message || "Failed to send OTP");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Error initiating login. Please try again.",
      );
    }
  };

  const handleFinalVerify = async (e) => {
    e.preventDefault();
    if (otp !== "123456") {
      toast.error("Invalid OTP. Hint: Use 123456");
      return;
    }

    try {
      let res;

      if (name) {
        res = await userApi.verifyOtp(phone, otp);
      } else {
        res = await userApi.verifyLoginOtp(phone, otp);
      }

      if (res.status === 200 && res.data?.user) {
        toast.success("Verification successful!");
        onClose();
        if (!name) await checkSession();
        window.location.replace("/orders");
      } else {
        toast.error(res.data?.message || "Verification failed");
      }
    } catch (error) {
      console.error("Auth Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Verification failed on server. Please try again.",
      );
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otpArray];
    newOtp[index] = element.value;
    setOtpArray(newOtp);
    setOtp(newOtp.join(""));
    if (element.value !== "" && element.nextElementSibling) {
      element.nextElementSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otpArray[index] &&
      e.target.previousElementSibling
    ) {
      e.target.previousElementSibling.focus();
    }
  };

  const handleSelectGas = (gas) => {
    setCarDetails({
      brand: selectedBrand.brandName,
      model: selectedModel,
      gas,
      logo: selectedBrand.logo,
    });
    setOverlayStep(null);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 sm:p-10 relative overflow-y-auto max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>

              {loading && (
                <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b4aa12]"></div>
                </div>
              )}

              {authStep === "register" && (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <h2 className="font-bold sizelogin">Register</h2>
                  <p className="text-gray-600">
                    Enter your details to create an account.
                  </p>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#b4aa12]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#b4aa12]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Car Details
                    </label>
                    <div
                      onClick={() => setOverlayStep("brand")}
                      className={`w-full border rounded-xl px-3 py-2.5 cursor-pointer ${carDetails ? "border-[#b4aa12] bg-white border-1" : "border-gray-300 bg-gray-50"}`}
                    >
                      {carDetails
                        ? `${carDetails.brand} ${carDetails.model} (${carDetails.gas})`
                        : "Select Car Brand & Model"}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!carDetails || !name || phone.length < 10}
                    className={`w-full font-semibold py-3 rounded-xl transition cursor-pointer ${carDetails && name && phone.length >= 10 ? "bg-[#b4aa12] text-white hover:bg-[#8e860e]" : "bg-gray-200 text-gray-400"}`}
                  >
                    Continue
                  </button>
                  <p className="mt-2 text-gray-600 logintext">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthStep("login")}
                      className="text-[#b4aa12] font-medium cursor-pointer"
                    >
                      Login
                    </button>
                  </p>
                </form>
              )}

              {authStep === "login" && (
                <div className="space-y-4">
                  <h2 className="font-bold sizelogin">Login</h2>
                  <p className="text-gray-500">
                    Welcome back! Enter your phone to login.
                  </p>
                  <form onSubmit={handleSendLoginOtp} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#b4aa12]"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={phone.length < 10}
                      className={`w-full font-semibold py-3 rounded-xl transition cursor-pointer ${phone.length >= 10 ? "bg-[#b4aa12] text-white hover:bg-[#8e860e]" : "bg-gray-200 text-gray-400"}`}
                    >
                      Send OTP
                    </button>
                  </form>
                  <p className="logintext text-gray-600">
                    New here?{" "}
                    <button
                      type="button"
                      onClick={() => setAuthStep("register")}
                      className="text-[#b4aa12] font-medium cursor-pointer"
                    >
                      Create Account
                    </button>
                  </p>
                </div>
              )}

              {authStep === "otp" && (
                <form onSubmit={handleFinalVerify} className="space-y-6">
                  <div className="">
                    <h2 className="font-bold sizelogin">Verify OTP</h2>

                    <p className="text-gray-500">Sent to {phone}</p>
                  </div>
                  <div className="flex justify-between gap-2">
                    {otpArray.map((data, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="w-full h-12 text-center text-xl font-bold border border-gray-300 rounded-xl focus:border-[#b4aa12] focus:ring-2 focus:ring-[#b4aa12] outline-none"
                        value={data}
                        onChange={(e) => handleOtpChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={otp.length < 6}
                    className={`w-full font-semibold py-3 rounded-xl transition cursor-pointer ${otp.length === 6 ? "bg-[#b4aa12] text-white hover:bg-[#8e860e]" : "bg-gray-200 text-gray-400"}`}
                  >
                    Verify & Continue
                  </button>
                </form>
              )}
            </motion.div>

            <AnimatePresence>
              {overlayStep && (
                <motion.div
                  className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOverlayStep(null)}
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative max-h-[85vh] overflow-y-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {overlayStep === "brand" && (
                      <div className="space-y-4">
                        <button
                          onClick={() => setOverlayStep(false)}
                          className="absolute top-6 right-6 text-gray-400 hover:text-black"
                        >
                          <X size={24} />
                        </button>
                        <h2 className="font-bold sizeloginsub">
                          {" "}
                          Select Brand
                        </h2>
                        <input
                          type="text"
                          placeholder="Search brands..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#b4aa12]"
                        />
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {filteredBrands.map((brand) => (
                            <div
                              key={brand._id}
                              onClick={() => {
                                setSelectedBrand(brand);
                                setOverlayStep("model");
                              }}
                              className="cursor-pointer group flex flex-col items-center border-gray-300 border rounded-xl p-5 hover:bg-gray-100 transition-all"
                            >
                              {brand.logo && (
                                <img
                                  src={brand.logo}
                                  alt=""
                                  className="h-8 mb-2 group-hover:invert"
                                />
                              )}
                              <span className="text-[10px] font-black uppercase">
                                {brand.brandName}
                              </span>
                            </div>
                          ))}
                          {filteredBrands.length === 0 && (
                            <p className="col-span-full text-center text-gray-400 py-4">
                              No brands found.
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {overlayStep === "model" && selectedBrand && (
                      <div className="space-y-5">
                        <div className="flex items-center gap-2 mb-4">
                          <button
                            onClick={() => setOverlayStep("brand")}
                            className="text-gray-400"
                          >
                            ←
                          </button>
                          <h2 className="font-bold sizeloginsub">
                            {" "}
                            Select{" "}
                            <span className="text-[#b4aa12]">
                              {selectedBrand.brandName}
                            </span>{" "}
                            Model
                          </h2>{" "}
                        </div>
                        <input
                          type="text"
                          placeholder="Search Models..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#b4aa12]"
                        />

                        <div className="grid grid-cols-2 gap-4">
                          {selectedBrand.models?.map((model, idx) => (
                            <div
                              key={`${selectedBrand._id}-${model}-${idx}`}
                              onClick={() => {
                                setSelectedModel(model);
                                setOverlayStep("gas");
                              }}
                              className="cursor-pointer text-center border-gray-300 border rounded-xl p-3 hover:bg-gray-100 transition-colors"
                            >
                              {model}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {overlayStep === "gas" && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <button
                            onClick={() => setOverlayStep("model")}
                            className="text-gray-400"
                          >
                            ←
                          </button>
                          <h2 className="font-bold sizeloginsub">
                            {" "}
                            Select GasType
                          </h2>{" "}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedBrand.gasType.map((gas) => (
                            <div
                              key={gas}
                              onClick={() => handleSelectGas(gas)}
                              className="cursor-pointer text-center border-gray-300 border p-3 rounded-xl hover:bg-gray-100"
                            >
                              {gas}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
