import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';




class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div>
            <Navbar
            />
            <Home
            />
            <Projects
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
