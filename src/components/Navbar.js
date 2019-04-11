import React, { Component } from 'react';

class Navbar extends Component {



    render() {
        return (
          <nav>
            <div className="nav-wrapper teal lighten-4">
              <a href="/" className="brand-logo main-font black-text m-l"></a>

              <a href="index.html" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

              <ul className="right hide-on-med-and-down">
                <li><a className="grey-text text-darken-5" href="#">About</a></li>
                <li><a className="grey-text text-darken-5" href="#">Projects</a></li>
                    </ul>

                    <div className="mobilenav">
                      <ul className="sidenav" id="mobile-demo">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                      </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar;
