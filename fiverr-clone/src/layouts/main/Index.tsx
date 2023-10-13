import { Outlet } from "react-router-dom";
import Footer from "../footer/Index";
import Navbar from "../navbar/Index";

const MainLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
