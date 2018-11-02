import React from 'react'
import { NavLink } from 'react-router-dom';
import cherry from '../css/assets/acaiCherry.jpeg'
import banana from '../css/assets/bananaGreens.jpeg'
import rice from '../css/assets/cauliflowerRice.jpeg'

function TopPicks(props) {
  return (
     <React.Fragment>
        <h1 className="top-picks">Top Picks</h1>
        <div className="home-top-picks">
          <div className="home-top-pick"><img src={banana} className="App-logo" alt="logo" /><p className="home-name">Banana + Greens</p><p className="home-kind">Smoothie</p><NavLink
          className="home-products"
          to="/products"> See all products </NavLink></div>
        <div className="home-top-pick"><img src={rice} className="App-logo" alt="logo" /><p className="home-name">Cauliflower Rice + Pesto</p><p className="home-kind">Harvest Bowl</p><NavLink
          className="home-products"
          to="/products"> See all products </NavLink></div>
        <div className="home-top-pick"><img src={cherry} className="App-logo" alt="logo" /><p className="home-name">Acai + Cherry</p><p className="home-kind">Smoothie</p><NavLink
          className="home-products"
          to="/products"> See all products </NavLink></div>
       </div>
    </React.Fragment>
  );
}

export default TopPicks
