import React from 'react'
import logo from '../css/assets/logo@3x.png';
import { NavLink } from 'react-router-dom';

class LoggedIn extends React.Component {
  state = {
    clicked: true
  }

  handleInputChange = event => {
  this.setState({
    subscription: this.state.subscription === "active" ? this.state.subscription === "paused" : "active"
  })
}

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="centered">
        <NavLink
          className="home-names " to="/"> <img src={logo} className="main-logo  confirm-logo" alt="logo" /> </NavLink>
        </div>
        <h2 className="your-plan">Your plan</h2>
          <div className="confirmation">
            <h2> {this.props.location.state.user[0].subscription} Weekly</h2>
            <p>Your plan is {
               this.state.clicked? 'Active' : 'Paused'
            }  </p>
          <button className="pause-plan" onClick= {() => this.setState({clicked: !this.state.clicked})}>
            {
               this.state.clicked? 'Pause Plan' : 'Activate Plan'
            }
            </button>
          </div>

        <div className= "margin-left">
        <h3> Order History </h3>
          <table id="customer-orders">
            <tr>
              <th className="loggedin-info"> Order number:</th>
              <th className="loggedin-info"> Date:</th>
              <th className="loggedin-info"> Total:</th>
            </tr>
            <tr>
              <td  className="loggedin-info">{this.props.location.state.user[0].orders[0].id}</td>
              <td  className="loggedin-info">{this.props.location.state.user[0].orders[0].created_at.slice(0, 10)}</td>
              <td  className="loggedin-info">${this.props.location.state.user[0].orders[0].total}</td>
            </tr>
          </table>
        <h3> Account Info </h3>
        <p className="loggedin-info"> {this.props.location.state.user[0].name}</p>
        <p className="loggedin-info"> {this.props.location.state.user[0].email}</p>


        <NavLink
          className="logout-button"
          to={"/"}
          exact="true"
        ><button className="pause-plan"> Logout </button></NavLink>
        </div>
      </div>
    )
  }
}


export default LoggedIn
