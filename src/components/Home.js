import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import '../stylesheets/Homestyle.css';


class Home extends Component {

    render() {
        return (
          <Container>
            <Row>
              <Col className="welcome" id="welcome">
                <p></p>
                  <h1 className="display-3 animated fadeInDown delay-1s">Hi, I'm Phoebe</h1>
                  software developer | technical evangelist
                <p></p>
                  <div className="animated slideInLeft delay-2s">
                    <em>I love building beautiful and useful applications that connect people, and sharing my enthusiasm for technology!</em>
                  </div>
                  <p className="lead"></p>
                  <hr className="my-2" />
                  <p className="lead"></p>

              </Col>
            </Row>
            <Row className="iconbar">
              <Col xs="3">
                <Button className="a1" color="link">
                 <a href="#"></a>
                </Button>
              </Col>

              <Col xs="3">
                <Button className="a2" color="link">
                 <a href="#"></a>
                </Button>
              </Col>

              <Col xs="3">
                <Button className="a3" color="link">
                 <a href="#"></a>
                </Button>
              </Col>

              <Col xs="3">
                <Button className="a4" color="link">
                 <a href="#"></a>
                </Button>
              </Col>
              
            </Row>
          </Container>
        )
    }
}

export default Home;
