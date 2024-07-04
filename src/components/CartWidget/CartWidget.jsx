
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
const CartWidget = () => {
  return (
    <div>
      <Link to="/Cart" >
        <Badge badgeContent={0} color="primary" showZero={true}>
          <ShoppingCartIcon sx={{color:"white"}} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
