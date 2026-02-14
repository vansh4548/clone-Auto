import React, { useState, useEffect } from "react";
import { Search, Plus, Car, Fuel, CheckCircle2, X, Loader2, ChevronLeft, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import * as carApi from "../../utils/api/carApi";

export default function Cars() {
  const [garageData, setGarageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [masterCarList, setMasterCarList] = useState([]);
  const [overlayStep, setOverlayStep] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isPrimary, setIsPrimary] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    fetchGarage();
  }, []);

  const fetchGarage = async () => {
    try {
      setLoading(true);
      const data = await carApi.getUserGarage();
      setGarageData(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to load garage data");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddForm = async () => {
    setShowForm(true);
    setOverlayStep("brand");
    try {
      const data = await carApi.getMasterCars();
      setMasterCarList(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Could not fetch car list");
    }
  };

  const handleSelectGas = async (gas) => {
    try {
      setFormSubmitting(true);
      const payload = {
        carId: selectedBrand._id,
        model: selectedModel,
        gasType: gas,
        isPrimary,
      };

      await carApi.addCar(payload);
      toast.success(`${selectedBrand.brandName} added!`);
      fetchGarage();
      handleCloseForm();
    } catch (err) {
      toast.error("Failed to add car");
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setOverlayStep(null);
    setSelectedBrand(null);
    setSelectedModel(null);
    setSearch("");
    setIsPrimary(false);
  };

  const handleDelete = async (carId) => {
    if (!window.confirm(`Are you sure you want to remove the Car from your garage?`)) return;
    try {
      setLoading(true);
      await carApi.deleteUserCar(carId);
      toast.success(`Car removed successfully`);
      fetchGarage();
    } catch (error) {
      toast.error("Failed to delete vehicle");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBrands = (masterCarList || []).filter((brand) =>
    brand?.brandName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20 mb-pd">
      <Toaster position="top-center" />

         <div className="container mx-auto px-4 pt-10 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              My Garage
            </h2>
          </div>
          <button
            onClick={handleOpenAddForm}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-xs font-black uppercase hover:bg-gray-800 transition-all shadow-lg cursor-pointer"
          >
            <Plus size={16} /> Add Vehicle
          </button>
        </div>

        {loading && !showForm ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#b4aa12]" size={40} /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {garageData.map((car,index) => (
              <div key={car._id} className={`group relative p-8 rounded-2xl border transition-all bg-white border-gray-200`}>
              
                <button onClick={() => handleDelete(index)} className="absolute bottom-6 right-6 p-2 text-gray-300 hover:text-red-500 transition-colors cursor-pointer">
                  <Trash2 size={18} />
                </button>
                
                {car.isPrimary && <div className="absolute top-6 right-6 bg-[#b4aa12] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">Primary</div>}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-4">
                    {car.logo && <img src={car.logo} alt="" className="w-full h-full object-contain" />}
                  </div>
                  <h2 className="sizecar font-black text-gray-900 ">{car.brandName} {car.model}</h2>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Fuel size={12} />
                    <span className="text-[10px] font-bold ">{car.gasType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>
        {showForm && (
          <motion.div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleCloseForm}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={handleCloseForm} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl">✕</button>

              {overlayStep === "brand" && (
                <div className="space-y-4 mt-2">
                  <h2 className="font-bold sizeloginsub">Select Brand</h2>
                  <input
                    type="text" placeholder="Search brands..." value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#b4aa12]"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {filteredBrands.map((brand) => (
                      <div key={brand._id} onClick={() => { setSelectedBrand(brand); setOverlayStep("model"); }}
                        className="cursor-pointer group flex flex-col items-center border border-gray-300 rounded-xl p-5 hover:bg-gray-100 transition-all"
                      >
                        {brand.logo && <img src={brand.logo} alt="" className="h-8 mb-2 group-hover:invert" />}
                        <span className="text-[10px] font-black  text-center">{brand.brandName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {overlayStep === "model" && selectedBrand && (
                <div className="space-y-5 mt-2">
                  
                  <div className="flex items-center gap-2">
                    <button onClick={() => setOverlayStep("brand")} className="text-gray-400">←</button>
                    <h2 className="font-bold sizeloginsub">Select <span className="text-[#b4aa12]">{selectedBrand.brandName}</span> Model</h2>
                  </div>
                  <input
                    type="text" placeholder="Search Models..." value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-1 focus:ring-[#b4aa12]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {selectedBrand.models?.map((model, idx) => (
                      <div key={idx} onClick={() => { setSelectedModel(model); setOverlayStep("gas"); }}
                        className="cursor-pointer text-center border border-gray-300 rounded-xl p-3 hover:bg-gray-100 transition-colors"
                      >
                        {model}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {overlayStep === "gas" && (
                <div className="space-y-6 mt-2">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setOverlayStep("model")} className="text-gray-400">←</button>
                    <h2 className="font-bold sizeloginsub">Select GasType</h2>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      {selectedBrand.gasType.map((gas) => (
                        <div key={gas} onClick={() => handleSelectGas(gas)}
                          className="cursor-pointer text-center border border-gray-300 rounded-xl p-3 hover:bg-[#b4aa12] hover:text-white transition-all"
                        >
                          {gas}
                        </div>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl cursor-pointer mt-4">
                    <input type="checkbox" checked={isPrimary} onChange={(e) => setIsPrimary(e.target.checked)} className="w-4 h-4 accent-[#b4aa12]" />
                    <span className="text-[10px] font-black text-gray-600 uppercase">Set as Primary Vehicle</span>
                  </label>
                  
                  {formSubmitting && (
                    <div className="flex justify-center"><Loader2 className="animate-spin text-[#b4aa12]" /></div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}