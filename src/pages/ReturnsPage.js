import React from 'react';
import { Container, Div, Text } from 'atomize';
import returnsProcess from '../components/ReturnsProcess';
import FAQs from '../components/ReturnsFAQList';

const ReturnsPage = () => {
  return (
    <Container>

      <returnsProcess/>
      <Div>
        <FAQs/>
      </Div>
    </Container>
  );
}

export default ReturnsPage;
