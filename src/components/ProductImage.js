import React, { useContext } from 'react';
import { Div } from 'atomize';
import { ShopContext } from '../context/shopContext';

const ProductImage = () => {
  const { product } = useContext(ShopContext);
  return (
    <Div
        h={{xs:"30rem", sm:"45rem", md: "45rem"}}
        bgImg= {product.images[0].src}
        bgSize="cover"
        bgPos="center"
        shadow="2"
        hoverShadow="4"
        transition="0.3s"
        m={{ b: "0.7rem" }}
        >
    </Div>
  );
}

export default ProductImage;

// Col align="center" size={{ xs: "6", sm: "5", md: "4", lg: "3", xl: "3" }}>
//
// </Col>
//h={{xs:"30rem", sm:"45rem", md: "50rem"}}
//w={{xs:"100%", sm:"100%", md: "100%"}}
// <Col bg="red" w={{ xs:"100%", md:"60%"}}>
//   <ProductImage/>
// </Col>
// <Col bg="green" >
// <ProductDetails/>
// </Col>
