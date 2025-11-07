import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🎬 MovieFinder</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
