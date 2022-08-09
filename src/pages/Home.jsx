import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsView from '../features/products/ProductsView';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <ProductsView/>
                </Col>
                <Col md={4}>
                    <h2 className='text-center'>Your Order</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;