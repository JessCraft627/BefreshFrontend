import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import './css/products.css';
import './css/iproduct.css';
import './css/login.css';
import './css/loggedhome.css';
import './css/signup.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Login from './components/login'
import Loggedin from './components/loggedin'
import App from './App';
import reducer from './reducers'


const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/loggedin" component={Loggedin} />

      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);
