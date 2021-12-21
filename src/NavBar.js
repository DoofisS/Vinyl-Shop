import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ addedAmount }) => {
  return (
    <div className="navbar">
      <Link to="/" className="home">
        Home
      </Link>
      <Link to="#">Collection</Link>
      <Link to="#">About Us</Link>
      <Link to="/CheckOut">
        <FontAwesomeIcon icon={faShoppingCart} />
        {addedAmount}
      </Link>
    </div>
  );
};

export default NavBar;
