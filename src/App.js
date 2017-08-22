import React, { Component } from 'react';
import logo from './static/logo.svg';
import './App.css';
import { ImageBox, NameBox, SimpleSlider1 } from './components/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <SimpleSlider1 />
      </div>
    )
  }
}


export default App;