import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBarBoots() {
  const categories = ["moviles", "accesorios"];

  return (
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="light">
        <Container>
        <Link to={'/'}><Navbar.Brand href="logo"><img className='logo' src={'/img/phonelogo.jpg'} alt="logo" /><span>Phonix</span></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Catálogo" id="collasible-nav-dropdown">
              {categories.map((cat) => {
                return <NavDropdown.Item><Link to={`/category/${cat}`}>{cat}</Link></NavDropdown.Item>
              })}
            </NavDropdown>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
          <Nav>
          <CartWidget />
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

  );
}

export default NavBarBoots;