import React from 'react';
import '../stylesheets/Projectstyle.css';
import {
  Col,
  Row,
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Container
 }
from 'reactstrap';
import { Link } from 'react-router-dom';
import projects from '../assets/projectsico.png';


const Projects = (props) => {
  return (
  <Container className="cards">
    <Col>
        <h1 className="display-3"><img src={projects} alt=""/> My Projects</h1>
        <p>Intrigued? Contact me!</p>
          <Link to="/Contact">
            <Button outline color="secondary">Contact</Button>
         </Link>
        <p></p>
    </Col>

    <Row>
      <Col>
        <Card>
        <CardBody>
          <CardTitle>Funny Cookie</CardTitle>
          <CardImg width="20%" src="./funnycookie.png" alt="" />
          <CardText>Provides a daily hit of humor through random, funny fortunes.</CardText>
          <CardLink href="http://funnycookie.surge.sh/">Website</CardLink>
          <CardLink href="https://github.com/phoebequincy/funnycookie">GitHub</CardLink>
        </CardBody>
      </Card>
    </Col>

    <Col>
      <Card>
        <CardBody>
          <CardTitle>EnRoute</CardTitle>
          <CardImg width="20%" src="./enroutemobile.png" alt="" />
          <CardText>Real-time mapping and messaging for fire crews and private AMS for improved response time.</CardText>
          <CardLink href="http://enroute-g106.herokuapp.com">Website</CardLink>
          <CardLink href="https://github.com/phoebequincy/EnRoute">GitHub</CardLink>
        </CardBody>
      </Card>
    </Col>

    <Col>
      <Card>
        <CardBody>
          <CardTitle>Acorns</CardTitle>
          <CardImg width="20%" src="./acorns.png" alt="" />
          <CardText>A store-house for inspiration and wisdom when you are struggling to get through difficult times.</CardText>
          <CardLink href="http://theacornstash.surge.sh/">Website</CardLink>
          <CardLink href="https://github.com/phoebequincy/acorns">GitHub</CardLink>
        </CardBody>
      </Card>
    </Col>
      </Row>
    </Container>
  );
};

export default Projects;
