import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/Index";
import UserProfilePage from "../pages/userProfile/Index";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/user_profile/:id",
        element: <UserProfilePage />,
      },
    ],
  },
]);
