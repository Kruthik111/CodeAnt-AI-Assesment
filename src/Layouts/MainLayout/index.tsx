import { Outlet } from "react-router";
import "./Layout.css";
import Sidebar from "../../Components/Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-right">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
