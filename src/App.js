import React, { Component } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';




class App extends Component {
  constructor(){
    super();
    this.state = {


  }
}

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div>
            <Background

            />
          </div>
          <div>
            <Navbar

            />
          </div>
          <div>
            <Welcome

            />
          </div>
          <div>
            <Projects

            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
