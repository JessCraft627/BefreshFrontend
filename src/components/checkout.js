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
              <p className="checkout-names"> Credit Card</p>
                <form >
                  <label className="checkout-header">
                    Name on card:
                    <input name="payment-info" type="text" value={null}  />
                  </label>
                  <label className="checkout-header">
                    Card Number:
                    <input  name="payment-info" type="text" value={null}  />
                  </label>
                  <label className="checkout-header">
                    Expiration:
                    <input  name="payment-info" type="text" value={null}  />
                  </label>
                  <label className="checkout-header">
                    Expiration:
                    <input name="payment-info" type="text" value={null}  />
                  </label>
                  <p className="checkout-names">Shipping Address</p>
                    <label className="checkout-header">
                      Address:
                      <input  name="payment-info" type="text" value={null}  />
                    </label>
                    <label className="checkout-header">
                      City:
                      <input name="payment-info" type="text" value={null}  />
                    </label>
                    <label className="checkout-header">
                      State:
                      <input name="payment-info" type="text" value={null}  />
                    </label>
                    <label className="checkout-header">
                      Zip:
                      <input  name="payment-info" type="text" value={null}  />
                    </label>
                    <p className="checkout-names">Account</p>
                      <label className="checkout-header">
                        Email:
                        <input  name="payment-info" type="text" value={null}  />
                      </label>
                      <label className="checkout-header">
                        Password:
                        <input  name="payment-info" type="text" value={null}  />
                      </label>

                </form>
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
