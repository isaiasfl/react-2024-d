import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProduct } from "../context/authContextProduct";
import { singWithGoogle } from "../firebase/productosApi";

const LoginPage = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { signInFirebase } = useAuthProduct();
  const handleSingIn = async () => {
    await singWithGoogle(signInFirebase, setError, navigate);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-gray-500">
      <div className="flex items-center justify-between mx-10">
        <div className="flex flex-col justify-center items-start h-1/2">
          <h1 className="text-5xl font-bold text-gray-800 ml-8 mt-10 text-center">
            Productos React Firebase
          </h1>
          <p className="text-lg text-gray-600 ml-8 mt-10">Proyecto de DWEC</p>
        </div>
        <div className="flex justify-center items-start mt-2">
          <video id="video-firebase" className="w-1/2" autoPlay loop muted>
            <source
              src="https://firebase.google.com/static/images/homepage/Firebase_Hero_Loop.webm?hl=es"
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-1/4 bg-gray-50 py-12 px-4 rounded-lg shadow-xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              Iniciar Sesión
            </h2>
          </div>
          {error && <div>Parra los errores</div>}
          <div className="rounded-md shadow-sm">
            <button
              className="realitve w-full flex justify-center rounded py-2 px-4 border text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleSingIn}
              type="button"
            >
              Iniciar sesión con Google
            </button>
          </div>
        </div>
      </div>
      <div>sssssss</div>
    </div>
  );
};

export default LoginPage;
