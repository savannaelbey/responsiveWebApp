import React from 'react'
import { Row, Anchor, Container, Icon, Col, Text, Div } from "atomize";

const Footer = () => {
  return (
    <Container>
      <Row p="0.3rem" >
      </Row>
      <Row bg="gray200" p="1rem" >
        <Col >
            <Text textColor="black500" textWeight="300" textSize={{ xs: "tiny", md: "caption" }} >&#9400; Golden Shoe 2021. All rights reserved</Text>
        </Col>
        <Col size={0}>
          <Anchor w={{ xs: 'auto', md: 'auto', sm: "auto", lg: "auto", xl: "auto"  }} href='http://facebook.com' >
            <Icon name="Facebook" size="20px" color="black" hoverColor="info700" />
          </Anchor>
          <Anchor w={{ xs: 'auto', md: 'auto', sm: "auto", lg: "auto", xl: "auto" }} href='http://twitter.com' >
            <Icon name="Twitter" size="20px" color="black" hoverColor="info700"/>
          </Anchor>
          <Anchor w={{ xs: 'auto', md: 'auto', sm: "auto", lg: "auto", xl: "auto" }} href='http://instagram.com' >
            <Icon name="Instagram" size="20px" color="black" hoverColor="info700" />
          </Anchor>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
