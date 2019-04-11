import React from 'react';
import {
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Container
 }
from 'reactstrap';

const Projects = (props) => {
  return (
  <Container>
    <Row>
      <p>
        <h1>Projects</h1>
      </p>
    </Row>

    <Row>
    <Col>
      <Card>
        <CardBody>
          <CardTitle>Funny Cookie</CardTitle>
          <CardImg width="20%" src="./funnycookie.png" alt="" />
          <CardText>Get a random funny fortune.</CardText>
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
          <CardText>Good things for dark times.</CardText>
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
