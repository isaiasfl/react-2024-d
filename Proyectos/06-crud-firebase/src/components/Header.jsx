import { useAuthProduct } from "../context/authContextProduct";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { userFirebase } = useAuthProduct();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="vite.svg" alt="logo" className="w-8 h-8 mr-2" />
        <span className="text-2xl">Proyecto Productos con Firebase</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col mx-10">
          <span className="mr-4">Bienvenido {userFirebase.displayName}</span>
          <p>{userFirebase.email}</p>
        </div>
        <img
          className="w-12 mx-4 rounded-full"
          src={userFirebase.photoURL}
          alt="Logo del usuario"
        />
        <SignOutButton />
      </div>
    </header>
  );
};

export default Header;
