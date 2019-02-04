import React, { Component } from 'react';
import '../App.css';

class Welcome extends Component {



    render() {
        return (
          <div className="welcome">
            <p></p>
              <h1 className="animated fadeInDown delay-1s">Hi, I'm Phoebe</h1>
              software developer | montessori teacher | mom
            <p></p>

              <em>I really like building beautiful and useful applications.</em>
          </div>
        )
    }
}

export default Welcome;
