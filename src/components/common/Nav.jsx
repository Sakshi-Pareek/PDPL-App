import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="d-flex justifiy-content-between align-items-center">
      <div>logo</div>
      <ul className="d-flex justifiy-content-between align-items-center">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/partener">Partner</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
