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
            <Link to="/returns" style={{ color: 'black', textDecoration: 'none' }} >Returns</Link>
        </Col>
        <Col >
            <Link to="/delivery" style={{ color: 'black', textDecoration: 'none' }} >Delivery</Link>
        </Col>
        <Col >
            <Link to="/sizing" style={{ color: 'black', textDecoration: 'none' }}>Sizing</Link>
        </Col>
        <Col size={0}  >
            <Link to="/contact" style={{ color: 'black', textDecoration: 'none' }}>Contact</Link>
        </Col>
        </Row>
      </Div>
    </Container>

  )
}

export default CustomerCare;
