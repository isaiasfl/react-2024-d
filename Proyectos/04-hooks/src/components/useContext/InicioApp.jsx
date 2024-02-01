import React from "react";
import Componente1 from "./components/Componente1";
import Componente5 from "./components/Componente5";
import ComponenteProvider from "./context/ComponenteProvider";

const InicioApp = () => {
  return (
    <ComponenteProvider>
      <Componente1 />
      <Componente5 />
    </ComponenteProvider>
  );
};

export default InicioApp;
