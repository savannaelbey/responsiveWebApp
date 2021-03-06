import React from 'react';
import { Container, Text, Div } from 'atomize';
import SizingBanner from '../components/SizingBanner';

const SizingPage = () => {
  return (
    <Container>
      <SizingBanner/>
      <Div p='7rem'>
        <Text textAlign="center">Sizing guide goes here</Text>
      </Div>
    </Container>
  );
}

export default SizingPage;
