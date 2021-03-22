import React, { useContext } from 'react';
import { Div, Text } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductDetails = () => {
  const { product } = useContext(ShopContext);
  const productTitle = product.title;
  return (
    <Div>
    <Text textColor='black600' textAlign='center' textSize='title' textWeight='200' >{productTitle}</Text>
    <Text textColor='gray900' textAlign='center' textSize='body' textWeight='500' >£{product.variants[0].price}</Text>
    </Div>
  );
}

export default ProductDetails;
