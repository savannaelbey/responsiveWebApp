import React from "react";
import { Container, Row, Col, Div, Text } from "atomize";

const CustomerCare = () => {
  return (
    <Container>
      <Div bg="black" >
        <Text textAlign="center" p="1rem" textColor="white" >Customer care</Text>
      </Div>
      <Div bg="gray400" p="2rem" >
        <Row>
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
      </Div>
    </Container>

  )
}

export default CustomerCare;
