import React from 'react';
import { Div, Text, Container } from 'atomize';
import ContactBanner from '../components/ContactBanner';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <Container>
      <ContactBanner/>
      <ContactForm/>



    </Container>
  )

}

export default ContactPage;
