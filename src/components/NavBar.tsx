import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  NavBar: {
    position: 'fixed',
    backgroundSize: 'cover',
    width: '100%',
    zIndex: 1,
  },
  Cars: {
    textDecoration: 'none',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Navbar className={classes.NavBar} bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Vamstar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
              <NavLink to="/home"
                style={{
                  textDecoration: 'none',
                  color: 'lightgray'
                }}
                activeStyle={{
                  textDecoration: 'none',
                  color: '#fff'
                }}>Cars</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to="/contact"
                style={{
                  textDecoration: 'none',
                  color: 'lightgray'
                }}
                activeStyle={{
                  textDecoration: 'none',
                  color: '#fff'
                }}>Contact Us</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to="/favorites"
                style={{
                  textDecoration: 'none',
                  color: 'lightgray'
                }}
                activeStyle={{
                  textDecoration: 'none',
                  color: '#fff'
                }}>My Favorites</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

