import React from "react";
import { Div, Text } from "atomize";

const ReturnsBanner = () => {
  return (
    <Div bg="gray400" p="1rem">
      <Text textSize="heading" textAlign="center" p="0.7rem" textColor="black800" style={{fontWeight: 'bold'}} >Returns</Text>
    </Div>
  );
}

export default ReturnsBanner;
