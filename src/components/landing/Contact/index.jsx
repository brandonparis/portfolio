  import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';
import taos from 'assets/icons/taos.jpg';
import styled from 'styled-components';

const BG = styled.div`
  background-image: url(${taos});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;


export const Contact = () => (
  <BG>
    <Wrapper as={Container} id="contact">
      <Details>
        <ContactForm />
      </Details>
    </Wrapper>
  </BG>
);
