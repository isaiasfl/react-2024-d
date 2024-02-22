import { useReducer } from "react";
// fuera o en un fichero a parte ... initialState y el formReducer
const initialState = {
  name: "",
  password: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET-NAME":
      // throw new Error("Estoy en en SET-NAME")
      return { ...state, name: action.payload };
    case "SET-PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialState;
    default:
      return initialState;
  }
};

const FormUseReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handlSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario: ${state.name}   Password: ${state.password}  `);
  };
  const handleChangeName = (e) => {
    dispatch({ type: "SET-NAME", payload: e.target.value });
  };

  return (
    <form
      onSubmit={handlSubmit}
      className="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded"
    >
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-800 font-bold">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          value={state.name}
          onChange={handleChangeName}
          className="w-full px-4 py-2 rounded border border-gray-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-800 font-bold">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET-PASSWORD", payload: e.target.value })
          }
          className="w-full px-4 py-2 rounded border border-gray-400"
        />
      </div>
      {/* Botón de enviar */}
      <div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormUseReducer;
