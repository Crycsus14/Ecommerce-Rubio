import { TextField, Button } from "@mui/material";
import "../../index.css";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";


const Checkout = () => {
  const { handleSubmit, handleChange, values,errors } = useFormik({
    initialValues: { nombre: "", email: "", telefono: "", provincia: "" },
    onSubmit: (data) => {},
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          color="warning"
          type="text"
          label="nombre"
          name="nombre"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          color="warning"
          type="text"
          label="email"
          name="email"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          color="warning"
          type="number"
          label="telefono"
          name="telefono"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          color="warning"
          type="text"
          label="provincia"
          name="provincia"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={() => {
            Swal.fire({
              title: "Enviado correctamente",
              icon: "success",
              confirmButtonColor: "#1A80D9",
            });
          }}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
