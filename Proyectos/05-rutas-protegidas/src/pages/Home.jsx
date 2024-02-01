import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <Link to="about">Ir a About</Link>
      </div>
    </>
  );
};

export default Home;
