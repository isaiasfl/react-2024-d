import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import EditProductPage from "./pages/EditProductPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import RootPage from "./pages/RootPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute isActive={true} redirectPath="/login" />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            { path: "/productos/:idproduct", element: <EditProductPage /> },
            { path: "/payment", element: <PaymentPage /> },
          ],
        },
        { path: "/login", element: <LoginPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
