import React from 'react';
import DeliveryInfo from '../components/DeliveryProcess';
import FAQs from '../components/DeliveryFAQList';
import DeliveryBanner from '../components/DeliveryBanner';
import { Container } from 'atomize';

const DeliveryPage = () => {
  return (
    <Container>
      <DeliveryBanner/>
      <DeliveryInfo/>
      <FAQs/>
    </Container>

  )
}

export default DeliveryPage;
