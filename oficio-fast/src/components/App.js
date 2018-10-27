import React, { Component } from 'react';
import './App.css';


import Login from './Login/index'
import Registro from './Registro'

import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Registro />
      </div>
    );
  }
}

export default App;
