import React from 'react'
import logo from '../css/assets/whitelogo.png';
import { NavLink } from 'react-router-dom';
import smoothielogo from '../css/assets/image-order.jpg';

class Confirmation extends React.Component {

  state = {
    name: " ",
    email: " ",
    password: " ",
    subscription: this.props.location.state.picked,
    address: " ",
    city: " ",
    state: " ",
    zip: "",
    card_number: "",
    orders: this.props.location.state.cart,
    displayError: false
  };

  handleInputChange = event => {
  this.setState({
    name: event.target.value
  })
}
  handleInputChangeTwo = event => {
  this.setState({
    email: event.target.value
  })
}
  handleInputChangeThree = event => {
  this.setState({
    password: event.target.value
  })
}

  handleInputChangeFive = event => {
  this.setState({
    address: event.target.value
  })
}
  handleInputChangeSix = event => {
  this.setState({
    city: event.target.value
  })
}
  handleInputChangeSeven = event => {
  this.setState({
    state: event.target.value
  })
}
  handleInputChangeEight = event => {
  this.setState({
    zip: parseInt(event.target.value)
  })
}
  handleInputChangeNine = event => {
  this.setState({
    card_number: parseInt(event.target.value)
  })
}
  handleInputChangeTen = event => {
  this.setState({
    subscription: this.props.location.state.picked
  })
}
  handleInputChangeEleven = event => {
  this.setState({
    orders: this.props.location.state.cart
  }, () => console.log(this.state))
}


  handleProfileCreation = event => {
  if (this.state.name !== " " &&  this.state.city !== " " && this.state.email !== " " && this.state.zip !== " ") {
    fetch("http://localhost:3000/api/v1/users", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        subscription: this.state.subscription,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        card_number: this.state.card_number,
      })
    }).then( res => res.json()).then( res => fetch("http://localhost:3000/api/v1/orders", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          user_id: res.id,
          total: 34
        })
      })).then( res => res.json()).then( res => fetch(`http://localhost:3000/api/v1/orders/${res.id}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PATCH',
          body: JSON.stringify({
            products: {name: this.state.orders}
          })
        }))
    this.setState({ displayError: false })
  } else {
    this.setState({ displayError: true })
  }
}

render () {
  return (
     <React.Fragment>
        <div className="checkout-page">
          <header className="headers">
              <a href="/">
              <img src={logo} className="be-fresh-logo" alt="logo" />
              </a>
          </header>
          <h1 className="checkout-headers"> Checkout </h1>
          { this.state.displayError ? <h3 className="error">All fields must be properly filled out </h3> : null }
          <div className="card-container">
            <main className="card-info">
              <p className="checkout-names"> Credit Card</p>
                <form >
                  <label className="checkout-header">
                    Name on card:
                    <input onChange={this.handleInputChange}
                      value={this.state.name} name="payment-info" type="text" />
                  </label>
                  <label className="checkout-header">
                    Card Number:
                    <input onChange={this.handleInputChangeNine} name="payment-info" type="text" placeholder="0000-1111-2222-3333" value={this.state.card_number}  />
                  </label>
                  <label className="checkout-header">
                    CVV:
                    <input name="payment-info" type="text" placeholder="000" value={null}  />
                  </label>
                  <label className="checkout-header">
                    Expiration:
                    <input name="payment-info" type="text" placeholder="10/19" value={null}  />
                  </label>
                  <p className="checkout-names">Shipping Address</p>
                    <label className="checkout-header">
                      Address:
                      <input  onChange={this.handleInputChangeFive} name="payment-info" type="text" value={this.state.address}  />
                    </label>
                    <label className="checkout-header">
                      City:
                      <input onChange={this.handleInputChangeSix} name="payment-info" type="text" value={this.state.city}  />
                    </label>
                    <label className="checkout-header">
                      State:
                      <input onChange={this.handleInputChangeSeven} name="payment-info" type="text" value={this.state.state}  />
                    </label>
                    <label className="checkout-header">
                      Zip:
                      <input  onChange={this.handleInputChangeEight} name="payment-info" type="text" value={this.state.zip}  />
                    </label>
                    <p className="checkout-names">Account</p>
                      <label className="checkout-header">
                        Email:
                        <input onChange={this.handleInputChangeTwo} name="payment-info" type="text" value={this.state.email}  />
                      </label>
                      <label className="checkout-header">
                        Password:
                        <input onChange={this.handleInputChangeThree} name="payment-info" type="text" value={this.state.password}  />
                      </label>

                </form>
            </main>
            <main className="arrival-container">
                <img src={smoothielogo} className="be-smoothie-logo" alt="logo" />
                <p className="boxed-info"> Your box will arrive on November 1st</p>
                <div className="boxed-information"> <span>Box Contents:</span> {this.props.location.state.cart.map((cart, index) => <p>{index + 1}: {cart}</p>)} </div>
                <p className="boxed-info"> {this.props.location.state.picked} cups weekly - {this.props.location.state.picked === 6 ? "$69" : "$79"}</p>
                <p className="boxed-info"> Shipping - Free</p>
                <p className="boxed-info"> Total - {this.props.location.state.picked === 6 ? "$69" : "$79"}</p>
                <NavLink
                    onClick={this.handleProfileCreation}
                    to={this.state.name !== " " ? "/confirm" : "/checkout"}> <button className="complete-order"> Complete Order </button> </NavLink>
            </main>
          </div>
        </div>
     </React.Fragment>
   );
  }
}

export default Confirmation
