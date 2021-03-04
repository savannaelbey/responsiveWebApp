import React from 'react';
import deliveryInfo from '../components/DeliveryProcess';
import FAQs from '../components/DeliveryFAQList';
import { Container, Div } from 'atomize';

const DeliveryPage = () => {
  return (
    <Div>
      <deliveryInfo/>
      <FAQs/>
    </Div>

  )
}

export default DeliveryPage;
