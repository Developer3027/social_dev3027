import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const OptiBannerBlack = styled.div`
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

export const OptimizeTitleBlack = styled.h1`
  color: #fff;
`;

export const OptiButtonBlack = styled(Link)`
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
    background: #777777;
    color: #000;
    cursor: pointer;
  }
`;
