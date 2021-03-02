import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Text, Div, Button, Row, Col, Container } from 'atomize';

const ProductPage = () => {
  //array destructuring
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
          <Div d="flex"
              h="20rem"
              bgImg={product.images[0].src}
              bgSize="cover"
              bgPos="center"
              shadow="3"
              hoverShadow="4"
              transition="0.3s"
              w="100%"
              m={{ b: "0.7rem" }}
              >
          </Div>
        </Col>
        <Col>
          <Text tag="h1" textColor="black500" textWeight="200" m={{ y: '2rem' }}>{product.title}</Text>
          <Text tag="h3" m={{ y: '2rem' }} textWeight="200">£{(product.variants[0].price * 1.05).toFixed(2)}</Text>
          <Text tag="p" textSize="paragraph" textColor="gray900" textWeight="200">{product.description}</Text>
          <Button m={{ y: '2rem' }} onClick={() => {
            addItemToCheckout(product.variants[0].id, 1);
            openCart();
            }}>
            Add To Bag
          </Button>
        </Col>

      </Row>
    </Container>
  )
}

export default ProductPage
