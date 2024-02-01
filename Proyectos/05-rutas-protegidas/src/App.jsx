import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootPage from "./pages/RootPage";
import ProtectedRoute from "./utils/ProtectedRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      
      children: [
        {
          element: <ProtectedRoute isActive={false} redirectPath="/login" />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
  <Context.Provider value={{}}>
    <RouterProvider router={router} />
  </Context.Provider >
  );
}

export default App;
