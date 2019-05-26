import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


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

          <Route path="/Resume"
            component={()=>
              <Resume
              />}
          />

          <Route path="/Projects"
            component={()=>
              <Projects
              />}
          />

          <Route path="/Contact"
            component={()=>
              <Contact
              />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
