import React from 'react';
import {
  AccordionContainer,
  AccordionHeader,
  AccordionImage,
  AccordionContent,
  AccordionTitle,
  AccordionText,
} from './style/accordion.style';

import barber from '../../images/projects/barber-shop-desktop.png';

const Accordion = () => {
  return (
    <AccordionContainer>
      <AccordionHeader>
        <a
          href='https://barber-shop.mason-roberts.com'
          target='_blank'
          rel='noreferrer'>
          <AccordionImage src={barber} alt='card image of site' />
        </a>
      </AccordionHeader>
      <AccordionContent>
        <AccordionTitle>The Barber Shop</AccordionTitle>
        <AccordionText>
          This site is a WordPress site, designed and built with Elementor.
          Original design from dribbble contributor Matt Wojtas that I reworked
          to make this site.{' '}
        </AccordionText>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
