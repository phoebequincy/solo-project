import React from 'react';
import '../stylesheets/App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import resume from '../assets/resume.png'
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <Container id="jumbo">
      <Row>
        <Col>
          <h1 className="display-3" id="about">My Resume </h1>
            <h4>For published applications, go to <Link to="/Projects">
             <Button outline color="secondary">Projects</Button>
            </Link></h4>
             <p className="lead"></p>
              <div>
                <img src={resume} alt=""/>
              </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Resume;
