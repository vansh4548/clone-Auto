import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProtectedRoute = ({ allowedRoles }) => {
  const { session } = useAuthStore();

  if (!session?.authenticated) {
    return <Navigate to="/orders" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    return <Navigate to="/orders" replace />;
  }

  return <Outlet />;
};

export { ProtectedRoute };
