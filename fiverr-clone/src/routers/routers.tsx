import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/Index";
import HomePage from "../pages/home/Index";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
