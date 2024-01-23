import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const HomePage = () => {
  return (
    <>
      <div>estoy en HomePage</div>
      <Link to="/">Volver al Home </Link>
    </>
  );
};

export default HomePage;
