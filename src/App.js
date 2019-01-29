import React, { Component } from 'react';
import './App.scss';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

const API = 'http://localhost:3000/'

class App extends Component {
  constructor(){
    super();
    this.state = {
      background: []

  }
}
// componentWillMount(){
//   this.setState
// }


  render() {
    return (
      <div className="App">
      <div className="container">


      </div>
      </div>

    );
  }
}

export default App;
