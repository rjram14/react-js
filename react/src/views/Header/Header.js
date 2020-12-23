import React from 'react';
import './Header.css';
import {Row, Col, Container} from 'reactstrap';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import Tabs from '../../components/Tabs/Tabs';

function Header() {
  return (
    <Container fluid className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="brand">
          <svg
            width="93"
            height="62"
            viewBox="0 0 93 62"
            fill="none"
            className="d-inline-block align-top"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.4387 5.66844C32.0092 3.18837 35.6272 3.18836 37.1976 5.66844L59.2176 40.4429C60.9041 43.1062 58.9905 46.5829 55.8382 46.5829H11.7982C8.64584 46.5829 6.73228 43.1062 8.41873 40.4429L30.4387 5.66844Z"
              fill="#0278AE"
            />
            <path
              d="M55.8024 5.66844C57.3728 3.18837 60.9908 3.18836 62.5613 5.66844L84.5813 40.4429C86.2677 43.1062 84.3542 46.5829 81.2018 46.5829H37.1618C34.0095 46.5829 32.0959 43.1062 33.7824 40.4429L55.8024 5.66844Z"
              fill="#0278AE"
            />
            <path
              d="M46.5 20.2246L63.0818 46.7072H29.9182L46.5 20.2246Z"
              fill="#FBFBFB"
            />
          </svg>{' '}
          Manbal.Ai
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="m1-auto" className="links">
            <Tabs name="WORK" link="https://google.com" />
            <Tabs name="SERVICES" link="https://google.com" />
            <Tabs name="PROCESS" link="https://google.com" />
            <Tabs name="BLOGS" link="https://google.com" />
            <Tabs name="CONTACT" link="https://google.com" />
            <Tabs name="ABOUT US" link="https://google.com" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
