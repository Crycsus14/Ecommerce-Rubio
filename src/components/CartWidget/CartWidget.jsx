import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/Cart">
        <Badge badgeContent={cart.length} color="primary" showZero={true}>
          <ShoppingCartIcon sx={{ color: "white" }} />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
