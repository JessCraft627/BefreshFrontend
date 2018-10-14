import React from 'react'
import { NavLink } from 'react-router-dom';
import cherry from '../css/assets/acaiCherry.jpeg'
import banana from '../css/assets/bananaGreens.jpeg'
import rice from '../css/assets/cauliflowerRice.jpeg'

function TopPicks(props) {
  return (
    <div className="home-top-picks"><p>Top Picks</p>
      <div className="home-top-pick"><img src={banana} className="App-logo" alt="logo" /><p>Banana + Greens</p><p>Smoothie</p><NavLink
      to="/products"> See all products </NavLink></div>
    <div className="home-top-pick"><img src={rice} className="App-logo" alt="logo" /><p>Cauliflower Rice + Pesto</p><p>Harvest Bowl</p><NavLink
      to="/products"> See all products </NavLink></div>
    <div className="home-top-pick"><img src={cherry} className="App-logo" alt="logo" /><p>Acai + Cherry</p><p>Smoothie</p><NavLink
      to="/products"> See all products </NavLink></div>
   </div>
  );
}

export default TopPicks
