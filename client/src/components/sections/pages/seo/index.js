import React from 'react';
import seo from '../../../../images/seo.png';
import {
  Container,
  Banner,
  Title,
  Text,
  Image,
} from '../../style/common.style';

const SEO = () => {
  return (
    <Container>
      <Banner>
        <Title>Search Engine Optimization</Title>
        <Image src={seo} alt='illustration of s e o' />
      </Banner>
      <Text>
        SEO is important for every website. I am not a professional SEO guy, and
        I don't claim to be. There is a lot that SEO deals with that I can not
        help with. A big part of SEO deals directly with social accounts and how
        they interact. As I can help set up social accounts and connect them to
        your site, I know little about how to drive those connections to best
        work for you. I do not know bloggers or other advertisers that can help
        drive those connections. I say this first because I do not want to miss
        lead anyone.
      </Text>
      <Text>
        That being said, I can assist with all the other parts of SEO. I can set
        or review, the meta tags that give social bots from facebook, google,
        and twitter the correct information they use to display the link card
        when pasting the link in their site. I make it a point to ensure these
        are in place with every site I create. I test these using each sites
        specific tool to ensure your first link card is exactly what you are
        expecting.
      </Text>
      <Text>
        Using the branding guide, I can help research keywords that bots will
        use to help place you and elevate your SEO ranking. I can also help you
        set up various adds from google to facebook to get the site recognition
        and directly effect your SEO.
      </Text>
      <Text>
        I can help you set up the various social accounts and get them connected
        to your site. These connections help drive and strengthen the bonds that
        bots look at to help rank you in SEO.
      </Text>
    </Container>
  );
};
export default SEO;
