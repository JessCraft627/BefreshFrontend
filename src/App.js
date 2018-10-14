import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './components/footer'
import Navbar from './components/navbar'
import Slider from './components/header'
import HomePlan from './components/homeplan'
import TopPicks from './components/toppicks'


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

      <HomePlan />

     <TopPicks />
     <Footer />

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
