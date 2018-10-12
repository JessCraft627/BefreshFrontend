import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Navbar from './components/navbar'
import Slider from './components/header'
import cherry from './css/assets/acaiCherry.jpeg'
import banana from './css/assets/bananaGreens.jpeg'
import rice from './css/assets/cauliflowerRice.jpeg'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Slider />

       <div className="home-details">
       <div><img src={null} className="App-logo" alt="logo" /><p>Fill your box</p><p>Choose any combination of delicious superfood eats, developed by a nutritionist and made craveable by a chef.</p></div>
       <div><img src={null} className="App-logo" alt="logo" /><p>Check your doorstep</p><p>Your pre-portioned cups will arrive ready to pop in your freezer + blend, soak or heat on your schedule</p></div>
       <div><img src={null} className="App-logo" alt="logo" /><p>Enjoy in seconds</p><p>Simply add a liquid base to your cup and blend, soak or heat. No prep, no mess. </p></div>
       </div>

      <div className="home-plan"><p>Pick a plan</p><span> Healthy just got easy! No commitment. Flexible frequency. Skip or cancel anytime.
        Choose between 6 or 9 cups a week. </span><div><p>6 weekly</p><p> $7.75 per cup</p></div><div><p>9 weekly</p><p> $6.75 per cup</p></div><NavLink
        to="/products"> <button className="nav-button home-product"> View all products </button></NavLink>
     </div>

      <div className="home-top-picks"><p>Top Picks</p>
        <div className="home-top-pick"><img src={banana} className="App-logo" alt="logo" /><p>Banana + Greens</p><p>Smoothie</p><NavLink
        to="/products"> See all products </NavLink></div>
      <div className="home-top-pick"><img src={rice} className="App-logo" alt="logo" /><p>Cauliflower Rice + Pesto</p><p>Harvest Bowl</p><NavLink
        to="/products"> See all products </NavLink></div>
      <div className="home-top-pick"><img src={cherry} className="App-logo" alt="logo" /><p>Acai + Cherry</p><p>Smoothie</p><NavLink
        to="/products"> See all products </NavLink></div>
     </div>


     <footer className="footer"><p>DAILY HARVEST</p><span>copyright 2018 | Daily Harvest Inc</span></footer>
    </div>
    );
  }
}

export default App;

  // <img src={null} className="App-logo" alt="logo" />
  // <a
  //   className="App-link"
  //   href="https://reactjs.org"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   Learn React
  // </a>
