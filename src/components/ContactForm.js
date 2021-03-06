import React from "react";
import styled from "styled-components";
import { Button, Input, Label } from 'atomize';
import { useHistory } from "react-router-dom";

const Fieldset = styled.fieldset`
  border-style: solid;
  padding: 0.75rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Select = styled.select`
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  border-radius: 5px;
  text-align: center;
`;

const Form = styled.form`
  width: 300px;
  margin: 5vh auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContactForm = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const contactForm = {
      reason: event.target.elements.reason.value,
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
      contact: event.target.elements.contact.value,
    };
    console.log("contact form", contactForm);
    history.push("/thankyou");
  };
  return (
    <>
      <Form
        onSubmit={(event) => handleSubmit(event)}
        style={{ width: "70%" }}
      >
        <Fieldset>
          <Label htmlFor="reason">Reason for contacting us:</Label>
          <Select id="reason" name="reason">
          <option value="nul">Choose reason</option>
            <option value="returns">Returns query</option>
            <option value="delivery">Delivery query</option>
            <option value="product">Product query</option>
            <option value="order">Order query</option>
            <option value="compliment">Compliment</option>
            <option value="complaint">Complaint</option>
            <option value="other">Other</option>
          </Select>
          <Label htmlFor="name">Name:</Label>
          <Input id="name" type="text" maxLength="30" required />
          <Label htmlFor="email">Email:</Label>
          <Input id="email" type="text" maxLength="30" required />
          <Label htmlFor="number"> Contact number:</Label>
          <Input id="email" type="text" maxLength="30" required />
          <Label htmlFor="message">Message:</Label>
          <Input
            id="message"
            type="text"
            maxLength="300"
            required
            style={{ height: "100px" }}
          />
          <Label htmlFor="reason">
            How would you like to be contacted?
          </Label>
          <Select id="contact" name="contact">
            <option value="choose">Choose option</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </Select>
        </Fieldset>
        <Button >Send Message</Button>
      </Form>
    </>
  );
};

export default ContactForm;
