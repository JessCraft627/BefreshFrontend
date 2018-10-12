import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className="navbar">

      <NavLink
        to="/products"> <button className="nav-button browse"> Browse </button></NavLink>
      <p> Daily Harvest  </p>
      <NavLink
        to="/login"> <button className="nav-button login"> Login  </button></NavLink>
      <NavLink
      to="/started"> <button className="nav-button started"> Get started </button></NavLink>

    </div>
  );
}

export default Navbar
