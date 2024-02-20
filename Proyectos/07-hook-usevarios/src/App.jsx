import useCustomUUID from "./customHooks/useCustomUUID";
import useLocalStorage from "./customHooks/useLocalStorage";
import Counter from "./useCallback/Counter";
import UseMemoProductList from "./useMemo/UseMemoProductList";
import BasicoReduce from "./useReducer/BasicoReduce";

function App() {
  const [uuid, generateUUID] = useCustomUUID();
  const [storedValue, setStoredValue] = useLocalStorage(
    "keyIsaias",
    "I love React"
  );

  const handleChange = (e) => {
    setStoredValue(e.target.value);
  };
  return (
    <>
      <h1 className="text-4xl">Hook y useVarios</h1>
      <h2 className="text-2xl">UseMemo</h2>
      <hr />
      <UseMemoProductList />
      <hr />
      <h2 className="text-2xl">useCallback</h2>
      <hr />
      <Counter />
      <hr />
      <h2 className="text-2xl">useReducer</h2>
      <hr />
      <BasicoReduce />
      <hr />
      <h2 className="text-2xl">customHooks</h2>
      <hr />
      <h3>Generar UUID</h3>
      <div className="containet mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">UUID generado {uuid}:</h2>
        <div>
          <button
            onClick={generateUUID}
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Generar nuevo UUID
          </button>
        </div>
      </div>
      <hr />
      <h3>Almacenar en el LocalStorage</h3>
      <div className="container mx-auto p-4">
        <h2>
          Valor almacenado en el localStorage es: {storedValue} en la clave
          keyIsaias
        </h2>
        <input
          type="text"
          value={storedValue}
          placeholder="Introducir el valor"
          className="w-full px-4 py-2 border border-gray-500 rounded-md"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
