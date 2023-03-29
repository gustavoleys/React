import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../1.2-CartWidget/cartwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import './navbar.css';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
    return (
        <Navbar bg="light" variant="light">
            <Container fluid className='divnav'>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        HopsBear
                    </Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Inicio</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/productos">
                        <Nav.Link>Productos</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <LinkContainer to="/productos/category/gold">
                            <NavDropdown.Item>Gold</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/productos/category/blonde">
                            <NavDropdown.Item>Blonde</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/productos/category/pilsen">
                            <NavDropdown.Item>Pilsen</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/productos/category/ipa">
                            <NavDropdown.Item>IPA</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/productos/category/imperial">
                            <NavDropdown.Item>Imperial</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/productos/category/scotch">
                            <NavDropdown.Item>Scotch</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/productos/category/ale">
                            <NavDropdown.Item>ALE</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/productos/category/porter">
                            <NavDropdown.Item>Porter</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <CartWidget />
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
