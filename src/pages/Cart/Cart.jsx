import {
  Typography,
  Button,
  CardMedia,
  CardActionArea,
  Card,
  CardContent,
} from "@mui/material";
import { styles } from "../../components/ProductCard/estilos";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProduct } = useContext(CartContext);

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={elemento.img}
                  height="500"
                  width="50px"
                />
                <CardContent sx={styles.textArea}>
                  <Typography variant="h2">Modelo:{elemento.title}</Typography>
                  <Typography variant="h2">
                    Cantidad:{elemento.quantity}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Button
              variant="contained"
              onClick={() => deleteProduct(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" color="warning" onClick={clearCart}>
          Limpiar carrito
        </Button>
        <Link to="/Checkout">
          <Button variant="contained" color="warning">
            Finalizar compra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
