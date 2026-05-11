import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/" className="navbar-brand">Home</Link>
			<Link to="/add-contact" className="btn btn-success">Add new contact</Link>
		</nav>
	);
};