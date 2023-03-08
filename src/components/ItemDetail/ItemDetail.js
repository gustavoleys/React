import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import './ItemDetail.css';

export default function ItemDetail({products}) {
  return (
    <>
    <Container>
            {products.map((product,id) => {
            return (
            <Container key={id}>
                <Row>
                    <Col>
                            <h1>{product.name}</h1>
                            <h6>{product.tagline}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Image fluid src={product.image_url} alt={product.id}></Image>
                    </Col>
                    <Col md="3">
                            <p>
                                {product.boil_volume.value}
                                {product.boil_volume.unit}
                            </p>
                            <p>{product.tagline}</p>
                    </Col>
                    <Col md="3">
                            <p>
                                {product.boil_volume.value}
                                {product.boil_volume.unit}
                            </p>
                            <p>{product.tagline}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className='descripTittle'>
                            <h4>Decripción:</h4>
                        </div>
                        <div className='descrip'>
                        <p>{product.description}</p>
                        </div>
                    </Col>
                </Row>
                <Table striped bordered  hover size="sm">
                    <h4>Basic</h4>
                    <tbody>
                        <tr>
                            <td>Ibu</td>
                            <td>{product.ibu}</td>
                        </tr> 
                        <tr>
                            <td>Volume</td>
                            <td>{product.volume.value} {product.volume.unit}</td>
                        </tr>
                            <tr>
                                <td>Boil Volume</td>
                                <td>{product.boil_volume.value} {product.boil_volume.unit}</td>
                            </tr>
                            <tr>
                                <td>ABV</td>
                                <td>{product.abv}</td>
                            </tr>
                            <tr>
                                <td>Target FG</td>
                                <td>{product.target_fg}</td>
                            </tr>
                            <tr>
                                <td>Target OG</td>
                                <td>{product.target_og}</td>
                            </tr>
                            <tr>
                                <td>SRM</td>
                                <td>{product.srm}</td>
                            </tr>
                            <tr>
                                <td>PH</td>
                                <td>{product.ph}</td>
                            </tr>
                            <tr>
                                <td>Attenuation Level</td>
                                <td>{product.attenuation_level}</td>
                            </tr>
                        </tbody>
                </Table>
                <Table striped bordered  hover size="sm">
                        <h4>Hops</h4>
                        <tbody>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Unit</th>
                                <th>Add</th>
                                <th>Attribute</th>
                                {product.ingredients.hops.map(hops => 
                                <tr>
                                    <td>{hops.name}</td>
                                    <td>{hops.amount.value}</td>
                                    <td>{hops.amount.unit}</td>
                                    <td>{hops.add}</td> 
                                    <td>{hops.attribute}</td>    
                                </tr>
                                )}
                        </tbody>
                </Table>
                    <Table striped bordered  hover size="sm">
                        <h4>Malta</h4>
                        <tbody>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Unit</th>

                                {product.ingredients.malt.map(malta => 
                                <tr>
                                    <td>{malta.name}</td>
                                    <td>{malta.amount.value}</td>
                                    <td>{malta.amount.unit}</td>    
                                </tr>
                                )}
                        </tbody>
                    </Table>
                
            </Container>
            )})}
    </Container>
    </>
)
}
