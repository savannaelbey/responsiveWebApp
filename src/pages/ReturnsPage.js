import React from 'react';
import { Container, Div, Text } from 'atomize';
import ReturnsProcess from '../components/ReturnsProcess';
import FAQs from '../components/ReturnsFAQList';
import ReturnsBanner from '../components/ReturnsBanner';

const ReturnsPage = () => {
  return (
    <Container>
      <ReturnsBanner/>
      <ReturnsProcess/>
      <FAQs/>
    </Container>
  );
}

export default ReturnsPage;
