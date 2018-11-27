import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../css/assets/logo@3x.png';

function Navbar(props) {
  return (
    <nav className="navbar">
      <NavLink
        className="nav-button"
        to="/products"> <button className="nav-button p-browse"> Products </button></NavLink>
      <NavLink
          className="home-name" to="/"> <img src={logo} className="main-logo" alt="be-fresh-logo" /> </NavLink>
      <div>
        <NavLink
      
          to="/products"> <button id="m-browse" > Products </button></NavLink>
        <NavLink
        to="/login"> <button className="nav-button login"> Log In  </button></NavLink>
        <NavLink
        to="/started">  <button className="nav-button started"> Get started  </button></NavLink>
      </div>
    </nav>
  );
}

export default Navbar
