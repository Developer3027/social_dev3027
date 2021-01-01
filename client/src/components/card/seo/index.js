import React from 'react';
import { SEOIcon } from './style/seo.style';
import { CardBase, CardTitle, CardText, CardButton } from '../common.style';

const SeoCard = () => {
  return (
    <CardBase>
      <SEOIcon />
      <CardTitle>SEO</CardTitle>
      <CardText>
        Search Engine Optimization is important. Every site needs, at the
        minimum, the meta tags that talk to bots from social sites.
      </CardText>
      <CardButton to='/seo'>Learn More</CardButton>
    </CardBase>
  );
};

export default SeoCard;
