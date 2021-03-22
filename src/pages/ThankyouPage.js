import React from 'react';
import { Text } from 'atomize';

let thankyouMessage = 'Thank you!';

const ThankyouPage = () => {
  return (
      <Text textAlign='center' p='7rem' textSize={{ xs:'body', md:'title'}} >{thankyouMessage}</Text>
  );
}

export default ThankyouPage;
