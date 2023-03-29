import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { createOrder } from '../../Service/DataBase';
import cartContext from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';

function CheckOutCart() {

    const navigateTo = useNavigate();
    const { cart, PriceInCart, removeAll } = useContext(cartContext)
    const total = PriceInCart()
    const [userData, setUserData] = useState({
        name: "",
        location: "",
        cp: "",
        email: "",
        phone: "",
    });
    const DataCart = cart.map(
        (cart) => {
            const QDataCart = `${cart.count} Un., ${cart.name}`
            return QDataCart
        });
    function handleChange(evt) {
        const value = evt.target.value;
        const input = evt.target.name;
        const newUserData = { ...userData };
        newUserData[input] = value;
        setUserData(newUserData);
    }
    async function handleCheckout(userData) {
        const orderData = {
            buyer: userData,
            items: DataCart,
            total: total,
            timestamp: new Date(),
        };
        await createOrder(orderData);
        navigateTo(`/productos`);
    }
    function removeForm() {
        setUserData({
            name: "",
            location: "",
            cp: "",
            email: "",
            phone: "",
        });
    }
    function sweetAlert(nombre, location) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: nombre + ', muchas gracias por tu compra',
            text: 'El producto será enviado a ' + location,
            showConfirmButton: true,
        })
    }
    function submitData() {
        sweetAlert(userData.name, userData.location);
        handleCheckout(userData);
        removeForm();
        removeAll();
    }
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={userData.name}
                        name="name"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control
                        value={userData.phone}
                        name="phone"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location:</Form.Label>
                    <Form.Control
                        value={userData.location}
                        name="location"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>CP:</Form.Label>
                    <Form.Control
                        value={userData.cp}
                        name="cp"
                        type="text"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>E-Mail:</Form.Label>
                    <Form.Control
                        value={userData.email}
                        name="email"
                        type="email"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary"
                    disabled={
                        !(
                            userData.name !== "" &&
                            userData.phone !== "" &&
                            userData.email !== "" &&
                            userData.location !== "" &&
                            userData.cp !== ""
                        )}
                    onClick={submitData}
                >
                    Finalizar Compra
                </Button>
            </Form>
        </Container>
    )
}

export default CheckOutCart
