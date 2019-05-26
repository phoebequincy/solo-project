import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import '../stylesheets/Homestyle.css';
import { Link } from 'react-router-dom';


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
              <Link to="/About">
                <Button className="about" color="link">
                 <i className="fal fa-user-astronaut"></i>
                </Button>
              </Link>
              </Col>

              <Col xs="3">
              <Link to="/Resume">
                <Button className="resume" color="link">
                 <i className="fas fa-file"></i>
                </Button>
              </Link>
              </Col>

              <Col xs="3">
              <Link to="Projects">
                <Button className="projects" color="link">
                 <i className="fal fa-suitcase"></i>
                </Button>
              </Link>
              </Col>

              <Col xs="3">
              <Link to="/Contact">
                <Button className="contact" color="link">
                 <i className="fas fa-comments-alt"></i>
                </Button>
              </Link>
              </Col>

            </Row>
          </Container>
        )
    }
}

export default Home;
