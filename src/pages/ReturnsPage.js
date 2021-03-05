import React from 'react';
import { Container, Div, Text } from 'atomize';
import ReturnsProcess from '../components/ReturnsProcess';
import FAQs from '../components/ReturnsFAQList';

const ReturnsPage = () => {
  return (
    <Container>

      <ReturnsProcess/>
      <Div>
        <FAQs/>
      </Div>
    </Container>
  );
}

export default ReturnsPage;
