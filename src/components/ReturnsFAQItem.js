import React from "react";
import { Div, Text } from "atomize";

let question = 'Generate Lorem Ipsum placeholder text?';
let answer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const ReturnsFAQItem = () => {
  return (
    <Div p='0.7rem'>
      <Text textSize="subheader" textAlign="center">{question}</Text>
      <Text textSize="paragraph" textAlign="center">{answer}</Text>
    </Div>
  );
}

export default ReturnsFAQItem;
