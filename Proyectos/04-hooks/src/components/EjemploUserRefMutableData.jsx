import { useRef } from "react";

const EjemploUserRefMutableData = () => {
  const dataRef = useRef({ value: "Valor inicial" });
  function handleUpdate() {
    dataRef.current.value = "Actualizando";
    console.log(dataRef.current.value);
  }
  return (
    <>
      <div>{dataRef.current.value}</div>
      <button onClick={handleUpdate}>Actualizar</button>
    </>
  );
};

export default EjemploUserRefMutableData;
