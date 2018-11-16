import React from 'react'
import logo from '../css/assets/logo@3x.png';
import { NavLink, Redirect } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';

class LoggedIn extends React.Component {
  state = {
    clicked: true,
    open: false,
  }

  handleOpen = () => {
   this.setState({ open: true, clicked: !this.state.clicked });
 };

 handleClose = () => {
   this.setState({ open: false });
 };

  handleInputChange = event => {
    this.setState({
    subscription: this.state.subscription === "active" ? this.state.subscription === "paused" : "active"
  })
}

  render() {
    return (
      <React.Fragment>
        <section className="centered">
         <NavLink
          className="home-names" to="/"> <img src={logo} className="main-logo  confirm-logo" alt="logo" /> </NavLink>
        </section>

          {this.props.location.state.user.length === 0 ? <Redirect
                            to={{pathname: "/login"}}
                          />
               :
            <React.Fragment>
              <main id="confirmation" className="confirmation">
                <h2> {this.props.location.state.user[0].subscription} Weekly</h2>

                <button className="pause-plan" onClick={this.handleOpen}>  {  this.state.clicked ?  'Pause your plan' : 'Activate Plan'}   </button>
                  {this.state.open ?
                     <Modal
                          className="modal-container-two"
                          disableAutoFocus={true}
                         open={this.state.open}
                         onClose={this.handleClose}
                       >
                       <div className="modal-containers">
                         <p>Your plan is now {
                            this.state.clicked? 'active': 'paused'
                         }  </p>
                       </div>
                     </Modal>  : null
                }
              </main>

            <section className= "margin-left">
              <h3 className="order-history-login"> Order History </h3>
                <table id="customer-orders">
                  <thead>
                    <tr>
                      <th className="loggedin-info"> Order number:</th>
                      <th className="loggedin-info"> Date Purchased:</th>
                      <th className="loggedin-info"> Total:</th>
                    </tr>
                 </thead>
                  <tbody>
                    <tr>
                      <td className="loggedin-info">1</td>
                      <td className="loggedin-info">{this.props.location.state.user[0].created_at.slice(0, 10)}</td>
                      <td className="loggedin-info">${this.props.location.state.user[0].orders[0].total}</td>
                    </tr>
                  </tbody>
                </table>
              <h3> Account Info </h3>
              <p className="loggedin-info"> {this.props.location.state.user[0].name}</p>
              <p className="loggedin-info"> {this.props.location.state.user[0].email}</p>

              <NavLink
                className="logout-button"
                to={"/"}
              ><button className="pause-plan"> Logout </button></NavLink>
           </section>
         </React.Fragment>
         }
      </React.Fragment>
    )
  }
}


export default LoggedIn
