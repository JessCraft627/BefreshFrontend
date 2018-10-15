import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import smoothie from '../css/assets/smoothie.png';
import Navbar from './navbar'


class Started extends Component {
  state = {
    numpicked: 2,
  }

  handleClickChanges = event => {
    this.setState({
      numpicked: 9
    })
}

  render() {

    return (
       <React.Fragment>
        <Navbar />
          <div className="home-plan">
            <img src={smoothie} className="smoothie-logo" alt="logo" />
            <div>
              <p className="the-plans">Choose a Plan</p><p className="no-commit">Healthy just got easy! No commitment. </p>
                  <p className="no-commit">Flexible frequency. Skip or cancel anytime.</p>
                  <p className="weekly-options">Choose a weekly plan</p>
                  <div onClick={this.handleClickChanges} className="weekly-offer"><p className="numbered">6</p><p className="numbered-week">per week</p><p className="numbered-cost"> $7.75 per cup</p></div>
                  <div  onClick={this.handleClickChanges} className="weekly-offer"><p className="numbered">9</p><p className="numbered-week">per week</p><p className="numbered-cost"> $6.75 per cup</p></div>
                    <Link
                      to={{
                        pathname: "/order",
                        state: { numpicked: this.state.numpicked }
                      }}
                    > <button className="view-products"> Next </button> </Link>

            </div>
          </div>
      </React.Fragment>
  );
 }
}

export default Started
