import { useRef, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import EjemploUseRefInput from "./components/EjemploUseRefInput";
import EjemploUserRefForm from "./components/EjemploUserRefForm";
import EjemploUserRefMutableData from "./components/EjemploUserRefMutableData";
import InicioApp from "./components/useContext/InicioApp";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const bntRef = useRef(null);

  function handleClickBtn() {
    setCount((prevcount) => prevcount + 1);
    bntRef.current.style.background = "red";
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={bntRef} onClick={handleClickBtn}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <hr />
      <h2>Uso useRef</h2>
      <EjemploUseRefInput />
      <br />
      <EjemploUserRefForm />
      <br />
      <EjemploUserRefMutableData />
      <hr />
      <h2>Uso UseContext</h2>
      <br />
      <InicioApp />
    </>
  );
}

export default App;
