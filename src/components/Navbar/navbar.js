import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/cartwidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import './navbar.css';

function NavBar() {

    return (
<>
    <Navbar bg="light" variant="light">
        <Container fluid className='divnav'>
            <Navbar.Brand href="/">
                HopsBear
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">
                    Inicio
                </Nav.Link>
                <Nav.Link href="/productos">
                    Productos
                </Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/gold">Gold</NavDropdown.Item>
                <NavDropdown.Item href="/category/blonde">Blonde</NavDropdown.Item>
                <NavDropdown.Item href="/category/pilsen">Pilsen</NavDropdown.Item>
                <NavDropdown.Item href="/category/ipa">IPA</NavDropdown.Item>
                <NavDropdown.Item href="/category/imperial">Imperial</NavDropdown.Item>
                <NavDropdown.Item href="/category/scotch">Scotch</NavDropdown.Item>
                <NavDropdown.Item href="/category/ale">ALE</NavDropdown.Item>
                <NavDropdown.Item href="/category/porter">Porter</NavDropdown.Item>
            </NavDropdown>
            </Nav>

            <Nav>
                <Nav.Link>
                    <CartWidget />
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
</>
);
}

export default NavBar;
