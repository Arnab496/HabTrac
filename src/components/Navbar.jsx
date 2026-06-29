import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaFire className="logo-icon" />
        HabitTracker
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add">Add Habit</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;