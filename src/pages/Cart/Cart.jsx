import { Typography, Button } from "@mui/material";
import { styles } from "../../components/ProductCard/estilos";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div>
      <Typography sx={styles.carrito} variant="h2">
        Aqui va el Carrito
      </Typography>
      <Link to="/Checkout">
        <Button variant="contained" color="warning">
          Finalizar compra
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
