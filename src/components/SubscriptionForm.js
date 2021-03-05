import React, { Component} from 'react';
import { Row, Anchor, Container, Icon, Col, Text, Div, Input, Button } from "atomize";

const SubscriptionForm = () => {

  return (
    <Div bg="gray400" p="2rem">
     <Text textAlign="center" p="1rem" textColor="black400" >Subscribe to receive our newsletter and discount vouchers to use online and instore</Text>
     <Input
       placeholder="Enter your email"
       suffix={
         <Button
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
