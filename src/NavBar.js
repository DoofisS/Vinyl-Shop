import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const NavBar = ({ addedAmount }) => {
  return (
    <div className="navbar">
      <a href="#" className="home">
        Home
      </a>
      <a href="#">Collection</a>
      <a href="#">About Us</a>
      <a href="#">
        <FontAwesomeIcon icon={faShoppingCart} />
        {addedAmount}
      </a>
    </div>
  );
};

export default NavBar;
