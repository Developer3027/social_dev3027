import React from 'react';

import {
  HeroContainer,
  HeroContent,
  HeroItemLeft,
  HeroItemRight,
  HeroTitle,
  HeroHeading,
  HeroTalk,
  HeroLocation,
  HeroHL,
  HeroSmlHL,
  HeroCerts,
} from './style/hero.style';

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroItemLeft>
            <HeroTitle>
              <HeroHL>M</HeroHL>ason <br /> Roberts
            </HeroTitle>
            <HeroTalk>Web Dev / Web Design / WordPress</HeroTalk>
          </HeroItemLeft>
          <HeroItemRight>
            <HeroHeading>Welcome</HeroHeading>
            <HeroTalk>
              My name is Mason Roberts and I am a freelance web services
              provider. Here you will find information about me and what I can
              do. This site is created, in React, as a combination of my
              freelance side and my portfolio. It occurred to me that whether
              you are a client, or an employer, you both want to know my skills
              and what I can do for you. I know this is unconventional but I
              encourage you to take a moment and look around.
            </HeroTalk>
            <HeroLocation>
              Located in beautiful Rock Hill South Carolina and serving Fort
              Mill, Tega Cay, Indian Land, Clover, Lake Wyile, York, Chester,
              Lancaster, Huntersville, Lake Norman, Gastonia, Pineville,
              Matthews, Steele Creek, and all the Charlotte area.
            </HeroLocation>
          </HeroItemRight>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
