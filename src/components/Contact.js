import React from 'react';
import { Container, Col } from 'reactstrap';
import '../stylesheets/App.css';
import Emoji from 'a11y-react-emoji'
import MessageList from './components/MessageList.js'


const Contact = () => {
  return (
    <Container id="jumbo">
      <Col>
        <h2 className="display-3" id="about" >I'd love to hear from you!</h2>
        <p className="lead"></p>
          <hr className="my-2" />
            <p className="lead"></p>
      </Col>
      There are several ways you can connect with me . . .
      <p></p>
        <li>Mobile | 303.817.3243</li>

        <li>Email | <a href="mailto:phoebequincy@gmail.com" >phoebequincy@gmail.com</a></li>

        <li>Visit my <a href="https://www.linkedin.com/in/phoebe-quincy/" target="blank">LinkedIn</a></li>
      <p></p>
      Or . . . Use in-app sms messaging, Thanks
            <Emoji symbol=" 👋 "label="waving-hand"/>Twilio!
            <img className="red" src='./twilio-mark-red.png'
              alt=""/>

        <div className="message-box">
            <MessageList
              messagelist={this.props.messages}
            />
        </div>
    </Container>

    )
  }

  export default Contact;
