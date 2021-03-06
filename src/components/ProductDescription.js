import React, { useContext } from 'react';
import { Div, Text } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductDescription = () => {
  const { product } = useContext(ShopContext);
  const description = product.description
  return (
    <Div>
      <Text tag="p" textSize="paragraph" textColor="gray900" textWeight="200">{description}</Text>
    </Div>
  );
}

export default ProductDescription;
