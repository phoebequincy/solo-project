import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import '../stylesheets/App.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container id="jumbo">
      <Col>
        <h1 className="display-3" id="about" >A little about me . . . </h1>
        <div className="img-container">
          <img className="img" id="about"
            src="http://i68.tinypic.com/55493m.png"
            alt=""/>
        <div className="overlay"></div>
      </div>
          <p className="lead"></p>

          <hr className="my-2" />
            <p className="lead"></p>


          <p>
            <Link to="/Resume">
              <Button outline color="secondary">My Resume</Button>
            </Link>
          </p>
      </Col>
    </Container>
  )
}

export default About;
