import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Quiz from './Quiz.js';

class App extends Component {
  render() {
    return ( <Quiz /> );
  }
}
//ReactDOM.render(<App />, document.getElementById('root'));
export default App;
