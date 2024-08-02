
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let rol = "user";
  return rol === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
