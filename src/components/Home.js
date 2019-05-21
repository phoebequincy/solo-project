import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import profile from '../assets/profile.png'


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
                    <em>I love building useful applications that help people connect and sharing my enthusiasm for technology!</em>
                  </div>
                  <p className="lead"></p>
                  <hr className="my-2" />
                  <p className="lead"></p>
                    <div>
                    <img src={profile} alt=""/>
                    </div>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Home;
