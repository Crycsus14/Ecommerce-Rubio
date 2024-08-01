import { TextField, Button } from "@mui/material";
import "../../index.css";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";


const Checkout = () => {
  const { handleSubmit, handleChange, values,errors } = useFormik({
    initialValues: { nombre: "", email: "", telefono: "", provincia: "" },
    onSubmit: (data) => {
      let order={
        buyer: user,
        items: cart,
        total: total,
      }

    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo obligatorio"),
      email: Yup.string().email("Formato incorrecto, debe contener @").required("Campo obligatorio"),
      telefono: Yup.number().required("Campo obligatorio").positive("Invalido").integer(),
      provincia: Yup.string().required("Campo obligatorio"),
    }),
    validateOnChange: false,

  });
   console.log(errors);
   
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
