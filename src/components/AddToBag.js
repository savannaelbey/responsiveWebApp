import React, { useContext } from 'react';
import { Div, Button } from 'atomize';
import { ShopContext } from '../context/shopContext';

const AddToBag = () => {
  const { addItemToCheckout, product, openCart } = useContext(ShopContext);
  return (
    <Div d='flex' align="center"  justify="center">
      <Button bg='#0077b6'  m={{ y: '0.7rem' }} onClick={() => {
        addItemToCheckout(product.variants[0].id, 1);
        openCart();
        }}>
      Add To Bag
      </Button>
    </Div>
  );
}

export default AddToBag;
