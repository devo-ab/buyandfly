import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Error from "../pages/Error";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
