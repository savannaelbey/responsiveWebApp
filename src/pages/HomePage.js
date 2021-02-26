import React, {useContext, useEffect} from 'react';
import {ShopContext} from '../context/shopContext';

const HomePage = () => {
  const { test } = useContext(ShopContext);
  return (
    <div>
      HOME
      {test}
    </div>
  )
}

export default HomePage
