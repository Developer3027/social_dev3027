import styled from 'styled-components/macro';

export const ProjectContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #1b1b1b;
`;

export const ProjectHeader = styled.div`
  margin: 2em 0;
  display: flex;
`;

export const ProjectImage = styled.img`
  width: 30vw;
  border-radius: 0 5px 5px 0;
  padding-left: 0.5em;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-bottom: 5px solid #333;
`;

export const ProjectTitle = styled.h3`
  color: #fff;
  padding-bottom: 1.5em;
`;

export const ProjectText = styled.p`
  color: #fff;
`;
