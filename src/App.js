import React, { Component } from 'react';
import {Header}  from './components/header/Header';
import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="AppNew">
       <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;