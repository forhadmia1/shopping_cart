import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productsSlice';
import ProductCard from './ProductCard';
import { Row } from 'react-bootstrap';

const ProductsView = () => {
    const {isLoading,products,error}= useSelector((state)=> state.products)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    if(isLoading){
        return <p>Loading....</p>
    }

    return (
        <Row xs={1} md={2} className="g-4">
           {
            products.map(product=> <ProductCard
                product={product}
            />)
           }
        </Row>
    );
};

export default ProductsView;