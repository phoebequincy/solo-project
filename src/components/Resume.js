import React from 'react';
import '../stylesheets/App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import resume from '../assets/resume.png'
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <Container id="jumbo">
      <Row>
        <Col sm="8">
          <h1 className="display-3" id="about">My Resume </h1>
            <p className="lead"></p>
              <div>
              <img src={resume} alt=""/>
              </div>
        </Col>

        <Col sm="4 text-center">
          <Link to="Projects">
            <Button className="projects" color="link" label="Check out my projects!">
             <i class="fal fa-suitcase"></i>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
export default Resume;
