import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> My First React App</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          <a href="/auth/google">Sign in with Google Email</a>
        </header>
      </div>
    );
  }
}

export default App;
