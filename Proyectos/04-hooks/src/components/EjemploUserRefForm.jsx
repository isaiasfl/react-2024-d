import { useRef, useState } from "react";

const EjemploUserRefForm = () => {
  const [nombre, setNombre] = useState("");
  const inputRef = useRef(null);
  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <div>
      <label htmlFor="nombre">Nombre usuario: </label>
      <input
        type="text"
        id="nombre"
        ref={inputRef}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleFocus}>Enfocar aquí</button>
    </div>
  );
};

export default EjemploUserRefForm;
