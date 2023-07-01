import React from "react";
import "./Navbar.css"
 const Navbar = () =>{
    return (
        <>
            <nav >
    <div className="nav-wrapper navbar">
      <a href="#" className="brand-logo">  <i className="material-icons">developer_mode</i>
</a>
      <ul id="nav-mobile" className=" right hide-on-med-and-down">
        <li className="nav-item" ><a href="sass.html">Login</a></li>
        <li className="nav-item"><a href="badges.html">Signup</a></li>
        <li className="nav-item"><a href="collapsible.html">Search</a></li>
      </ul>
    </div>
  </nav>

        </>
    )
}

export default Navbar