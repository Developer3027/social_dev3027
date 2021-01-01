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
            <HeroCerts>
              <HeroSmlHL>[</HeroSmlHL>certifications<HeroSmlHL>]</HeroSmlHL>
            </HeroCerts>
            <HeroTitle>
              <HeroHL>M</HeroHL>ason <br /> Roberts
            </HeroTitle>
            <HeroTalk>Web Dev / Web Design / WordPress</HeroTalk>
          </HeroItemLeft>
          <HeroItemRight>
            <HeroHeading>Welcome</HeroHeading>
            <HeroTalk>
              My name is Mason Roberts and I am a freelance web services
              provider. I specialize in helping individuals to small businesses
              with web design and development. Whether you need branding
              assistance, hosting assistance, site design and development, SEO
              assistance, or site optimization, I am here to help.
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
