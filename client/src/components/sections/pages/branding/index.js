import React from 'react';
import brand from '../../../../images/brand.png';
import {
  LightBox,
  Banner,
  DarkTitle,
  DarkText,
  Image,
  BannerBlack,
  TitleBlack,
  ButtonBlack,
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
        like a religion. <em>Your</em> religion. It encompasses your logo, a
        color palette, fonts, and a layout of how your site will read and feel
        to your customers. All of this is laid out in a design concept that you
        will refer back to and improve upon for years to come.
      </DarkText>
      <DarkText>
        Let's say for a moment, you are selling hamburgers. Yes, hamburgers. How
        in the world will you sell hamburgers in a world full of hamburgers?
        Well, Let's compare Nike and Converse for just a moment before moving
        on. So, when I think Nike, I think quality sneaker for athletes. From
        runners to basket ball. I feel professionally competitive thinking Nike.
        In contrast, when I think Converse, specifically, I think basketball.
        More than that though, I feel men in black wearing Ray Bands taking your
        alien, five tentacle tail to the hoop, sort of basketball. Converse is
        probably the only sneaker one could wear to the board room.
      </DarkText>
      <DarkText>
        Now, back to your hamburger. Sure a hamburger is just a hamburger. Just
        like a shoe is just a shoe. Or is it? Are you making a Wendy's,{' '}
        <em>"where's the beef"</em> sort of burger? Maybe you are working simply
        the best, most juicy, mouth watering, overall smallest all beef patty on
        the market.
      </DarkText>
      <DarkText>
        Both references aren't great. One points to a famed commercial aimed at
        killing your burger where the other sounds great, right up to burger for
        ant's. I know I am just tossing bad ideas around, but hopefully I am
        starting to make a point on branding. Are you making a bad boys
        hamburger or a simply devin hamburger. Both will sell far more
        hamburgers than just a ... hamburger.
      </DarkText>
      <BannerBlack>
        <TitleBlack>Brand Me!</TitleBlack>
        <ButtonBlack to='/contact'>Help Please!</ButtonBlack>
      </BannerBlack>
    </LightBox>
  );
};
export default Brand;
