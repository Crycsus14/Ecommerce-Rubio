import { Typography } from "@mui/material";
import "./Footer.css";
import { GiCarKey } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footerContainer">
      <GiCarKey size={70} />
      <Typography gutterBottom variant="h5" component="div" align="center">
        © Todos los derechos reservados
      </Typography>
    </div>
  );
};

export default Footer;
