import React from "react";
import { Container, Row, Col, Div, Text } from "atomize";
import { Link } from 'react-router-dom'

const CustomerCare = () => {
  return (
    <Container>
      <Div bg="black" >
        <Text textAlign="center" p="1rem" textColor="white" >Customer care</Text>
      </Div>
      <Div bg="gray400" p="2rem" >
        <Row>
        <Col >
            <Link to="/returns" style={{ textDecoration: 'none' }} >Returns</Link>
        </Col>
        <Col >
            <Link to="/delivery" style={{ textDecoration: 'none' }} >Delivery</Link>
        </Col>
        <Col >
            <Text textColor="black600" textWeight="300" textSize='subheader' >Sizing</Text>
        </Col>
        <Col size={0}  >
            <Text textColor="black600" textWeight="300" textSize='subheader' >Contact us</Text>
        </Col>
        </Row>
      </Div>
    </Container>

  )
}

export default CustomerCare;
