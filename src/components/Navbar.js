import React, { useContext } from 'react';
import { Container, Icon } from 'atomize';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Navbar = () => {
  const { openCart } = useContext(ShopContext);
  return (
    <Container d="flex" flexDir="row" p="2rem" justify="space-between">
      <Link to="/"><Icon name="Store" size="30px" color="black" hoverColor="info700" /></Link>
      <Icon onClick={() => openCart()} name="Bag" size="30px" color="black" hoverColor="info700" cursor="pointer" />
    </Container>
  )
}

export default Navbar
