import React, { useContext } from 'react';
import { Container, Icon, Row, Col, Text, Div } from 'atomize';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Navbar = () => {
  const { openCart } = useContext(ShopContext);
  return (

  <Container  p="2rem" >
  <Row >

        <Col size={{xs: 0, sm: 0, md: 0, lg: 1}}>
          <Text> Women </Text>
        </Col>
        <Col size={{xs: 0, sm: 0, md: 0, lg: 1}}>
          <Text> Men </Text>
        </Col>
        <Col bg='black'>
          <Link to="/"><Icon name="Store" size="30px" color="black" /></Link>
        </Col>
        <Col size={{xs: 0, sm: 0, md: 0, lg: 1}}>
          <Icon name="Search" size="30px" cursor="pointer" />
        </Col>
        <Col  size={0}>
          <Icon   onClick={() => openCart()} name="Bag" size="30px" color="black" cursor="pointer"/>
        </Col>
    </Row>
    </Container>
  )
}

export default Navbar
