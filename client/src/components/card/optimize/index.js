import React from 'react';
import { SpeedIcon } from './style/optimize.style';
import { CardBase, CardTitle, CardText, CardButton } from '../common.style';

const SpeedCard = () => {
  return (
    <CardBase>
      <SpeedIcon />
      <CardTitle>Optimization</CardTitle>
      <CardText>
        Increase the loading speed of your site. Waiting over half a second can
        loose you big. Find out what is holding you up!
      </CardText>
      <CardButton to='/optimize'>Learn More</CardButton>
    </CardBase>
  );
};

export default SpeedCard;
