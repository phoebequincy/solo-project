import React from 'react';
import { Container, Col } from 'reactstrap';
import '../stylesheets/App.css';
import Emoji from 'a11y-react-emoji'

const Contact = () => {
  return (
    <Container id="jumbo">
      <Col>
        <h2 className="display-3" id="about" >I'd love to hear from you!</h2>
        <p className="lead"></p>
          <hr className="my-2" />
            <p className="lead"></p>
      </Col>
        <p></p>
          <ul className="list-unstyled">
            <li>Mobile | 303.817.3243</li>

            <li>Email | <a href="mailto:phoebequincy@gmail.com" >phoebequincy@gmail.com</a></li>

            <li>Visit my <a href="https://www.linkedin.com/in/phoebe-quincy/" target="blank">LinkedIn</a></li>
          </ul>
        <p></p>
      <h3>Thanks<Emoji symbol=" 👋 "label="waving-hand"/>for visiting!</h3>
    </Container>
    )
  }

  export default Contact;
