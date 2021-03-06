import React, { useContext } from 'react';
import { Div } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductImage = () => {
  const { product } = useContext(ShopContext);
  return (
    <Div
        h={{xs:'35rem', sm:'45rem', md: '45rem'}}
        bgImg= {product.images[0].src}
        bgSize='cover'
        bgPos='center'
        shadow='2'
        hoverShadow='4'
        transition='0.3s'
        m={{ b: '0.7rem' }}
        >
    </Div>
  );
}

export default ProductImage;
