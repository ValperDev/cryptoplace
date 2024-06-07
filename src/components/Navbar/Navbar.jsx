import React from 'react'
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import arrow_icon from "../../assets/images/arrow_icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navbar__logo"/>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">Home</li>
        <li className="navbar__menu-item">Features</li>
        <li className="navbar__menu-item">Pricing</li>
        <li className="navbar__menu-item">Blog</li>
      </ul>
      <div className="navbar__nav-right">
        <select className="navbar__select">
          <option value="usd">usd</option>
          <option value="eur">eur</option>
        </select>
        <button className="navbar__button">Sign up <img src={arrow_icon} alt="" className="navbar__button-icon"/></button>
      </div>
    </div>
  )
}

export default Navbar;
