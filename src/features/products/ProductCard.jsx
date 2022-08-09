import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const ProductCard = ({product}) => {
  console.log(product)
    return (
        <Col>
          <Card>
            <Card.Img height={400} variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title.slice(0,20)}</Card.Title>
              <div>
                <p>Price: ${product.price}</p>
              </div>
              <Card.Text>
                {product.description.slice(0,50)}
              </Card.Text>
              <Button variant="info">Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default ProductCard;