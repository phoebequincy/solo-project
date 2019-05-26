import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import MessageList from './components/MessageList';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  handleNewMessage = (text) => {
      this.setState({
        messages: [...this.state.messages, { me: true, author: "Me", body: text }],
      })
    }

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

          <Route path="/MessageList"
            component={()=>
              <MessageList
                MessageList messages={this.state.messages}
              />}
          />

          <Route path="/MessageForm"
            component={()=>
              <MessageList
                MessageForm onMessageSend={this.handleNewMessage}
              />}
          />

        </Router>
      </div>
    );
  }
}

export default App;
