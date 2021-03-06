import React from 'react';
import mason from '../../../../images/mason_roberts.png';
import {
  EvenBox,
  OddBox,
  Cert,
  SmlHL,
  HlText,
  LinkedIn,
  GitHub,
  CodePen,
} from './style/about.style';
import {
  DarkBox,
  LightTitle,
  LightText,
  Banner,
  Image,
} from '../../style/common.style';

const About = () => {
  return (
    <DarkBox>
      <Banner>
        <LightTitle>Mason Roberts</LightTitle>
        <Image src={mason} alt='image of mason' />
      </Banner>

      <OddBox>
        <a
          href='https://linkedin.com/in/mason-roberts-3027'
          target='_blank'
          rel='noopener'>
          <LinkedIn />
        </a>

        <a
          href='https://github.com/Developer3027'
          target='_blank'
          rel='noopener'>
          <GitHub />
        </a>
        <a href='https://codepen.io/Mason3027' target='_blank' rel='noopener'>
          <CodePen />
        </a>
      </OddBox>

      <EvenBox>
        <HlText>
          <a
            href='./CertificateOfCompletion_CSS Essential Training.pdf'
            target='_blank'
            rel='noopener'>
            <SmlHL>[</SmlHL>
            <Cert>CSS Essentials Cert</Cert>
            <SmlHL>]</SmlHL>
          </a>
        </HlText>
        <HlText>
          <a
            href='./CertificateOfCompletion_Programming Foundations_ Fundamentals.pdf'
            target='_blank'
            rel='noopener'>
            <SmlHL>[</SmlHL>
            <Cert>Programing Fundamentals</Cert>
            <SmlHL>]</SmlHL>
          </a>
        </HlText>
        <HlText>
          <a href='./LE-1.pdf' target='_blank' rel='noopener'>
            <SmlHL>[</SmlHL>
            <Cert>Linux Essentials LE-1</Cert>
            <SmlHL>]</SmlHL>
          </a>
        </HlText>
      </EvenBox>

      <LightText>
        Hello, <br />
        &nbsp;&nbsp; My name is Mason Roberts and I am a full stack web
        developer based out of Rock Hill, SC USA. I have spent the past few
        years focused on learning todays more common web tech. I have worked
        through MyComputerCareer and Lambda School. I can help you with standard
        web sites built with HTML, CSS, and Javascript. I know Javascript
        frameworks such as React, which is what this site is built with. I know
        databases such as SQL and MongoDB as well as server frameworks like
        Express.
      </LightText>
      <LightText>
        &nbsp;&nbsp; One thing that sets me apart from other developers is my
        knowledge and love for WordPress. Many developers tend to shy from
        WordPress due to it's PHP base and use as a multi tool in the industry.
        WordPress is often used simply because it is easier for the client, not
        because it was the right tool for the job. For me, I have a license for
        Elementor Pro and only have the clients best interest in mind. Wether
        you need a React app or a WordPress site, I am ready to help.
      </LightText>
      <LightText>
        &nbsp;&nbsp; I am different from other developers in that I have a eye
        for design, which is another reason I have Elementor Pro. I feel I am
        more of a Graphics designer with strong developer skills. So unlike
        other developers, I can help you with branding or design concepts and
        help you build the best looking, feeling site or app possible.
      </LightText>
    </DarkBox>
  );
};
export default About;
