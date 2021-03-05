import React from 'react';
import { Div, Text, Container } from 'atomize';
import ContactBanner from '../components/ContactBanner';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  let contactIntro = 'If you still need help after reading our FAQs, you can get in touch with us by filling out the form below. Alternatively, you can send us an email or call our customer helpline between 9am-5pm Monday-Friday.'
  let tel = 'Tel: 020845796546'
  let email = 'Email: contact@goldenshoe.co.uk'
  return (
    <Container>
      <ContactBanner/>
      <Text p='2rem' textAlign="center">{contactIntro}</Text>
      <Text p='0.3rem' textAlign="center">{tel}</Text>
      <Text p='0.3rem' textAlign="center">{email}</Text>
      <ContactForm/>
    </Container>
  )

}

export default ContactPage;
