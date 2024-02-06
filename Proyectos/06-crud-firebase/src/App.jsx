import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProductPage from "./pages/EditProductPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/productos/:idproduct", element: <EditProductPage /> },
    { path: "/payment", element: <PaymentPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
