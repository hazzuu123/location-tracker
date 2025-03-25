import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Map from "../pages/Map";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <Map />,
  },
]);
