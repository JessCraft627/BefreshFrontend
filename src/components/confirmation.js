import React from 'react'
import logo from '../css/assets/logo@3x.png';
import { NavLink } from 'react-router-dom';

function Confirmation(props) {
  return (
        <header className="confirmation-page">
          <NavLink
            className="home-names" to="/"> <img src={logo} className="main-logo confirm-logo" alt="logo" /> </NavLink>
          <main className="confirmation">
            <h2> Order Confirmed</h2>
            <p>Your order was completed! You will receive an email shortly.  </p>
          </main>
        </header>
  );
}

export default Confirmation
