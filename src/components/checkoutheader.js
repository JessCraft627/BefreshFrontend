import React from 'react'
import logo from '../css/assets/whitelogo.png';

function CheckoutHeader(props) {
  return (
    <React.Fragment>
          <header className="headers">
              <a href="/">
              <img src={logo} className="be-fresh-logo" alt="logo" />
              </a>
          </header>
          <h1 className="checkout-headers"> Checkout </h1>
    </React.Fragment>
  );
}

export default CheckoutHeader
