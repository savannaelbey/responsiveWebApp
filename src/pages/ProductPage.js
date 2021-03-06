import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Text, Div, Button, Row, Col, Container, Anchor } from 'atomize';
import ProductImage from '../components/ProductImage';
import ProductDetails from '../components/ProductDetails';
import SizeDropdown from '../components/SizeDropdown';
import AddToBag from '../components/AddToBag';
import ProductDescription from '../components/ProductDescription';

const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext);
  //console.log(product)
  //console.log(product.options)
  //  console.log(product.options[1])
  // console.log(product.options[1].values)
  // console.log(product.options[1].values.map(size => size.value))
  useEffect(() => {
    fetchProductWithId(id);
    return () => {
    };
  }, [ fetchProductWithId, id ])

  if (!product.title) return <div>loading</div>

  return (
    <Container >
      <Row>
        <Col size={{ xs: "6", sm: "5", md: "4", lg: "3", xl: "3" }} >
          <ProductImage/>
        </Col>
        <Col>
          <ProductDetails/>
          <SizeDropdown/>
          <AddToBag/>
          <ProductDescription/>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductPage
