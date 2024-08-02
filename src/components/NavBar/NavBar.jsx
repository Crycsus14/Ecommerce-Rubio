import CartWidget from "../CartWidget/CartWidget";
import { GiCarKey } from "react-icons/gi";
import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import { styles } from "../ProductCard/estilos";

export const NavBar = () => {

  let rol = "user";
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link to="/" style={styles.tituloLlave}>
            <GiCarKey color="#F25C05" size={70} /> Program-autos{" "}
          </Link>

          <ul className="listaNavBar">
            <Link
              to="/category/Autos"
              style={{ color: "white", textDecoration: "none" }}
            >
              Autos
            </Link>
            <Link
              to="/category/Camionetas"
              style={{ color: "white", textDecoration: "none" }}
            >
              Camionetas
            </Link>
            <Link
              to="/category/Motos"
              style={{ color: "white", textDecoration: "none" }}
            >
              Motos
            </Link>
          </ul>

          {rol === "admin" && (
            <Link
              Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link> 
          )}

          <CartWidget />
        </div>
      </>
    </div>
  );
};

export default NavBar;
