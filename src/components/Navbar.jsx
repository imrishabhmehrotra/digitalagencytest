import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper navbar">
          <ul id="nav-mobile" className=" right hide-on-med-and-down">
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
