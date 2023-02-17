import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './css/ItemListContainer.css';

const marcas = [
    {Id: "1",
    marca: "Ford",
    img: "./img/1.png"},
    {Id: "2",
    marca: "Fiat",
    img: "./img/2.png"},
    {Id: "3",
    marca: "Volkswagen",
    img: "./img/3.png"}
]


function ListMarca() {
    const [toggle, setToggle] = useState("1");
    return (
            <>
                <Container>
                <ListGroup>
                    {marcas.map(({Id, marca, img}) => {
                return (
                    <Row>
                        <Col md="3">
                            <ListGroup.Item action href="" onClick={() => setToggle(Id)}>
                            {marca}
                            </ListGroup.Item>
                        </Col>
                        <Col md="9">
                            <ListGroup> 
                                {toggle === Id ? (<><img src={img} key={Id} className="imagen"/></>) : null}
                            </ListGroup>
                        </Col>
                    </Row>
                )})}
                </ListGroup>
                </Container>
            </>
            )
}

export default ListMarca;