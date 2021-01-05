import React from 'react';
import webdesign from '../../../../images/web_design.png';
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

const WebDesign = () => {
  return (
    <LightBox>
      <Banner>
        <DarkTitle>Web Design</DarkTitle>
        <Image src={webdesign} alt='illustration of web design' />
      </Banner>
      <DarkText>
        Having your place on the world wide web is a powerful thing. It is your
        own place in the world where you can direct people to view and interact
        with your ideas and concepts. Wether you are selling goods, showing off,
        or educating, a website or app gives you the ability to reach the
        broadest audience. When building your site or app, you have a lot of
        options to choose from.
      </DarkText>
      <DarkText>
        Many choose to go WordPress, and for good reason. WordPress is a CMS,
        Content Management System, built with PHP. PHP, Hypertext Preprocessor,
        is an older tech used primarily on Linux systems. WordPress is very
        popular and has a large following. There are many plugins that give a
        wide range of capabilities. Easy for clients to use. What is not to
        love? WordPress is for clients that want to update their sites
        themselves. The most typical WordPress site would be a blog site where
        there is a lot of content to generate that the client would want to give
        that personal touch.
      </DarkText>
      <DarkText>
        You may choose a static site. Built with the foundational techs, a
        static site can be a simple single page or multiple. HTML, Hypertext
        Markup Language, is the base language that lays out the page. CSS,
        Cascading Style Sheet, is used to effect how the page looks and feels.
        JavaScript is the common language that provides functionality to the
        page. A static site is served up by a server when the page is requested.
        This is a very versatile and inexpensive option. Typically this option
        includes a maintenance package.
      </DarkText>
      <DarkText>
        You may wish a different look and feel and decided to use a Javascript
        framework like ReactJs or VueJs. React is built and maintained by
        Facebook and handles site interactions differently than a static site.
        React is used to build SPA, Single Page Application, or PWA, Progressive
        Web Application with ease. Many components are built and assembled in
        React. SPA and PWA applications can be run like apps on mobile devices
        allowing for installation and offline usage.
      </DarkText>
      <BannerBlack>
        <TitleBlack>Design Me!</TitleBlack>
        <ButtonBlack to='/contact'>Help Please!</ButtonBlack>
      </BannerBlack>
    </LightBox>
  );
};
export default WebDesign;
