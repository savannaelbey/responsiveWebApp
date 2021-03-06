import React from 'react';
import { Div, Text, Container } from 'atomize';
import WomensBanner from '../components/WomensBanner';

const WomensPage = () => {
  return (
    <Container>
      <WomensBanner/>
      <Div p='7rem'>
        <Text textAlign="center" >No Items Added yet</Text>
      </Div>


    </Container>
  )

}

export default WomensPage;
