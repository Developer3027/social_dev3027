import React from 'react';
import SpeedCard from '../../card/optimize';
import BrandCard from '../../card/brand';
import WwwCard from '../../card/www';
import SeoCard from '../../card/seo';
import { ServicesContainer } from './style/service.style';

const Services = () => {
  return (
    <ServicesContainer>
      <SpeedCard />
      <BrandCard />
      <WwwCard />
      <SeoCard />
    </ServicesContainer>
  );
};

export default Services;
