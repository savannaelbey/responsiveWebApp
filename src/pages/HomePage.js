import React, {useContext, useEffect} from 'react';
import {ShopContext} from '../context/shopContext';
import { Text, Div, Row, Col, Container } from "atomize";
import {Link} from 'react-router-dom';
import SubscriptionForm from '../components/SubscriptionForm';
import homepageBackground from '../img/homepage-background.png';

const HomePage = () => {

  return (
    <Container>
      <SubscriptionForm/>
      <Div
          h="35rem"
          bgImg={homepageBackground}
          bgSize="cover"
          bgPos="center"
          shadow="3"
          hoverShadow="4"
          transition="0.3s"
          m={{ b: "0.7rem" }}
          >
      </Div>
    </Container>
  )
}

export default HomePage
