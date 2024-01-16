import { useEffect, useState } from "react";

const UseEffectBasic = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  // los efectos van aquí. useEffect
  // variantes del useEffect.
  function handleClick() {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 2);
    setCounter((prev) => prev + 3);
  }
  function handleClick2() {
    setCounter2(counter2 + 1);
  }
  // useEffect(() => {
  //   // primera variante sin dependencias.
  //   // Se ejecuta cuando se pinta el componente
  //   // y cuando se modifica cualquier estado.
  //   // Esta variante es MUYYYYYYYYYYYYYYYY PELIGROSA.
  //   console.log("Estoy dentro del efecto UseEffect");
  // });

  // useEffect(() => {
  //   // segunda variante.
  //   // Sólo se ejecuta una única vez y es cuando se monta
  //   // el componente porque el array de dependencias está vacio.
  //   console.log("Estoy dentro del efecto UseEffect v2");
  // }, []);

  useEffect(() => {
    // tercera variante.
    // Se ejecuta cuando se monta el componente y
    // si en el array de dependencias coloco aquel estado que quiero
    // que cuando se modifique dispare este useEffect.
    console.log("Estoy dentro del efecto UseEffect v3");
  }, [counter, counter2]);

  //   useEffect(() => {
  //     // cuarta variante y sucesivas combinaciones
  //     first

  //     return () => {
  //       second
  //     }
  //   }, [third])

  return (
    <div
      className="flex flex-col
    justify-center items-center
     bg-cyan-200 h-screen"
    >
      <h1 className="text-xl font-bold ">Contador1: {counter}</h1>
      <h1 className="text-xl font-bold ">Contador2: {counter2}</h1>

      <button
        className="mx-3 my-3 p-2 bg-slate-800 text-white rounded-md"
        onClick={handleClick}
      >
        Aumentar contador1
      </button>
      <button
        className="mx-3 my-3 p-2 bg-slate-800 text-white rounded-md"
        onClick={handleClick2}
      >
        Aumentar contador2
      </button>
    </div>
  );
};

export default UseEffectBasic;
