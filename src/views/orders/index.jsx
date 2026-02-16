import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import { Calendar, Clock, Car, Package, Check, Plus } from "lucide-react";
import { getorders } from "../../utils/api/orderApi";
import { getUserGarage } from "../../utils/api/carApi";
import toast, { Toaster } from "react-hot-toast";
import useOrderStore from "../../store/orderStore";
import { Loader2 } from "lucide-react";

const Orders = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreBooking, setIsPreBooking] = useState(false);
  const [isSwitchingCar, setIsSwitchingCar] = useState(false);
  const [selectedCar, setSelectedCar] = useState();
  const [orders, setOrders] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [garageData, setGarageData] = useState([]);
  const { primaryCar, setPrimaryCar } = useOrderStore();
  const [isGarageloading,setIsGarageLoading]=useState(false);
  const formatCurrency = (num) => {
    return Number(num).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setIsLoading(true);
        const data = await getorders();
        setOrders(data);
      } catch (error) {
        toast.error("Failed to load Order data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrder();
  }, []);

  useEffect(() => {
    fetchGarage();
  }, []);

  const fetchGarage = async () => {
    try {
      setIsGarageLoading(true);
      const data = await getUserGarage();
      setGarageData(data || []);
      const active = data?.find((c) => c.isPrimary) || data?.[0];
      setPrimaryCar(active || null);
    } catch (error) {
      toast.error("Failed to load garage data");
    } 
    finally {
      setIsGarageLoading(false);
    }
  };

  return (
    <div className="bg-gray-50/50 min-h-screen pb-20 mb-pd">
      <div className="container mx-auto px-4 pt-10 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              My Bookings
            </h2>
          </div>
          <button
            onClick={() => setIsPreBooking(true)}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-xs font-black uppercase hover:bg-gray-800 transition-all shadow-lg cursor-pointer"
          >
            <Plus size={16} />
            New Booking
          </button>
        </div>

        {isPreBooking && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => {
              setIsPreBooking(false);
              setIsSwitchingCar(false);
            }}
          >
            <div
              className="relative bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {isGarageloading && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-3xl z-10">
                  <Loader2 className="animate-spin text-[#b4aa12]" size={32} />
                </div>
              )}
              <h3 className="text-xl font-black mb-2 text-gray-900 sizelogin">
                Confirm Vehicle
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Select the vehicle for this service.
              </p>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                    Active Vehicle
                  </span>
                  {garageData?.length > 1 && (
                    <button
                      onClick={() => setIsSwitchingCar(!isSwitchingCar)}
                      className="text-[10px] font-black uppercase text-[#b4aa12] hover:underline cursor-pointer"
                    >
                      {isSwitchingCar ? "Cancel" : "Change"}
                    </button>
                  )}
                </div>

                {!isSwitchingCar ? (
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-[#b4aa12]" />
                    <span className="font-bold text-gray-900">
                      {primaryCar
                        ? `${primaryCar.car.brandName} ${primaryCar.model} (${primaryCar.gasType})`
                        : "No car added"}
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2 mt-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                    {garageData.map((car, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedCar(car?.car?._id);
                          setPrimaryCar(car);
                          setIsSwitchingCar(false);
                        }}
                        className={`flex justify-between items-center p-3 rounded-xl border cursor-pointer transition-all ${
                          car?.car?._id === selectedCar
                            ? "bg-white border-[#b4aa12]"
                            : "bg-white border-gray-100 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-xs font-bold">
                          {car.brandName} {car.model}
                        </span>
                        {car?.car?._id === selectedCar && (
                          <Check className="w-3 h-3 text-[#b4aa12]" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setIsPreBooking(false);
                    setIsSwitchingCar(false);
                  }}
                  className="w-1/2 py-3 rounded-xl border border-gray-100 text-xs font-bold uppercase tracking-widest text-gray-400 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => navigate("/packages")}
                  disabled={!primaryCar}
                  className={`w-1/2 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-white shadow-lg cursor-pointer ${
                    !primaryCar ? "bg-gray-200" : "bg-black hover:bg-gray-800"
                  }`}
                >
                  Confirm & Go
                </button>
              </div>
            </div>
          </div>
        )}

        {isloading && !isPreBooking ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-[#b4aa12]" size={40} />
          </div>
        ) : orders.length != 0 ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-2xl border border-gray-100 hover:border-[#b4aa12]/30 transition-all overflow-hidden"
              >
                <div className="p-4 sm:p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider sizepending ${
                            order.status === "Confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 sizes">
                        {order.plan.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-gray-400 font-bold uppercase mb-5 sizeTotal">
                        Total
                      </p>
                      <p className="font-black text-black flex items-center">
                        <span className="text-[15px] mr-0.5">TZS</span>
                        <span className="text-[20px]">
                          {formatCurrency(order.totalAmount)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                    <div className="bg-gray-50 p-3 rounded-xl flex flex-col justify-between min-h-[70px]">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider sizeDate">
                        Date
                      </p>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-[#b4aa12] mb-6" />
                        <p className="text-[13px] font-bold text-gray-800 leading-none sizel">
                          {new Date(order.serviceDate).toLocaleDateString(
                            "en-In",
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl flex flex-col justify-between min-h-[70px]">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider sizeDate">
                        Time
                      </p>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-[#b4aa12] mb-6" />
                        <p className="text-[13px] font-bold text-gray-800 leading-none sizel">
                          {order.serviceTimeSlot}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-xl flex flex-col justify-between min-h-[70px]">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider sizeDate">
                        Vehicle
                      </p>
                      <div className="flex items-center gap-2 mb-1 min-w-0">
                        <Car className="w-4 h-4 text-[#b4aa12] mb-6 shrink-0" />
                        <p className="text-[13px] font-bold text-gray-800 leading-none truncate sizel">
                          {order?.cars?.car?.brandName} {order?.cars?.model}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-3xl text-center border border-gray-100 ">
            <Package className="w-8 h-8 text-gray-200 mx-auto mb-3" />
            <p className="text-sm font-bold text-gray-900">No bookings yet</p>
            <p className="text-xs text-gray-500 mb-6">
              Your scheduled services will appear here.
            </p>
            <button
              onClick={() => setIsPreBooking(true)}
              className="bg-[#b4aa12] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              Start First Booking
            </button>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          setIsModalOpen(false);
          navigate("/orders");
        }}
      />
    </div>
  );
};

export default Orders;
