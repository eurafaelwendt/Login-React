import React, { Fragment } from 'react';
import './App.css';
// import Header from './Header.js';
import Login from './Login.js';
import Home from './Home.js';
// import Header from './Header.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <Fragment>
      <Router>
        <div className='container'>
          {/* <Header></Header> */}
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/'>
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}
