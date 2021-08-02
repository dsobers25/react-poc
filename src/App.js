import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

class App extends Component {
  render() {
    return(
      <HelloWorld name="Deron" age="25"/>
    );
  }
  
}

export default App;
