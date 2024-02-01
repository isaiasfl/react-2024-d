import { useContext } from "react";
import ComponenteContext from "../context/ComponenteContext";

const Componente5 = () => {
  const { appState, setAppState } = useContext(ComponenteContext);

  function handleClick() {
    setAppState({ ...appState, contador: appState.contador + 1 });
  }
  return (
    <div>
      <h1>Componente5</h1>
      <h4>Contador: {appState.contador}</h4>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export default Componente5;
