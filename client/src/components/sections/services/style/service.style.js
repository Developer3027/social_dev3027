import styled from 'styled-components/macro';

export const ServicesContainer = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
