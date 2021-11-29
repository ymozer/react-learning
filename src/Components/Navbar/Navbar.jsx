import React from 'react'
import { Container, Nav, NavDropdown, Toggle } from 'react-bootstrap'
import { Navbar as Navi } from 'react-bootstrap'
import './Navbar.css'
const logo = './logo192.png'

function Navbar() {
    return (
        <div className='nav-wrapper'>
            <Navi collapseOnSelect bg="dark" variant="dark" expand="lg"> {/**variant="light" is for light bg clolors then costumize with bg prop or any costum css*/}
                <Container>
                    <Navi.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React logo"
                        />
                    </Navi.Brand>
                    <Navi.Toggle aria-controls="responsive-navbar-nav" />
                    <Navi.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                            <NavDropdown title="Catagories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/products/shaggy">Shaggy</NavDropdown.Item>
                                <NavDropdown.Item href="/products/classic">Old School</NavDropdown.Item>
                                <NavDropdown.Item href="/products/modern">Modern</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/products">All Products</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/cart">Cart</Nav.Link>
                            <Nav.Link eventKey={2} href="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navi.Collapse>

                </Container>
            </Navi>
        </div>
    )
}

export default Navbar
