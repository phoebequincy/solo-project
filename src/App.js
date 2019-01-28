import React, { Component } from 'react';
import './App.css';
import './components/Background';
import './components/Projects';
import './components/Navbar';
import './components/Welcome';

const API = 'http://http://localhost:3000/'

class App extends Component {

  state = {

  }

  async componentDidMount() {
    const response = await fetch(`${API}`)


  }
  render() {
    return (
      <div className="App container-fluid">
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
