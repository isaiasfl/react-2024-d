import { useAuthProduct } from "../context/authContextProduct";
import { cerrarSesion } from "../firebase/productosApi";

const SignOutButton = () => {
  const { signOutFirebase } = useAuthProduct();
  // const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      const cerradoCorrectamente = await cerrarSesion();
      if (cerradoCorrectamente) {
        signOutFirebase();
        // navigate("/");
      }
    } catch (error) {
      console.log("Error SingnOut");
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
    >
      Cerrar Sesión
    </button>
  );
};

export default SignOutButton;
