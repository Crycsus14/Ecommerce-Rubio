import { Typography, Button } from "@mui/material";
import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Typography variant="h2">Aca va el forms</Typography>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre completo"
          onChange={handleChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Ingresa tu numero de telefono"
          onChange={handleChange}
          name="telefono"
        />
        <Button type="submit"> Enviar</Button>
        <Button type="button"> Cancelar</Button>
      </form>
    </>
  );
};

export default Checkout;
