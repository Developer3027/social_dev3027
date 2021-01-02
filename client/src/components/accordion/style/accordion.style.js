import styled from 'styled-components/macro';

export const AccordionContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const AccordionHeader = styled.div`
  margin: 2em 0;
  display: flex;
`;

export const AccordionImage = styled.img`
  width: 50vw;
`;

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const AccordionTitle = styled.h3`
  color: #fff;
  padding-bottom: 1.5em;
`;

export const AccordionText = styled.p`
  color: #fff;
`;
