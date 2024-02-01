import { useEffect, useRef } from "react";

const EjemploUseRefInput = () => {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputRef = useRef(null);
  return (
    <div>
      <label htmlFor="">Nombre: </label>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default EjemploUseRefInput;
