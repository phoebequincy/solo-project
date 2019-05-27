import React from 'react';
import { Container, Col, Button } from 'reactstrap';
import '../stylesheets/App.css';
import { Link } from 'react-router-dom';
import profile from '../assets/AboutIco.png';
import about from '../assets/aboutpic.png';

const About = () => {
  return (
    <Container id="jumbo">

      <h1 className="display-3" id="about"><img src={about} alt=""/> A little about me...</h1>
        <Col xs="6">
          <div className="img-container">
            <img src={profile} alt=""/>
              <div className="overlay"></div>
          </div>
        </Col>
        <Col xs="6">
          <p></p>
          <h3>View my <Link to="/Resume">
           <Button outline color="secondary">Resume</Button>
          </Link></h3>
        </Col>
      <Col>
      <p className="lead"></p>
        <hr className="my-2" />
          <p className="lead"></p>

      <h3>Who am I?</h3>
        <p>Hi, I’m Phoebe. I’m a software developer, English major, veteran marketing manager, communications specialist, certified Montessori pre-K and Kindergarten teacher, event organizer, public speaker, tech nerd, and mom of two teens. </p>

      <h3>What I do</h3>
        <p>I’m a full stack web developer - I have the functional knowledge and ability to take a concept and turn it into a complete website or application. I work with databases, write CRUD routes, design in HTML, CSS, and React. My language of choice is JavaScript, although I know some Python and am learning more. My latest tech crush is on communications API integration. I’ve been writing content for 20+ years and have written content for newsletters, emails, journalism, social media, collateral materials, packaging, websites, and technical documentation. I create and strategize campaigns, develop relationships, build community, manage people and processes, oversee budgets, analyze data, organize and lead events. I eat popcorn for dinner.</p>

        <h3>My story</h3>
          <p>I started out working in retail sales and customer service, bootstrapping myself into the marketing world with my writing skills and chutzpah. After helping to build Silk Soymilk to a billion dollar brand and having started my family, I began to explore the educational side of things. I volunteered in my children’s preschool classroom, fell in love with the Montessori method, and felt I’d found my calling. The Montessori Method taught me problem-solving skills from a variety of angles, which I use in my coding daily.</p>

          <p>After teaching for several years, I switched into higher education and worked in admissions and enrollment for Galvanize, where I was daily inspired by the students who went through the web development and data science boot camps. After taking a night class in JavaScript, I was hooked and decided to make the leap myself. I am proud to be a recent graduate of a 6-month web development immersive at Galvanize, Boulder. I can’t miss this opportunity to publicly thank my former team at Galvanize who cheered and supported me while I transitioned out of my role in Evangelism into my boot camp, and beyond.</p>

          <p>My unique background makes me a bit of a jack-of-all-trades, but my happy place is to be writing, teaching, coding, and campaigning. I love working cross-organizationally and being a hub of communication and data between teams. If you’re looking for someone to write, evangelize, advocate, educate or help manage and build community around your software or technology product, I am looking for a great team to join and call home!</p>

          <h3>I believe in...</h3>
            <ul className="list-unstyled">
              <li> - Empowerment through learning and growth</li>
              <li> - Enthusiasm and positivity</li>
              <li> - Innovation and adaptability</li>
              <li> - Support, appreciation, and humility</li>
              <li> - Openness and transparency</li>
              <li> - Partnership and ownership</li>
              <li> - Open source software</li>
              <li> - Coffee</li>
            </ul>
      </Col>
    </Container>
  )
}

export default About;
