import React from 'react'
import { Row, Anchor, Container, Icon } from "atomize";

const Footer = () => {
  return (
    <Container>
    <Row border={{ t: '2px solid' }} p="1rem" borderColor="gray300">
        <Anchor w={{ xs: 'auto', md: 'auto', sm: "auto", lg: "auto", xl: "auto"  }} href='http://facebook.com' rel="noopener noreferrer">
            <Icon name="Facebook" size="20px" color="black" hoverColor="info700" />
        </Anchor>
        <Anchor w={{ xs: 'auto', md: 'auto', sm: "auto", lg: "auto", xl: "auto" }} href='http://twitter.com' rel="noopener noreferrer">
            <Icon name="Twitter" size="20px" color="black" hoverColor="info700"/>
        </Anchor>
        <Anchor w={{ xs: 'auto', md: 'auto', sm: "auto", lg: "auto", xl: "auto" }} href='http://instagram.com' rel="noopener noreferrer">
            <Icon name="Instagram" size="20px" color="black" hoverColor="info700" />
        </Anchor>
    </Row>
    </Container>
  )
}

export default Footer
