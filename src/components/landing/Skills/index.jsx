import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import tazu from 'assets/icons/tazu-crag.jpg';

import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={tazu} alt="I’m Brandon and I’m a Front end engineer!" />
      </Thumbnail>
      <Details>
        <p>
          I am a self-taught, 26 year-old software developer, specializing in JavaScript and
          user interfaces. My hobbies mostly include climbing and hanging out with my 4 year-old 
          Australian shepherd Tazu, but I have been known to enjoy a card game or two.
        </p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
