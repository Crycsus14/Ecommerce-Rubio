import { TextField, Button, Typography } from "@mui/material";
import "../../index.css";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", telefono: "", provincia: "" },
    onSubmit: async (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };
      console.log(data);
      let ordersCollection = collection(db, "orders");

      let productCollection = collection(db, "products");
      cart.forEach((elemento) => {
        let refDoc = doc(productCollection, elemento.id);
        updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      });
      addDoc(ordersCollection, order)
        .then((res) => {
          setOrderId(res.id);
          Swal.fire({
            title: `Enviado correctamente tu orden es: ${res.id}`,
            icon: "success",
            confirmButtonColor: "#1A80D9",
          });
        })
        .catch()
        .finally(() => {
          clearCart();
          navigate("/");
        });
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo obligatorio"),
      email: Yup.string()
        .email("Formato incorrecto, debe contener @")
        .required("Campo obligatorio"),
      telefono: Yup.number()
        .required("Campo obligatorio")
        .positive("Invalido")
        .integer(),
      provincia: Yup.string().required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });
  console.log(errors);

  return (
    <div>
      {orderId ? (
        <Typography variant="h2" color={"#1A80D9"}>
          El numero de orden es: {orderId}{" "}
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            color="warning"
            type="text"
            label="nombre"
            name="nombre"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
          <TextField
            variant="outlined"
            color="warning"
            type="text"
            label="email"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            variant="outlined"
            color="warning"
            type="number"
            label="telefono"
            name="telefono"
            onChange={handleChange}
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
          />
          <TextField
            variant="outlined"
            color="warning"
            type="text"
            label="provincia"
            name="provincia"
            onChange={handleChange}
            error={errors.provincia ? true : false}
            helperText={errors.provincia}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            // onClick={() => {
            //   Swal.fire({
            //     title: "Enviado correctamente",
            //     icon: "success",
            //     confirmButtonColor: "#1A80D9",
            //   });
            // }}
          >
            Enviar
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
