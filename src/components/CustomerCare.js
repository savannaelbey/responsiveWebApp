import React from "react";
import { Container, Row, Col, Div, Text } from "atomize";

const CustomerCare = () => {
  return (
    <Container>

      <Row bg="gray200" p="1rem" >
        <Col >
            <Text textColor="black500" textWeight="300" textSize='subheader' >Returns</Text>
        </Col>
        <Col >
            <Text textColor="black500" textWeight="300" textSize='subheader' >Delivery</Text>
        </Col>
        <Col >
            <Text textColor="black500" textWeight="300" textSize='subheader' >Sizing</Text>
        </Col>
        <Col size={0}  >
            <Text textColor="black500" textWeight="300" textSize='subheader' >Contact us</Text>
        </Col>
      </Row>
    </Container>

  )
}

export default CustomerCare;
