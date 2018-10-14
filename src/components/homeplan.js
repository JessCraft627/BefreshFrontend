import React from 'react'
import { NavLink } from 'react-router-dom';

function HomePlan(props) {
  return (
    <div className="home-plan"><p>Pick a plan</p><span> Healthy just got easy! No commitment. Flexible frequency. Skip or cancel anytime.
      Choose between 6 or 9 cups a week. </span><div><p>6 weekly</p><p> $7.75 per cup</p></div><div><p>9 weekly</p><p> $6.75 per cup</p></div><NavLink
      to="/products"> <button className="nav-button home-product"> View all products </button></NavLink>
   </div>
  );
}

export default HomePlan
