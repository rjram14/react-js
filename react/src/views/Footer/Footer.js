import React from 'react';
import './Footer.css';
import {Row, Col, Container} from 'reactstrap';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} xs={12}>
          <Row className="manb">
            <p className="down-manbal">Manbal.Ai</p>
          </Row>
          <Row className="mail">
            <p className="down-manbal">
              <MailOutlineIcon></MailOutlineIcon> &nbsp; info@manbal.ai
            </p>
          </Row>
          <Row className="social">
            <p className="down-manbal">
              <TwitterIcon /> &nbsp; <FacebookIcon /> &nbsp;
              <InstagramIcon /> &nbsp;
              <LinkedInIcon />
            </p>{' '}
          </Row>
          <Row className="copyright">
            <p className="down-manbal">
              © 2020 Manbal.ai | All rights reserved
            </p>
          </Row>
        </Col>
        <Col md={4} xs={12} className="footer-middle">
          <Row>
            <Col xs={6}>
              <Row className="heading">MENU</Row>
              <Row className="sub-heading-top">About Us</Row>
              <Row className="sub-heading">Team</Row>
              <Row className="sub-heading">How to Join</Row>
              <Row className="sub-heading">Contact</Row>
              <Row className="sub-heading">Privacy Policy</Row>
            </Col>
            <Col xs={6}>
              <Row className="heading">TECHNOLOGY</Row>
              <Row className="sub-heading-top">Node js</Row>
              <Row className="sub-heading">Python</Row>
              <Row className="sub-heading">C++</Row>
              <Row className="sub-heading">Scala</Row>
            </Col>
          </Row>
        </Col>
        <Col md={4} xs={12}>
          <Row className="heading">SERVICES</Row>
          <Row className="sub-heading-top">Progressive Web Apps</Row>
          <Row className="sub-heading">Mobile Development</Row>
          <Row className="sub-heading">Web Development</Row>
          <Row className="sub-heading">Machine Learning</Row>
          <Row className="sub-heading">Data Annotation</Row>
          <Row className="sub-heading">Business Intelligence</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
