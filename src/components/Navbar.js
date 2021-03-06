import React, { useContext } from 'react';
import { Container, Icon, Row, Col, Image } from 'atomize';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import logo from "../img/golden-shoe-logo.png";

const Navbar = () => {
  const { openCart } = useContext(ShopContext);
  return (
    <Container  p="1rem" >
      <Row >
        <Col size={{xs: 0, sm: 0, md: 0, lg: 1}}>
          <Link to="/women" style={{ color:'black', textDecoration: 'none', fontWeight: 'bold' }} >Women</Link>
        </Col>
        <Col size={{xs: 0, sm: 0, md: 0, lg: 4}}>
          <Link to="/men" style={{ color:'black', textDecoration: 'none', fontWeight: 'bold' }} >Men</Link>
        </Col>
        <Col>
          <Link to="/"><Image h="3rem" w="8" src={logo}/></Link>
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
