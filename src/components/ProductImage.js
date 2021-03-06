import React, { useContext } from 'react';
import { Div, Container } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductImage = () => {
  const { product } = useContext(ShopContext);
  return (
    <Div d="flex"
        h="20rem"
        bgImg= {product.images[0].src}
        bgSize="cover"
        bgPos="center"
        shadow="3"
        hoverShadow="4"
        transition="0.3s"
        w="100%"
        m={{ b: "0.7rem" }}
        >
    </Div>
  );
}

export default ProductImage;
