import React from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    }
from 'reactstrap';
import '../stylesheets/Footerstyle.css';
import Emoji from 'a11y-react-emoji';


export default class Footer extends React.Component {

render() {
    return(
      <div className="fixed-bottom">
          <Navbar color="light" light>
              <Container>
                  <NavbarBrand>
                      <span className="footercopy">&copy; 2019 Made with
                        {' '}
                        <Emoji symbol="💪"label="Flexed Biceps"/>
                        by Phoebe Quincy</span>
                  </NavbarBrand>
              </Container>
          </Navbar>
      </div>
    )
  }
}
