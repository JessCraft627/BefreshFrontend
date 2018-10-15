import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom';
import raspberryclusters from '../css/assets/raspberryclusters.png';


class Login extends React.Component {

  state = {
    email: '',
    password: '',
    user: []
  }

  handleInputChanges = event => {
  this.setState({
    email: event.target.value
  })
}

  handleInputChange = event => {
  this.setState({
    password: event.target.value
  })
}

filterUser = event => {
    return this.state.user.filter(users => users.email.toLowerCase().includes(this.state.email.toLowerCase()))}



dataToDisplay = () => {
      return this.state.user ? this.filterResults() : null
  }


filterResults = () => {
  return this.state.user.filter(users => users.email.toLowerCase().includes(this.state.email.toLowerCase()))}

componentDidMount = () => {
  fetch("http://localhost:3000/api/v1/users")
  .then(r=>r.json())
  .then(json => this.setState({
    user: json
  }, () => console.log(this.state.user)))
}



  render() {
    return (
      <div>
        <Navbar />
          <div className="login-div">
            <h1 className="login-header"> Log In </h1>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <label>
                <p className="login-i">Email:</p>
                <input  name="email" type="text" value={this.state.input} onChange={this.handleInputChanges} />
              </label>
              <label >
                  <p className="login-i">Password:</p>
                <input  name="password" type="text" value={this.state.input} onChange={this.handleInputChange} />
              </label>
              <p className="login-button">
                {
                  this.state.email === ''
                  ?
                <Link
                    className="login-button"
                  to={{
                    pathname: "/loggedin",
                    state: { user: this.dataToDisplay() }
                  }}
                  onClick={ (e) => e.preventDefault() }
                > Log In </Link>
              :     <Link
                      className="login-button"
                    to={{
                      pathname: "/loggedin",
                      state: { user: this.dataToDisplay() }
                    }}
                  > Log In </Link>}

              </p>
            </form>
            <p className="get-started-action">Don't have an account? <Link
            className="get-started-cta"
            to={{
              pathname: "/started"
            }}
            > Get Started </Link></p>
          <img src={raspberryclusters} className="login-logo" alt="logo" />
          </div>
      </div>
    );
  }
}


export default Login
