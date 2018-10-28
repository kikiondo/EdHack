import React, { Component } from 'react';



import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Login from './Login/'
import Registro from './Registro'
import About from '../shared/components/About'

class App extends Component {
  render() {
    return (
      <div>
        <Registro />
        
        <Login/>
      </div>
    )
  }
}

export default App;
