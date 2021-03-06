import React from 'react';
import { Text, Div, Input, Button } from "atomize";
import { useHistory } from "react-router-dom";

const SubscriptionForm = () => {
  const history = useHistory();
  const handleSubscribe = (event) => {
    event.preventDefault();
    const emailForm = {
      email: event.target.value
    };
    console.log("email form", emailForm);
    history.push("/thankyou");
  };
  const header = 'Subscribe to receive our newsletter and discount vouchers to use online and instore';
  return (
    <Div bg="gray400" p="2rem">
     <Text textAlign="center" p="1rem" textColor="black400" >{header}</Text>
     <Input
      type="email"
      name="email"
      placeholder="Enter your email"
      suffix={
        <Button onClick={(event) => handleSubscribe(event)}
          pos="absolute"
          bg="black"
          top="0"
          right="0"
          rounded={{ r: "md" }}
        >
          Subscribe
        </Button>
      }
    />
   </Div>
  );
}

export default SubscriptionForm;
