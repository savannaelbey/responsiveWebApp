import React from 'react';
import { Text } from 'atomize';

const ThankyouPage = () => {
  let thankyouMessage = 'Thank you for your message, we will be in touch with you shortly.';
  return (
      <Text textAlign='center' p='7rem' textSize={{ xs:'body', md:'title'}} >{thankyouMessage}</Text>
  );
}

export default ThankyouPage;
