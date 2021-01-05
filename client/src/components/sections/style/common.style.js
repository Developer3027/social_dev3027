import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const DarkBox = styled(Container)`
  background-color: #000;
`;

export const LightBox = styled(Container)`
  background-color: #fff;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (max-width: 500px) {
    height: 100%;
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const Image = styled.img`
  margin-right: 3rem;
  width: 166px;

  @media screen and (max-width: 500px) {
    width: 83px;
  }
`;

export const logoImg = styled.img`
  width: 50%;
`;

export const Title = styled.h1`
  padding: 1rem 0;
`;

export const DarkTitle = styled(Title)`
  color: #000;
`;

export const LightTitle = styled(Title)`
  color: #fff;
`;

export const TitleThree = styled.h3`
  padding: 0.5rem 0;
`;

export const LightTitleThree = styled(TitleThree)`
  color: #fff;
`;

export const DarkTitleThree = styled(TitleThree)`
  color: #000;
`;

export const Text = styled.p`
  font-size: 18px;
  width: 700px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: left;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const DarkText = styled(Text)`
  color: #000;
`;

export const LightText = styled(Text)`
  color: #fff;
`;

export const BannerBlack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  width: 700px;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    height: 100%;
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const TitleBlack = styled.h1`
  color: #fff;
`;

export const ButtonBlack = styled(Link)`
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  padding: 1rem 3rem;
  margin: 1rem 0;
  border: 0;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  transition: ease 0.2s;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 1rem;
  }

  &:hover {
    background: #c9e265;
    color: #000;
    cursor: pointer;
  }
`;
