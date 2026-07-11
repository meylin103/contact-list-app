import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-5 py-3">

      <Link
        to="/"
        className="navbar-brand fw-bold fs-3"
      >
        <i className="fas fa-address-book me-2"></i>

        Contact Manager
      </Link>

      <div className="ms-auto">

        <Link
          to="/add-contact"
          className="btn btn-primary rounded-pill px-4"
        >
          + Add Contact
        </Link>

      </div>

    </nav>
  );
};