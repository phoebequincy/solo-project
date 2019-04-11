import React, { Component } from 'react';

class Projects extends Component {



    render() {
        return (
          <div class="row center-cols center-align">
          <h1>Projects</h1>
            <div class="row">
              <div class="col m4">
                <div class="card">
                  <div class="card-image">
                    <img src="#" alt=""/>
                    <span class="card-title"></span>
                  </div>
                  <div class="card-content">
                    <p>A funny fortune-telling app..</p>
                  </div>
                  <div class="card-action">
                    <a href="http://funnycookie.surge.sh/">Funny Cookie</a>
                  </div>
                </div>
              </div>
              <div class="col m4">
                <div class="card">
                  <div class="card-image">
                    <img src="#" alt=""/>
                    <span class="card-title"></span>
                  </div>
                  <div class="card-content">
                    <p>Real-time map Location, ETA and Messaging for dispatched Ambulances and Fire Teams.</p>
                  </div>
                  <div class="card-action">
                    <a href="https://enroute-g106.herokuapp.com/">EnRoute</a>
                  </div>
                </div>
              </div>
              <div class="col m4">
                <div class="card">
                  <div class="card-image">
                    <img src="#" alt=""/>
                    <span class="card-title">Next Cool Project</span>
                  </div>
                  <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div class="card-action">
                    <img src="#" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Projects;
