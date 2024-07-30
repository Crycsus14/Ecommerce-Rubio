import { useState } from "react";
import { Counter } from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ onAdd, stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        title: "Cantidad Máxima",
        icon: "warning",
        confirmButtonColor: "#1A80D9"
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      Swal.fire({
        title: "Cantidad Mínima",
        icon: "warning",
        confirmButtonColor: "#1A80D9"
      });
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
