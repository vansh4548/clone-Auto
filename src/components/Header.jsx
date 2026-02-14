import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";
import Logo from "../assets/images/logo.png";
import useAuthStore from "../store/authStore";
import Modal from "../components/Modal";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { checkSession, session, loading, logout } = useAuthStore();

  console.log(session);

  const handleLogout = async () => {
    await logout();
    toast.success("Successfully logged out");
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => {
          toast.success("Welcome back!");
          navigate("/orders");
        }}
      />

      <header
        className={`sticky top-0 bg-black border-b border-[#1d1d1d] z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="section mx-auto px-2 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div>
              <Link to="/">
                <img
                  src={Logo}
                  className="lg:max-w-[120px] max-w-[100px]"
                  alt="Logo"
                />
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8 font-bold text-lg menu-bar text-white">
              {!session?.authenticated ? (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/our-offerings">Our Services</Link>
                  <Link to="/gallery">Our Workshop</Link>
                  <Link to="/contact">Contact</Link>
                </>
              ) : (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/our-offerings">Our Services</Link>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/profile">My Profile</Link>
                  <Link to="/cars">My Cars</Link>
                </>
              )}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              {!session?.authenticated ? (
                <div className="pbmit-button-box-second">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="pbmit-btn pbmit-btn-global"
                  >
                    <span className="pbmit-button-content-wrapper">
                      <span className="pbmit-button-text">Get Started</span>
                    </span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <button className="flex items-center space-x-3 text-white border border-[#1d1d1d] px-4 py-2 rounded-lg bg-[#0a0a0a] group-hover:bg-[#1d1d1d] group-hover:border-[#333] transition-all duration-200">
                      <div className="w-8 h-8 bg-[#b4aa12] rounded-full flex items-center justify-center text-black font-bold uppercase transition-transform group-hover:scale-105">
                        {session.user.name?.charAt(0) || "U"}
                      </div>
                      <span className="font-semibold">{session.user.name}</span>
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180 text-gray-400"
                      />
                    </button>
                    <div className="absolute right-0 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible pt-2 z-50 transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden p-1">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg font-bold flex items-center justify-between transition-colors group/item"
                        >
                          Logout
                          <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div
              className="fixed inset-0 bg-black bg-opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            <div className="relative bg-white w-4/5 max-w-sm h-full shadow-xl p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-600 text-xl"
              >
                ✕
              </button>

              <nav className="mt-12 flex flex-col space-y-4 font-bold">
                {!session?.authenticated ? (
                  <>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/our-offerings"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Services
                    </Link>
                    <Link
                      to="/gallery"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Workshop
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>

                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="block bg-[#b4aa12] text-white text-center px-4 py-2 rounded-lg font-semibold mt-4"
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                    <Link
                      to="/our-offerings"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Our Services
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link to="/cars" onClick={() => setIsMobileMenuOpen(false)}>
                      My Cars
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="block bg-[#b4aa12] text-white text-center px-4 py-2 rounded-lg font-semibold mt-4"
                    >
                      Logout
                    </button>
                  </>
                )}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
