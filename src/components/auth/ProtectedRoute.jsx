import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProtectedRoute = () => {
  const { session } = useAuthStore();

  if (session?.authenticated === false) {
    return <Navigate to="/orders" replace />;
  }

  return <Outlet />;
};

export { ProtectedRoute };
