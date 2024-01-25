import { Link } from "react-router-dom";
import logoReact from "../assets/react.svg";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5 flex justify-between items-center font-bold font-sans">
      <div className="flex items-center">
        <Link to="..">
          <img src={logoReact} alt="Logo React" className="w-16 h-16 mx-5" />
        </Link>
        <span className="text-2xl font-bold mx-5">
          {" "}
          Api Películas -Usando React Router Dom-
        </span>
      </div>
      {/* Enlaces a distintas partes de la web */}
      <nav>
        <ul className="flex space-x-12 mx-10">
          <li>
            {" "}
            <Link to="/acerca_de" className="hover:text-gray-400">
              Acerca de
            </Link>
          </li>
          <li>
            {" "}
            <Link className="hover:text-gray-400">Usuario</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
