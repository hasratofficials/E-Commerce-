import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Shop Here</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}