import React from 'react';

import logo from '../logo.svg';
import './Home.css';

export default class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/pages/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
