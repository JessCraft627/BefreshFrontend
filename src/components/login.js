import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom';

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
      <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <input  name="email" type="text" value={this.state.input} onChange={this.handleInputChanges} />
              </label>
              <label>
                Password:
                <input  name="password" type="text" value={this.state.input} onChange={this.handleInputChange} />
              </label>
              <Link
                to={{
                  pathname: "/loggedin",
                  state: { user: this.dataToDisplay() }
                }}
              > Login </Link>

        </form>
      </div>
    );
  }
}


export default Login
