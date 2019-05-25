import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../stylesheets/App.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container id="jumbo">
      <Col>
        <h1 className="display-3" id="about" >A little about me... </h1>
          <div className="img-container">
            <img className="img" id="about"
              src="http://i68.tinypic.com/55493m.png"
              alt=""/>
              <div className="overlay"></div>
          </div>
          <p className="lead"></p>
            <hr className="my-2" />
              <p className="lead"></p>
      </Col>
        <Row>
          <Col xs="6">
            <ul className="list-unstyled">
              <li> - I'm naturally curious and enjoy the learning curve </li>
              <li> - I like to travel, camp and sea kayak</li>
              <li> - I love to design and make things: websites, apps, decor, renovation, arts and crafts</li>
              <li> - I’m collaborative, hard-working and have a good sense of humor</li>
              <li> - I believe in glass half-full, learning from errors, grit and carrying on</li>
            </ul>
          </Col>
          <Col xs="6" className="text-left">
            <Link to="/Resume">
              <Button className="resume" color="link">
               <i className="fas fa-file"></i>
              </Button>
            </Link>
          </Col>
      </Row>
    </Container>
  )
}

export default About;
