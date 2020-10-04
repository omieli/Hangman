import React, { Component } from 'react';
import Solution from './Components/Solution'
import Score from './Components/Score'
import Letters from './Components/Letters'
import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Solution />
        <Score />
        <Letters />
      </div>
    )
  }
}

export default App;
