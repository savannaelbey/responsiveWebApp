import React from "react";
import { Div, Text } from "atomize";
import FAQItem from "./ReturnsFAQItem";

const ReturnsFAQList = () => {
  return (
    <Div>
      <Text textAlign='center' textSize='heading'>FAQs</Text>
    </Div>
    <Div>
      <FAQItem/>
      <FAQItem/>
      <FAQItem/>
      <FAQItem/>
    </Div>
  );
}

export default ReturnsFAQList;
