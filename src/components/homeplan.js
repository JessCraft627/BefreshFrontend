import React from 'react'
import { NavLink } from 'react-router-dom';
import smoothie from '../css/assets/smoothie.png';

function HomePlan(props) {
  return (
    <div className="home-plan">
      <img src={smoothie} className="smoothie-logo" alt="logo" />
      <div>
        <p className="the-plans">The Plans</p><p className="no-commit">Healthy just got easy! No commitment. </p>
            <p className="no-commit">Flexible frequency. Skip or cancel anytime.</p>
            <p className="weekly-options">Two weekly plan options</p>
            <div className="weekly-offers"><p className="numbered">6</p><p className="numbered-week">per week</p><p className="numbered-cost"> $7.75 per cup</p></div>
            <div className="weekly-offers"><p className="numbered">9</p><p className="numbered-week">per week</p><p className="numbered-cost"> $6.75 per cup</p></div>
            <NavLink
              to="/products"> <button className="view-products"> View all products </button></NavLink>
      </div>
    </div>
  );
}

export default HomePlan
