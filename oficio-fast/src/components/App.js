import React, { Component } from 'react';
import logo from '../logo.svg';
import Login from './Login/index'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
