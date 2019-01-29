import React, { Component } from 'react';
import './App.css';
import './components/Background';
import './components/Navbar';
import './components/Welcome';

const API = 'http://localhost:3000/'

class App extends Component {
  constructor(){
    super();
    this.state = {
      background: 

  }

componentWillMount(){
  this.setState
}


  render() {
    return (
      <div className="App">
        <Background
          parallax={this.state.background}/>

        <Navbar />

        <Welcome />

      </div>

    );
  }
}

export default App;
