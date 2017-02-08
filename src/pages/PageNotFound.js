import React from 'react';

import './Home.css';

export default class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>404 Error Page Not Found</h2>
        </div>
        <p className="App-intro">
          We are sorry, but we cannot find your page.
        </p>
      </div>
    );
  }
}
