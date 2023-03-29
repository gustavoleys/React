import React, { useContext } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import cartContext from '../../context/CartContext';
import './CartContainer.css';
import CheckOutCart from './CheckOutCart';

export default function CartContainer() {
  const { cart, PriceInCart, removeItem, CountCart } = useContext(cartContext);
  const cartCount = CountCart();
  const total = PriceInCart();

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <LinkContainer to={"/productos"}>
                <Link className='CardHeader'>
                  <BsFillArrowLeftCircleFill className='Icon' />
                  Continuar Comprando
                </Link>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md="12" className='items'>
                  <Card.Title>
                    Carrito
                  </Card.Title>
                  <Card.Subtitle>
                    {cartCount !== 0 ? `Tienes ${cartCount} elementos en el carrito` : "Tu carrito esta vacio"}
                  </Card.Subtitle>
                  <ListGroup>
                    {cart.map((product) => {
                      return (
                        <ListGroup.Item key={product.id}>
                          <Row>
                            <Col>
                              <img className='image' src={product.image_url} alt={product.id}></img>
                            </Col>
                            <Col>
                              <Card.Title>{product.name}</Card.Title>
                            </Col>
                            <Col>
                              <Card.Subtitle>{product.category}</Card.Subtitle>
                            </Col>
                            <Col>
                              <Card.Subtitle>{product.count} Un.</Card.Subtitle>
                            </Col>
                            <Col>
                              <Card.Subtitle>$ {product.cost}</Card.Subtitle>
                            </Col>
                            <Col>
                              <Button variant="danger" onClick={() => removeItem(product.id)}><RiDeleteBin6Line /></Button>
                            </Col>
                            <Col>
                              <Card.Subtitle>$ {product.cost * product.count}</Card.Subtitle>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )
                    })}
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className='flex-container'>
                    <Card.Title className='card_title'>
                      {total !== 0 ? "Total $ " + total : ""}
                    </Card.Title>
                  </div>
                </Col>
              </Row>
              <div className='flex-container-checkOut'>
                {cartCount !== 0 ?
                  <Col md="6" className='compra'>
                    <Card.Title className='Card.Tit'>
                      Datos personales:
                    </Card.Title>
                    <CheckOutCart />
                  </Col>
                  : ""}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
