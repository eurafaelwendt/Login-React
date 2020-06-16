import React, { Fragment } from 'react';
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import Cadastrar from './Cadastrar.js';
import Edit from './Edit.js';
import Usuarios from './Usuarios.js';
import Excluir from './Excluir.js';

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
          <Switch>
            <Route path='/excluir'>
              <Edit></Edit>
              <Excluir></Excluir>
            </Route>
            <Route path='/usuarios'>
              <Usuarios></Usuarios>
            </Route>
            <Route path='/edit'>
              <Edit></Edit>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/cadastro'>
              <Cadastrar></Cadastrar>
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
