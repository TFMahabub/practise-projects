import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/Index";
import Homepage from "../pages/home/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
