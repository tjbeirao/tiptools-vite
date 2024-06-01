import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.scss'

import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar className='navbar justify-content-between' expand="lg">
      <Container className="py-2" id="navbar-container">
        <NavLink style={{ textDecoration: 'none' }} to="/">
          <Navbar.Brand>
            <img className="logo" src="logo/logo_horizontal_transparent.png" alt="logo"/>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link fs-20" to="/about">
              About us
            </NavLink>
            {/* <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link fs-20" to="/program">
              Our Program
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link fs-20" to="/blog">
              Blog
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} className="nav-item nav-link fs-20" to="/contact">
              Contact us
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
