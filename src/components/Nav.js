import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: 'none', color:'black' }}>
        <h5 className="nav__texts">Stephen Plummer</h5>
      </Link>
      <Link to="/about"  style={{ textDecoration: 'none', color:'black' }}>
        {" "}
        <h5 className="nav__texts">About</h5>
      </Link>
    </nav>
  );
}

export default Nav;
