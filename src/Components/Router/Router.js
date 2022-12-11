import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import CssHacks from "../Projects/CssHacks";
import Etailor from "../Projects/Etailor";
import Motoland from "../Projects/Motoland";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/motoland",
        element: <Motoland></Motoland>,
      },
      {
        path: "/etailor",
        element: <Etailor></Etailor>,
      },
      {
        path: "/csshacks",
        element: <CssHacks></CssHacks>,
      },
    ],
  },
]);
export default router;
