import React from 'react';
import '../stylesheets/App.css';
import { Container, Col } from 'reactstrap';
import resume from '../assets/resume.png'


const Resume = () => {
  return (
    <Container id="jumbo">
      <Col>
        <h1 className="display-3" id="about" >My Resume </h1>
          <p className="lead"></p>
          <div>
          <img src={resume} alt=""/>
          </div>


      </Col>
    </Container>


  )
}
export default Resume;
