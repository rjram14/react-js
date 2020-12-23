import React from 'react';
import './Tabs.css';
import {Nav} from 'react-bootstrap';

function Tabs(data) {
  return (
    <Nav.Link href={data.link} className="tabs">
      {data.name}
    </Nav.Link>
  );
}

export default Tabs;
