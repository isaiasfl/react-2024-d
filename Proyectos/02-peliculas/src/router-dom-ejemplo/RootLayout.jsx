import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <hr />
      <Outlet />
      <hr />
      <div>Mi footer personalizado</div>
    </>
  );
};

export default RootLayout;
