import React, { Component } from 'react';
import '../stylesheets/App.css';

class Home extends Component {



    render() {
        return (
          <div className="welcome" id="welcome">
            <p></p>
              <h1 className="display-3 animated fadeInDown delay-1s">Hi, I'm Phoebe</h1>
              software developer | technical evangelist
            <p></p>
            
            <div className="animated slideInRight delay-2s">
              <em>I love building beautiful and useful applications in JavaScript and sharing my enthusiasm for technology!</em>
            </div>
          </div>
        )
    }
}

export default Home;
