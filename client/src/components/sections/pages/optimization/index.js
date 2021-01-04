import React from 'react';
import opti from '../../../../images/opti.png';
import {
  LightBox,
  Banner,
  Image,
  DarkTitle,
  DarkText,
} from '../../style/common.style';
import {
  OptiBannerBlack,
  OptimizeTitleBlack,
  OptiButtonBlack,
} from './style/opti.style';

const Optimize = () => {
  return (
    <LightBox>
      <Banner>
        <DarkTitle>Optimization</DarkTitle>
        <Image src={opti} alt='illustration of page optimization' />
      </Banner>
      <DarkText>
        Is your site slow to load? Is your site sluggish, heavy or just not
        performing like it should? The number one culprit for slow and sluggish
        sites are the images used. You should consider on which device your site
        is being viewed on and present a properly formatted image for that
        device. For example, a mobile phone will take a hot second to load up a
        full resolution image.
      </DarkText>
      <DarkText>
        Other concerns would be trimming the fat from your code. Frameworks like
        Bootstrap are very popular and useful because they allow you to create a
        component or element quickly and easily, however, when using them, even
        if you are only using a single element, you are loading the entire
        library when loading your page, just to use that one element. You should
        consider using the browser tools to pull those elements out of the
        library. Only use the parts you need and stop loading all the things you
        don't.
      </DarkText>
      <DarkText>
        Tools like GTmetrix can give you great insight into how your site is
        optimized for the web. It will give your site a checkup and present you
        with a grade as well as some important information to help you focus on
        the areas that need improving.{' '}
      </DarkText>
      <DarkText>
        Web.Dev is another great tool that will generate reports that target
        these specific problem areas and explain how one might go about fixing
        the issues. I personally use Web.Dev and several of those tools like web
        vitals to optimize web sites.
      </DarkText>
      <OptiBannerBlack>
        <OptimizeTitleBlack>Optimize Me!</OptimizeTitleBlack>
        <OptiButtonBlack>Help Please!</OptiButtonBlack>
      </OptiBannerBlack>
    </LightBox>
  );
};
export default Optimize;
