import React, { useContext } from 'react';
import { Div, Button } from 'atomize';
import { ShopContext } from '../context/shopContext';

const AddToBag = () => {
  const { addItemToCheckout, product, openCart } = useContext(ShopContext);
  return (
    <Div>
      <Button w={{ xs: 'auto', md: '10vw' }} m={{ y: '2rem' }} onClick={() => {
        addItemToCheckout(product.variants[0].id, 1);
        openCart();
        }}>
      Add To Bag
      </Button>
    </Div>
  );
}

export default AddToBag;
