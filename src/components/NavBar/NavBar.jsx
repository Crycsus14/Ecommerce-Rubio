import CartWidget from "../CartWidget/CartWidget";
import { GiCarKey } from "react-icons/gi";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <GiCarKey size={70}/>

      <ul className="listaNavBar">
        <li>Autos</li>
        <li>Camionetas</li>
        <li>Motos</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default NavBar;
