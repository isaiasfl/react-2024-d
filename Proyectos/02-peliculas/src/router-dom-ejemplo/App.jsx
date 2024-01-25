import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Administracion from "./router-dom/Administracion";
import ErrorPage from "./router-dom/ErrorPage";
import HomePage from "./router-dom/HomePage";
import ProductDetails from "./router-dom/ProductDetails";
import Products from "./router-dom/Products";
import RootLayout from "./router-dom/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/datos",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index:true, element: <HomePage /> },
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
