import React, {useContext, useEffect} from 'react';
// import {ShopContext} from '../context/shopContext';
// import { Container, Text, Div, Row, Col } from 'atomize';
import { useParams} from 'react-router-dom';

const ProductPage = () => {
  let { id } = useParams();
  return (
    <div>
    PRODUCT PAGE
    {id}
    </div>
  )
}

export default ProductPage
