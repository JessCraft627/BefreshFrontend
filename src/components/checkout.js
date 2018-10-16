import React from 'react'
import logo from '../css/assets/whitelogo.png';
import { NavLink } from 'react-router-dom';
import smoothielogo from '../css/assets/image-order.jpg';

function Confirmation(props) {
  return (
     <React.Fragment>
        <div className="checkout-page">
          <header className="headers">
              <img src={logo} className="be-fresh-logo" alt="logo" />
          </header>
          <h1 className="checkout-headers"> Checkout </h1>
          <div className="card-container">
            <main className="card-info">
              <p> Credit Card</p>
              <p> Shipping Address</p>
            </main>
            <main className="arrival-container">
                <img src={smoothielogo} className="be-smoothie-logo" alt="logo" />
                <p className="boxed-info"> Your box will arrive on November 1st</p>
                <p className="boxed-info"> 9 cups weekly - $69.95</p>
                <p className="boxed-info"> Shipping - Free</p>
                <p className="boxed-info"> Total - $69.95</p>
                <NavLink
                    to="/confirm"> <button className="complete-order"> Complete Order </button> </NavLink>
            </main>
          </div>
        </div>
     </React.Fragment>
  );
}

export default Confirmation
