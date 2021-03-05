import React from "react";
import { Div, Text } from "atomize";

const ContactBanner = () => {
  return (
    <Div bg="gray400" p="1rem">
      <Text textSize="heading" textAlign="center" p="0.7rem" textColor="black900" style={{ fontWeight: 'bold' }} >Contact</Text>
    </Div>
  );
}

export default ContactBanner;
