import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <div className="d-flex justify-content-end align-items-center bg-white shadow-sm p-3">
      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          {user.name}
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Change Password</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <button className="dropdown-item text-danger" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
