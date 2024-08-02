import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    let rol = "admin";
  return  rol === "admin" ? <Outlet /> : <Typography variant="h2"> Sin acceso </Typography>
};

export default ProtectedRoutes;
