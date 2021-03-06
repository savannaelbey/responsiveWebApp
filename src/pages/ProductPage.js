import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Col, Container } from 'atomize';
import ProductImage from '../components/ProductImage';
import ProductDetails from '../components/ProductDetails';
import SizeDropdown from '../components/SizeDropdown';
import AddToBag from '../components/AddToBag';
import ProductDescription from '../components/ProductDescription';

const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, product } = useContext(ShopContext);
  // console.log(product)
  // console.log(product.options)
  // console.log(product.options[1])
  // console.log(product.options[1].values)
  // console.log(product.options[1].values.map(size => size.value))
  useEffect(() => {
    fetchProductWithId(id);
    return () => {
    };
  }, [ fetchProductWithId, id ])

  if (!product.title) return <div>loading</div>

  return (
    <Container d='flex' flexDir={{ xs: 'column', lg: 'row' }} >
      <Col p='0'  w={{ xs:'100%', md:'60%'}}>
        <ProductImage/>
      </Col>
      <Col>
        <ProductDetails/>
        <SizeDropdown/>
        <AddToBag/>
        <ProductDescription/>
      </Col>
    </Container>
  )
}

export default ProductPage
