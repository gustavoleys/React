import React from 'react';
import './ItemList.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function ItemList({ products }) {
    return (
        <Container>
            <ListGroup>
                <Row>
                    {products.map((product, id) => {
                        return (
                            <Col key={id} md="3">
                                <Link to={`/productos/${product.id}`} className='link'>
                                    <div className='div-list'>
                                        <h5>
                                            {product.name}
                                        </h5>
                                        <h6>
                                            {product.tagline}
                                        </h6>
                                        <img className='image' src={product.image_url} alt={product.id}></img>
                                        <h4>{"$" + product.cost}</h4>
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </ListGroup>
        </Container>
    )
}

export default ItemList;