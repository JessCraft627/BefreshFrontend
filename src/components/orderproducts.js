import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../css/assets/whitelogo.png';
import back from '../css/assets/icon-left@3x.png';
import Popper from './popper.js'
import OrderProductsContainer from './orderproductcontainer'

class OrderProducts extends Component {

  state = {
    numordered: 0,
  }

  handleOrderChanges = event => {
    this.setState({
      numordered:   this.state.numordered < this.props.location.state.numpicked ? this.state.numordered + 1 : this.state.numordered 
    })
}

  render() {
    console.log(this.props)
    return (
       <React.Fragment>
         <div className="order-navbar">
           <NavLink
             className="nav-button browse"
             to="/started">  <img src={back} className="back-button" alt="logo" /></NavLink>
           <NavLink
               className="home-name" to="/"> <img src={logo} className="white-logo" alt="logo" /> </NavLink>
             <p className="count-boxes"> {this.state.numordered} / {this.props.location.state.numpicked}  <Popper /></p>
         </div>

        <OrderProductsContainer handleChange={this.handleOrderChanges}/>

      </React.Fragment>
  );
 }
}

export default OrderProducts
