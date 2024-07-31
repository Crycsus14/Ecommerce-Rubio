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
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro quieres eliminar el articulo?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#DB2E1D",
      denyButtonColor: "#1A80D9",
      confirmButtonText: "Borrar",
      denyButtonText: `No borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado correctamente",
          icon: "success",
          confirmButtonColor: "#1A80D9",
        });
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire({
          title: "No se ha eliminado",
          icon: "info",
          confirmButtonColor: "#1A80D9",
        });
      }
    });
  };

  const handleClearCart = (setCart) => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#DB2E1D",
      denyButtonColor: "#1A80D9",
      confirmButtonText: "Limpiar",
      denyButtonText: `No limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Limpiado correctamente",
          icon: "success",
          confirmButtonColor: "#1A80D9",
        });
        clearCart(setCart([]));
      } else if (result.isDenied) {
        Swal.fire({
          title: "No has limpiado el carrito",
          icon: "info",
          confirmButtonColor: "#1A80D9",
        });
      }
    });
  };

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
                  <Typography variant="h3">
                    Cantidad:{elemento.quantity}
                  </Typography>
                  <Typography variant="h4">
                    Precio Unitario: ${elemento.price} USD
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Button
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h2">El total a pagar es: ${total} USD</Typography>
        {cart.length > 0 && (
          <Button
            variant="outlined"
            color="warning"
            onClick={() => handleClearCart(clearCart)}
          >
            Limpiar carrito
          </Button>
        )}
        {cart.length > 0 && (
          <Link to="/Checkout">
            <Button variant="contained" color="warning">
              Finalizar compra
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
