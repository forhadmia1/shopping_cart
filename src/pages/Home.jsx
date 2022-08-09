import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsView from '../features/products/ProductsView';

const Home = () => {
    return (
        <Container className='mt-4 mb-4'>
            <Row>
                <Col md={8}>
                    <ProductsView/>
                </Col>
                <Col md={4} className='position-fixed end-0'>
                    <h2 className='text-center'>Your Order</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;