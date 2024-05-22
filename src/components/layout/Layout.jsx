import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar />
      </div>
      <div className="layout__content">
        <Outlet />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
