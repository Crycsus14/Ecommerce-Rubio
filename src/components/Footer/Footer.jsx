import { Typography } from "@mui/material";
import "./Footer.css";
import { GiCarKey } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="/"><GiCarKey size={70} color="#F25C05" /></Link>
      <Typography gutterBottom variant="h5" component="div" align="center">
        © Todos los derechos reservados
      </Typography>
    </div>
  );
};

export default Footer;
