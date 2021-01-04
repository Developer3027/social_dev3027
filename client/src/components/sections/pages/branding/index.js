import React from 'react';
import brand from '../../../../images/brand.png';
import {
  LightBox,
  Banner,
  DarkTitle,
  DarkText,
  Image,
} from '../../style/common.style';

const Brand = () => {
  return (
    <LightBox>
      <Banner>
        <DarkTitle>Branding</DarkTitle>
        <Image src={brand} alt='image of mason' />
      </Banner>
      <DarkText>
        Branding is important. Ask Nike, Apple, or McDonalds what branding can
        do for you. Branding is not just a logo and off you go. Branding is more
        like a religion. Your religion. It encompasses your logo, a color
        palette, fonts, and a layout of how your site will read and feel to your
        customers. All of this is laid out in a design concept that you will
        refer back to and improve upon for years to come.
      </DarkText>
    </LightBox>
  );
};
export default Brand;
