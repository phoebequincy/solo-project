import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import '../stylesheets/App.css';

const About = () => {
  return (
    <Container id="jumbo">
    <Col>
      <h1 id="about">A little about me . . . </h1>
      <p className="lead">I'm a software developer and technical evangelist that specializes in creating community, breaking down technical concepts and promoting technology.</p>

      <hr className="my-2" />
      <p> blah blah blah </p>
      <p className="lead">
        <Button color="secondary">My Resume</Button>
      </p>
    </Col>
    </Container>
  )
}

export default About;
