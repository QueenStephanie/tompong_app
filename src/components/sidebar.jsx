import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="col-2 bg-secondary text-white d-flex flex-column p-3">
      <h5 className="text-center mb-4">My System</h5>

      <NavLink to="/" end className="btn btn-outline-light mb-2">
        Dashboard
      </NavLink>
      <NavLink to="/students" className="btn btn-outline-light mb-2">
        Students
      </NavLink>
      <NavLink to="/reports" className="btn btn-outline-light">
        Reports
      </NavLink>
    </div>
  );
}

