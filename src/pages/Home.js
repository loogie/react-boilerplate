import React from 'react';

import SystemConsole from '../components/Console/SystemConsole';

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
        <SystemConsole />
      </div>
    );
  }
}
