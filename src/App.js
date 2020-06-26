import React, { Fragment } from 'react';
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import Cadastrar from './Cadastrar.js';
import Edit from './Edit.js';
import Usuarios from './Usuarios.js';
import Excluir from './Excluir.js';
import Inicial from './Inicial.js';
import Adiciona from './Adiciona.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
          <Route path='/adiciona'>
              <Adiciona></Adiciona>
            </Route>
            <Route path='/excluir'>
              {/* <Edit></Edit> */}
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
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/'>
              <Inicial></Inicial>
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}
