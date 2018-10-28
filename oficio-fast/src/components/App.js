import React, { Component } from 'react';

import Login from './Login/'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Login from './Login/index'
import Registro from './Registro'
import About from '../shared/components/About'

class App extends Component {
  render() {
    return (
      <div>
        <Registro />
      </div>
    )
  }
}

export default App;
