import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/" className="navbar-brand">Home</Link>
			<Link to="/demo" className="nav-link">Demo</Link>
			<Link to="/add-contact" className="btn btn-primary">Add Contact</Link>
		</nav>
	);
};