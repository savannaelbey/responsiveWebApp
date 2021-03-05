import React from 'react';
import { Text } from 'atomize';

const ThankyouPage = () => {
  let thankyouMessage = 'Thank you!';
  return (
      <Text textAlign='center' p='7rem' textSize={{ xs:'body', md:'title'}} >{thankyouMessage}</Text>
  );
}

export default ThankyouPage;
