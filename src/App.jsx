import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useAuthStore from "./store/authStore";
import Home from "./views/home";
import Layout from "./components/Layout";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import About from "./views/about";
import Package from "./views/package";
import Checkout from "./views/checkout";
import Offering from "./views/offering";
import Contact from "./views/contact";
import Gallery from "./views/gallery";
import Orders from "./views/orders";
import Profile from "./views/profile";
import Cars from "./views/car";
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  const { checkSession, loading } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Processing your request...
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Package />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/our-offerings" element={<Offering />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cars" element={<Cars />} />
          </Route>
        </Route>

        <Route path="*" element={<h2>404 - Page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
