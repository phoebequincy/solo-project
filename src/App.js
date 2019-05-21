import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';


class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <NavBar />
            <Route path="/"
              exact component={Home}
            />

          <Route path="/About"
            component={()=>
              <About
              />}
          />

          <Route path="/Projects"
            component={()=>
              <Projects
              />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
