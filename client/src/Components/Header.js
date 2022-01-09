import React from "react";

import { Navbar, Nav, Button, Container } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark collapseOnSelect">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Memos Box</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <LinkContainer to="/create">
                <Nav.Link>
                  <Button variant="secondary">Add Moment</Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
