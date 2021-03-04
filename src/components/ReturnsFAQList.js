import React from "react";
import { Div, Container, Text } from "atomize";
import FAQItem from "./ReturnsFAQItem";

const ReturnsFAQList = () => {
  return (
    <Container>
    <Div>
      <Text textAlign='center' textSize='heading'>FAQs</Text>
    </Div>
    <Div>
      <FAQItem/>
      <FAQItem/>
      <FAQItem/>
      <FAQItem/>
    </Div>
    </Container>
  );
}

export default ReturnsFAQList;
