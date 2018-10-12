import React from 'react'
import Loginnav from './loginnavbar'
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
      <Loginnav />
        <h1>Your plan</h1>
        <p> {this.props.location.state.user[0].subscription} Weekly </p>
        <p> Your plan is {
           this.state.clicked? 'Active' : 'Paused'
        } </p>
        <button onClick= {() => this.setState({clicked: !this.state.clicked})}>
        {
           this.state.clicked? 'Pause Plan' : 'Activate Plan'
        }
        </button>

        <h2> Order History </h2>
        <p> Order number: {this.props.location.state.user[0].orders[0].id}</p>
        <p> Date: {this.props.location.state.user[0].orders[0].created_at.slice(0, 10)}</p>
        <p> Total: ${this.props.location.state.user[0].orders[0].total}</p>

        <h2> Account Info </h2>
        <p> {this.props.location.state.user[0].name}</p>
        <p> {this.props.location.state.user[0].email}</p>


        <NavLink
          className="logout-button"
          to={"/"}
          exact="true"
        ><button> Logout </button></NavLink>

      </div>
    )
  }
}


export default LoggedIn
