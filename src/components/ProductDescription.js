import React, { useContext } from 'react';
import { Div, Text } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductDescription = () => {
  const { product } = useContext(ShopContext);
  const description = product.description
  return (
    <Div p='0.7rem'>
      <Text p="0.3rem" textColor="black600" textAlign="center" textSize='subheader' textWeight="200">Product description</Text>
      <Text textAlign="center" textSize="paragraph" textColor="gray900" textWeight="200">{description}</Text>
    </Div>
  );
}

export default ProductDescription;
