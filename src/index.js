import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import './css/products.css';
import './css/iproduct.css';
import './css/navbar.css';
import './css/login.css';
import './css/loggedhome.css';
import './css/signup.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Login from './components/login'
import Loggedin from './components/loggedin'
import ProductContainer from './components/productcontainer'
import Iproduct from './components/iproduct'
import App from './App';
import reducer from './reducers/name.js'
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/loggedin" component={Loggedin} />
        <Route path="/products" component={ProductContainer} />
        <Route path="/product" component={Iproduct} />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);
