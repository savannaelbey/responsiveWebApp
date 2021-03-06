import React, { useContext } from 'react';
import { Div, Text } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductDetails = () => {
  const { product } = useContext(ShopContext);
  const productTitle = product.title;
  const productPrice = product.variants[0].price;
  const productTaxedPrice = (product.variants[0].price * 1.05).toFixed(2);
  return (
    <Div>
    <Text textColor="black500" textSize='title' textWeight="200" >{productTitle}</Text>
    <Text textWeight="200">£{productTaxedPrice}</Text>
    </Div>
  );
}

export default ProductDetails;
