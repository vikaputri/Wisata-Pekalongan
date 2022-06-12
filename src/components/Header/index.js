import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg navbar-light mb-3">
      <div className="container">
        <Navbar.Brand className="text-uppercase px-4">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item text-uppercase px-3" href="/">Destinasi</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/kuliner">Kuliner</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/oleholeh">Oleh-Oleh</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

export default Header;
