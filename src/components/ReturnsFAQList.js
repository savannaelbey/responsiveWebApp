import React from "react";
import { Container, Text } from "atomize";
import FAQItem from "./ReturnsFAQItem";

const ReturnsFAQList = () => {
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

export default ReturnsFAQList;
