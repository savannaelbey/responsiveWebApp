import React, { useContext } from 'react';
import { Container, Icon, Row, Col, Text } from 'atomize';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Navbar = () => {
  const { openCart } = useContext(ShopContext);
  return (
    // <Container d="flex" flexDir="row" p="2rem" justify="space-between">
    //   <Link to="/"><Icon name="Store" size="30px" color="black" /></Link>
    //   <Icon onClick={() => openCart()} name="Bag" size="30px" color="black" cursor="pointer" />
    //   <Icon name="Search" size="30px" cursor="pointer" />
    // </Container>
    //


  <Container>
      <Row align="flex-start">
          <Col>
            <Icon name="Menu" size="30px" cursor="pointer" />
          </Col>
          <Col>
            <Text> Women </Text>
          </Col>
          <Col size={1}>
            <Link to="/"><Icon name="Store" size="30px" color="black" /></Link>
          </Col>
          <Col size={1}>
            <Icon name="Search" size="30px" cursor="pointer" />
          </Col>
          <Col size={1}>
            <Icon onClick={() => openCart()} name="Bag" size="30px" color="black" cursor="pointer"/>
          </Col>
      </Row>
    </Container>
  )
}

export default Navbar
