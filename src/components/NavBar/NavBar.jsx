import CartWidget from "../CartWidget/CartWidget";
import { GiCarKey } from "react-icons/gi";
import "./NavBar.css";

const NavBar = ({ children }) => {
  console.log(children);

  return (
    <div>
      <>
        <div className="navbarContainer">
          <GiCarKey size={70} />

          <ul className="listaNavBar">
            <li>Autos</li>
            <li>Camionetas</li>
            <li>Motos</li>
          </ul>

          <CartWidget />
        </div>
      </>
      {children}
    </div>
  );
};

export default NavBar;
