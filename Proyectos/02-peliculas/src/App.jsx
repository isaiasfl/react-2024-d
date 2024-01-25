import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AcercaDe from "./pages/AcercaDe";
import ErrorMoviePage from "./pages/ErrorMoviePage";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import RootMovieLayout from "./pages/RootMovieLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootMovieLayout />,
      errorElement: <ErrorMoviePage />,

      children: [
        { index: true, element: <Home /> },
        // { path: "peliculas", element: <Products /> },
        { path: "peliculas/:movieId", element: <MovieDetailsPage /> },
      ],
    },
    {
      path: "/acerca_de",
      element: <AcercaDe />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
