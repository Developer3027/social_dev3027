import styled from 'styled-components/macro';
import { FaLinkedin, FaGithubSquare, FaCodepen } from 'react-icons/fa';

export const LinkedIn = styled(FaLinkedin)`
  font-size: 3em;
  color: #fff;

  &:hover {
    color: #7ed957;
    cursor: pointer;
  }
`;

export const GitHub = styled(FaGithubSquare)`
  font-size: 3em;
  color: #fff;

  &:hover {
    color: #7ed957;
    cursor: pointer;
  }
`;

export const CodePen = styled(FaCodepen)`
  font-size: 3em;
  color: #fff;

  &:hover {
    color: #7ed957;
    cursor: pointer;
  }
`;

export const EvenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5em auto;
  width: 900px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const OddBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5em auto;
  width: 900px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Cert = styled.span`
  font-size: 0.8rem;
`;

export const HlText = styled.p`
  color: #fff;
`;

export const SmlHL = styled.span`
  color: #7ed957;
  margin: 0 5px;
  font-size: 1.2em;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
