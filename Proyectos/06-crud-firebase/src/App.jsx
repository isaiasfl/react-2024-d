import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import { AuthProvider } from "./context/authContextProduct";
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
          element: <ProtectedRoute redirectPath="/login" />,
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
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;
