import React, {useContext, useEffect} from 'react';
import {ShopContext} from '../context/shopContext';
import { Text, Div, Row, Col, Container } from 'atomize';
import {Link} from 'react-router-dom';
import MensBanner from '../components/MensBanner';

const MensPage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(()=> {
    fetchAllProducts()
    return () => {

    };
  }, [fetchAllProducts])

  if(!products) {
    return <div>loading</div>
  }

  return (
    <Container>
      <MensBanner/>
      <Row >
      {products.slice(0,4).map(product => (
        <Col key={product.id} size={{ xs: '6', sm: '5', md: '4', lg: '3', xl: '3' }}>
            <Link to={`/men/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Div p='1rem'>
                    <Div
                        h='20rem'
                        bgImg={product.images[0].src}
                        bgSize='cover'
                        bgPos='center'
                        shadow='3'
                        hoverShadow='4'
                        transition='0.3s'
                        m={{ b: '0.7rem' }}
                        >
                    </Div>
                    <Text tag='h1' textWeight='300' textAlign='center' textSize='subheader' textDecor='none' textColor='black500'>{product.title} </Text>
                    <Text tag='h2' textWeight='500' textAlign='center' textSize='body' textDecor='none' textColor='gray500'>£{(product.variants[0].price * 1.05).toFixed(2)}</Text>
                </Div>
            </Link>
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default MensPage;
