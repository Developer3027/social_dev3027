import React from 'react';
import { PaletteIcon } from './style/brand.style';
import { CardBase, CardTitle, CardText, CardButton } from '../common.style';

const BrandCard = () => {
  return (
    <CardBase>
      <PaletteIcon />
      <CardTitle>Branding</CardTitle>
      <CardText>
        Your Brand is everything. Much more than just a logo. From colors and
        fonts to the feel of content. Let's start your design concept.
      </CardText>
      <CardButton to='/brand'>Learn More</CardButton>
    </CardBase>
  );
};

export default BrandCard;
