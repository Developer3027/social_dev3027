import styled from 'styled-components/macro';

export const ContactWrapper = styled.section`
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactInput = styled.input`
  color: #333;
  padding: 0.5em;
  width: 100%;
`;

export const ContactInputButton = styled.input`
  margin-top: 1em;
  padding: 1em 4em;
  color: #333;
  font-weight: bold;
  border: none;

  &:hover {
    background-color: #c9e265;
    cursor: pointer;
  }
`;

export const ContactLabel = styled.label`
  color: #fff;
  margin: 0.5em 0;
`;

export const ContactTextArea = styled.textarea`
  padding: 0.5em;
`;
