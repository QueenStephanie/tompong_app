import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function Layout() {
  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">
        <Sidebar />
        <div className="col-10 d-flex flex-column">
          <Topbar />
          <div className="p-4 flex-grow-1 bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
