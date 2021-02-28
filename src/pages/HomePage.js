import React, {useContext, useEffect} from 'react';
import {ShopContext} from '../context/shopContext';
import { Container, Text, Div, Row, Col } from 'atomize';
import {Link} from 'react-router-dom';

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(()=> {
    fetchAllProducts()
    return () => {

    };
  }, [fetchAllProducts])

  if(!products) {
    return <div>loading...</div>
  }
  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={products.id} size="3" >
            <Link to={`/product/${product.id}`}>
              <Div p="2rem">
                <Div
                  h="20rem"
                  bgImg={product.images[0].src}
                  bgSize="cover"
                  bgPos="centre centre"
                />
                <Text>{product.title}</Text>
                <Text>{product.variants[0].price}</Text>
              </Div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomePage
