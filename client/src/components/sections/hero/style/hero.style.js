import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import bgphoto from '../../../../images/mason_roberts.png';

export const HeroWrapper = styled.section`
  background-color: #000;
`;

export const HeroContainer = styled.div`
  background: url(${bgphoto});
  background-position: center;
  background-size: 25%;
  background-repeat: no-repeat;
  height: 80vh;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }

  @media screen and (max-width: 500px) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.1)
      ),
      url(${bgphoto});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 80%;
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  grid-template-columns: 30%, 30%, 30%;

  @media screen and (max-width: 800px) {
    /* flex-direction: column; */
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const HeroItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 0 3rem;
  margin: 10% 0;
  color: #fff;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (max-height: 600px) {
    margin: 3% 0;
  }
`;

export const HeroItemCenter = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: #fff;
  padding: 0 3rem;
  padding-top: 5%;
  height: 80vh;

  @media screen and (max-width: 800px) {
    height: 100vh;
    padding-top: 7%;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const HeroItemRight = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #fff;
  transform: rotate(90deg);
  padding: 0 3rem;
  padding-top: 5%;
  height: 80vh;

  @media screen and (max-width: 800px) {
    height: 100vh;
    padding-top: 7%;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
    transform: rotate(0deg);
    justify-content: center;
    margin: 0.5em 0;
    /* padding: 20% 3rem; */
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  line-height: 1.4;

  @media screen and (max-width: 740px) {
    font-size: 36px;
  }
  @media screen and (max-height: 400px) {
    font-size: 32px;
  }
`;

export const HeroHeading = styled.h3`
  font-size: clamp(1.5, 5vw, 2.5rem);
  color: #7ed957;
  margin-bottom: 10px;
`;

export const HeroTalk = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  margin-top: 1rem;

  @media screen and (max-width: 740px) {
    font-size: 16px;
  }
`;

export const HeroLocation = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  margin-top: 1rem;

  @media screen and (max-width: 800px) {
    display: none;
  }

  @media screen and (max-height: 600px) {
    display: none;
  }
`;

export const HeroHL = styled.span`
  color: #c9e265;
  border-bottom: 5px solid #7ed957;
`;

export const HeroContact = styled(Link)`
  font-weight: bold;
  color: #7ed957;
  padding: 1em 4em;
  border: 1px solid #c9e265;

  &:hover {
    background: linear-gradient(
      to top,
      rgba(201, 226, 101, 0.7),
      rgba(201, 226, 101, 0.1)
    );
  }
`;
