import React from "react";
import { Text, Container } from "atomize";
import FAQItem from "./DeliveryFAQItem";

const DeliveryFAQList = () => {
  return (
    <Container>
      <Text p='1rem' textAlign='center' textSize='heading' style={{ fontWeight: 'bold' }}>FAQs</Text>
      <FAQItem/>
      <FAQItem/>
      <FAQItem/>
      <FAQItem/>
    </Container>
  );
}

export default DeliveryFAQList;
