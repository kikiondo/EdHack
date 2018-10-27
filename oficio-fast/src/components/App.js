import React, { Component } from 'react';
import logo from '../logo.svg';
import Login from './Login/index'
import './App.css';
import Registro from './Registro'

import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Login/>
      </div>
    );
  }
}

export default App;
