import React from 'react';
import emailjs from 'emailjs-com';

import {
  ContactWrapper,
  ContactForm,
  ContactInput,
  ContactInputButton,
  ContactTextArea,
  ContactLabel,
} from './style/contact.style';

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_akre7hr',
        'template_c36krrs',
        e.target,
        'user_HoHBVLe2Oc5kqKGS00qd8'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <ContactWrapper>
      <ContactForm className='contact-form' onSubmit={sendEmail}>
        <ContactLabel>Name</ContactLabel>
        <ContactInput type='text' name='user_name' />
        <ContactLabel>Email</ContactLabel>
        <ContactInput type='email' name='user_email' />
        <ContactLabel>Message</ContactLabel>
        <ContactTextArea name='message' />
        <ContactInputButton type='submit' value='Send' />
      </ContactForm>
    </ContactWrapper>
  );
};

export default ContactUs;
