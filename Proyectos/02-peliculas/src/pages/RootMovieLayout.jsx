import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootMovieLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* Aquí van los hijos */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootMovieLayout;
