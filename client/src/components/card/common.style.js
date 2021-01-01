import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const CardBase = styled.article`
  max-width: 250px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  margin: 1em;
`;
export const CardTitle = styled.h3`
  font-family: 'Nunito', sans-serif;
  color: #333;
`;

export const CardText = styled.p`
  font-family: 'Nunito', sans-serif;
  color: #333;
  padding: 1em;
  font-size: 16px;
  line-height: 1.2;
`;

export const CardButton = styled(Link)`
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 1rem 3rem;
  margin: 1rem 0;
  border: 0;
  border-radius: 5px;
  background-color: #2a8c00;
  color: #fff;
  transition: ease 0.2s;

  &:hover {
    background: #7ed957;
    color: #000;
    cursor: pointer;
  }
`;
