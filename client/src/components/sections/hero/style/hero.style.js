import styled from 'styled-components/macro';
import bgphoto from '../../../../images/bgphoto.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${bgphoto});
  background-position: center;
  background-size: cover;
  height: 80vh;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  grid-template-columns: 50%, 50%;

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

export const HeroItemRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  line-height: 1.3;
  padding: 0 3rem;
  /* padding-top: 10%; */
  height: 80vh;

  @media screen and (max-width: 800px) {
    height: 100vh;
    padding-top: 7%;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
    padding: 20% 3rem;
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

export const HeroSmlHL = styled.span`
  color: #7ed957;
  margin: 0 5px;
  font-size: 1.2em;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const HeroCerts = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  margin-left: 25px;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    margin: 0;
    margin-bottom: 15px;
  }
`;
