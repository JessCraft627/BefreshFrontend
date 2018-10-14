import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../css/assets/logo@3x.png';

function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink
        className="nav-button browse"
        to="/products"> <button className="nav-button browse"> Products </button></NavLink>
      <NavLink
          className="home-name" to="/"> <img src={logo} className="main-logo" alt="logo" /> </NavLink>
      <NavLink
        to="/login"> <button className="nav-button login"> Log In  </button></NavLink>
      <NavLink

      to="/started">  <button className="nav-button started"> Get started  </button></NavLink>

    </div>
  );
}

export default Navbar
