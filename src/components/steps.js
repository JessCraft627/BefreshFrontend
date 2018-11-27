import React from 'react'
import step1 from '../css/assets/step-1.jpg';
import step2 from '../css/assets/step-2.jpg';
import step3 from '../css/assets/step-3.jpg';

function Steps(props) {
  return (
    <main className="home-details">
      <section><img src={step1} className="steps-logo" alt="photo of box" /><p className="home-box-name">Fill your box</p><p className="home-box-info">Choose any combination of delicious superfood eats, developed by a nutritionist and made craveable by a chef.</p></section>
      <section><img src={step2} className="steps-logo" alt="photo of box" /><p className="home-box-name">Check your doorstep</p><p className="home-box-info">Your pre-portioned cups will arrive ready to pop in your freezer + blend, soak or heat on your schedule</p></section>
      <section><img src={step3} className="steps-logo" alt="photo of blender" /><p className="home-box-name">Enjoy in seconds</p><p className="home-box-info">Simply add a liquid base to your cup and blend, soak or heat. No prep, no mess. </p></section>
    </main>
  )
}

export default Steps
