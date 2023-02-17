import './css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { HiOutlineShoppingCart } from "react-icons/hi";

function NavBar() {
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">TheCars</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Nuevos</Nav.Link>
                <Nav.Link href="#home">Usados</Nav.Link>
            </Nav>
                <div className='cart-widget'>
                <HiOutlineShoppingCart/>
                    <div className="cart-num">5</div>
                </div>
        </Container>
        </Navbar>
        </>
    );
}

export default NavBar;
