import styled from 'styled-components/macro';

export const AboutContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  background-color: #000;
  height: 100%;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const AboutBanner = styled.div`
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

export const AboutImg = styled.img`
  margin-right: 3rem;
  width: 166px;

  @media screen and (max-width: 500px) {
    width: 83px;
  }
`;

export const AboutTitle = styled.h1`
  color: #fff;
  padding: 1rem 0;
`;

export const AboutText = styled.p`
  font-size: 18px;
  color: #fff;
  width: 700px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: left;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;
