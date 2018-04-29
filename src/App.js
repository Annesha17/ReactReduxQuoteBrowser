import React, { Component } from 'react';
import {AppRouter}  from './components/routers/AppRouter';
//import {fetchQuoteOfTheDay} from './components/services/QuoteService';


import logo from './logo.svg';
//import './App.css';import axios from 'axios';




class App extends Component {

  render() {
    return (
      <div className="AppNew">
       <AppRouter/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
