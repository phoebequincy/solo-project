import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import '../stylesheets/App.css';

const About = () => {
  return (
    <Container id="jumbo">
      <Col>
        <h1 className="display-3" id="about" >A little about me . . . </h1>
          <p className="lead"></p>
            <ul className="list-unstyled">
              <li>I’ve worked for Galvanize, Inc. for the last 3 years, most recently as an Evangelist</li>
              <li>In my spare time I like to travel, camp and sea kayak</li>
              <li>I love to design and make things: websites, apps, decor, renovation, arts and crafts</li>
              <li>I’m collaborative, hard-working and have a good sense of humor</li>
              <li>I believe in glass half-full, learning from errors, grit and carrying on</li>
              <li>I’m looking for a team I can call home</li>
           </ul>

          <div className="img-container">
            <img className="img"
            src="http://i68.tinypic.com/55493m.png" alt=""/>
            <div className="overlay"></div>
          <p>
           <Button href="/Projects.js" outline color="secondary">My Resume</Button>
          </p>

          <hr className="my-2" />
            <p className="lead"></p>
          </div>
      </Col>
    </Container>
  )
}

export default About;
