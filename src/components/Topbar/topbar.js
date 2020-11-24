import React from "react";
import { Form, Button, Navbar, Nav, FormControl, Badge } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
export function Topbar(){ 
    return (
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand href="/">Eshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
    <Nav.Link href="/chat">Chat<Badge pill variant="light">1</Badge></Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Signup</Nav.Link>
          </Nav>
          <Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light"><Search /></Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }


