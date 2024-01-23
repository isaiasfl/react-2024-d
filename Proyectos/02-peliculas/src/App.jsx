import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Administracion from "./router-dom-ejemplo/Administracion";
import ErrorPage from "./router-dom-ejemplo/ErrorPage";
import HomePage from "./router-dom-ejemplo/HomePage";
import ProductDetails from "./router-dom-ejemplo/ProductDetails";
import Products from "./router-dom-ejemplo/Products";
import RootLayout from "./router-dom-ejemplo/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "productos", element: <Products /> },
        { path: "productos/:productId", element: <ProductDetails /> },
      ],
    },
    {
      path: "/admin",
      element: <Administracion />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
