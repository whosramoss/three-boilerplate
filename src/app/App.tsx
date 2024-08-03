import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import { useRoutes } from "react-router-dom";

export default function App() {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
  ]);
}
