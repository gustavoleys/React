import React, { useContext } from 'react';
import cartContext from '../../context/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import ItemCount from '../3.1.1-ItemCount/ItemCount';
import './ItemDetail.css';
import { useNavigate } from 'react-router-dom';

export default function ItemDetail({ products }) {

    const navigateTo = useNavigate();
    const { addItem } = useContext(cartContext);
    console.log(products);
    function addtocart(count) {
        addItem(products, count);
        navigateTo(`/productos`);
    }
    return (
        <Container>
            <Row>
                <Col md="6" className='colImgDetail'>
                    <Image className='imgdetail' fluid src={products.image_url} alt={products.id}></Image>
                </Col>
                <Col md="6">
                    <Row>
                        <Col className='colTittleDetail'>
                            <h1>{products.name}</h1>
                            <h6>{products.tagline}</h6>
                            <h1>${products.cost}</h1>
                            <h6>Cantidad:</h6>
                            <div>
                                <ItemCount addCart={addtocart} initial={1} stock={products.stock} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <div className='descripTittle'>
                        <h4>Decripción:</h4>
                    </div>
                    <div className='descrip'>
                        <p>{products.description}</p>
                    </div>
                </Col>
            </Row>
            <h4>Basic</h4>
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <td>Ibu</td>
                        <td>{products.ibu}</td>
                    </tr>
                    <tr>
                        <td>Volume</td>
                        <td>{products.volume.value} {products.volume.unit}</td>
                    </tr>
                    <tr>
                        <td>Boil Volume</td>
                        <td>{products.boil_volume.value} {products.boil_volume.unit}</td>
                    </tr>
                    <tr>
                        <td>ABV</td>
                        <td>{products.abv}</td>
                    </tr>
                    <tr>
                        <td>Target FG</td>
                        <td>{products.target_fg}</td>
                    </tr>
                    <tr>
                        <td>Target OG</td>
                        <td>{products.target_og}</td>
                    </tr>
                    <tr>
                        <td>SRM</td>
                        <td>{products.srm}</td>
                    </tr>
                    <tr>
                        <td>PH</td>
                        <td>{products.ph}</td>
                    </tr>
                    <tr>
                        <td>Attenuation Level</td>
                        <td>{products.attenuation_level}</td>
                    </tr>
                </tbody>
            </Table>
            <h4>Hops</h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Unit</th>
                        <th>Add</th>
                        <th>Attribute</th>
                    </tr>
                </thead>
                <tbody>
                    {products.ingredients.hops.map(hops =>
                        <tr key={hops.name + hops.amount.value}>
                            <td>{hops.name}</td>
                            <td>{hops.amount.value}</td>
                            <td>{hops.amount.unit}</td>
                            <td>{hops.add}</td>
                            <td>{hops.attribute}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <h4>Malta</h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {products.ingredients.malt.map(malta =>
                        <tr key={malta.name}>
                            <td>{malta.name}</td>
                            <td>{malta.amount.value}</td>
                            <td>{malta.amount.unit}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}
