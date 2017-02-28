import React, { Component } from 'react';
import Bars from './containers/bars'
import './App.css';


const styles = {
  textAlign: 'center',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
          <div className="jumbotron">
            <h1>Happy Hour!</h1>
            <p>Find which bars in Melbourne have the best happy hour deals.</p>
            <p>Developed by <a href="http://jjs.life" target="_blank">John Williamson.</a></p>
          </div>
        <Bars />
      </div>
    );
  }
}

export default App;
