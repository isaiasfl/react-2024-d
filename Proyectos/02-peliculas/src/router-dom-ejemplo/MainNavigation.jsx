import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="bg-blue-400 text-xl my-5">
      <nav>
        <ul className="flex flex-row text-center">
          <li className="mx-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-10">
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
