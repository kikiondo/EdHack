import React, { Component } from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'
import Registro from './Registro'
import About from '../shared/components/About'

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        { children }
      </div>
    )
  }
}

export default App;
