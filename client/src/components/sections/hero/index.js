import React from 'react';

import {
  HeroWrapper,
  HeroContainer,
  HeroContent,
  HeroItemLeft,
  HeroItemCenter,
  HeroItemRight,
  HeroTitle,
  HeroHeading,
  HeroTalk,
  HeroContact,
  HeroLocation,
  HeroHL,
  HeroSmlHL,
  HeroCerts,
} from './style/hero.style';

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContainer>
          <HeroContent>
            <HeroItemLeft>
              <HeroTitle>
                <HeroHL>M</HeroHL>ason <br /> Roberts
              </HeroTitle>
              <HeroTalk>Web Dev / Web Design / WordPress</HeroTalk>
            </HeroItemLeft>
            <HeroItemCenter>
              <HeroHeading>Welcome</HeroHeading>
            </HeroItemCenter>
            <HeroItemRight>
              <HeroContact to='/contact'>Contact</HeroContact>
            </HeroItemRight>
          </HeroContent>
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};

export default Hero;
