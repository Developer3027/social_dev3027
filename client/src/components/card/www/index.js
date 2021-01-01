import React from 'react';
import { WorldIcon } from './style/www.style';
import { CardBase, CardTitle, CardText, CardButton } from '../common.style';

const WwwCard = () => {
  return (
    <CardBase>
      <WorldIcon />
      <CardTitle>Web Design</CardTitle>
      <CardText>
        You need a web site. Let's start that conversation! Choose from React,
        WordPress, or standard html, css, and javascript.
      </CardText>
      <CardButton to='/webdesign'>Learn More</CardButton>
    </CardBase>
  );
};

export default WwwCard;
