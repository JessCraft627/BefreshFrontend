import React, { Component } from 'react';
import Footer from './components/footer'
import Navbar from './components/navbar'
import Slider from './components/header'
import HomePlan from './components/homeplan'
import StepPlan from './components/steps'
import TopPicks from './components/toppicks'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Slider />
       <StepPlan />
       <HomePlan />
       <TopPicks />
       <Footer />
    </div>
    );
  }
}

export default App;
