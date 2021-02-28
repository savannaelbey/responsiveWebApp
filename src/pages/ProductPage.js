import React, { useContext, useEffect } from 'react';
// import { Container, Text, Div, Row, Col } from 'atomize';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const ProductPage = () => {
  //array destructuring
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
    return () => {

    };
  }, [ fetchProductWithId, id ])

  if(!product) {
    return <div>loading...</div>
  }

  return (
    <div>
    PRODUCT PAGE
    {id}
    </div>
  )
}

export default ProductPage
