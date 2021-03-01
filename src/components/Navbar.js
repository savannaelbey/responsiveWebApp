import React, { useContext } from 'react';
import { Container, Anchor } from 'atomize';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Navbar = () => {
  const { openCart } = useContext(ShopContext);
  return (
    <Container>
      <Link to='/'>Shop</Link>
      <Anchor onClick={() => openCart()}>Shopping Bag</Anchor>
    </Container>
  )
}

export default Navbar
