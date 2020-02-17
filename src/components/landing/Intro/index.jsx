import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/icons/syl.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>
          I'm Brandon, <br />
          Full Stack Engineer and climbing enthusiast.
        </h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img style={{opacity: '0.9'}} src={dev} alt="I’m Brandon and I’m a Full Stack Engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
