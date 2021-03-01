import React, { useContext } from 'react';
import { Container, Anchor, Icon } from 'atomize';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Navbar = () => {
  const { openCart } = useContext(ShopContext);
  return (
    <Container d="flex" flexDir="row" p="2rem" justify="space-between">
      <Link to='/'>Golden Shoe</Link>
      <Icon onClick={() => openCart()} name="Bag" size="20px" />
    </Container>
  )
}

export default Navbar
