import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar sticky="top" id="header">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    <Nav.Link href="/blog">Blog</Nav.Link>
  </Navbar>
);

export default Header;
