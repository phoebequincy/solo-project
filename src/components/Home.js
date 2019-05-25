import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
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
              <div className="a1">
              <a href="#"></a>
              </div>
            </Row>

          </Container>
        )
    }
}

export default Home;
