import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import '../stylesheets/App.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container id="jumbo">
      <Col>
        <h1 className="display-3" id="about" >A little about me . . . </h1>
          <p className="lead"></p>
            <ul className="list-unstyled">
              <li>I’ve worked for Galvanize, Inc. in Boulder, Colorado for the last 3 years, most recently as an Evangelist</li>
              <li>In my spare time I like to travel, camp and sea kayak</li>
              <li>I love to design and make things: websites, apps, decor, renovation, arts and crafts</li>
              <li>I’m collaborative, hard-working and have a good sense of humor</li>
              <li>I believe in glass half-full, learning from errors, grit and carrying on</li>
            </ul>
          <p>
            <Link to="/Resume">
              <Button outline color="secondary">My Resume</Button>
            </Link>
          </p>
          <hr className="my-2" />
            <p className="lead"></p>
            <div className="img-container">
              <img
                className="img"
                src="http://i68.tinypic.com/55493m.png"
                alt=""
              />
            <div className="overlay"></div>
          </div>
      </Col>
    </Container>
  )
}

export default About;
