import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const AuthContainer = styled.section`
  font-family: 'Nunito', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#c9e265 75%, #7ed957);

  @media screen and (max-width: 800px) {
    height: 100vh;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`

export const AuthTitle = styled.h1`
  color: #333;
  margin-top: 1em;
  margin-bottom: 0.5em;
`

export const AuthText = styled.p`
  color: #333;
  margin: 0.3em 0;
  padding-bottom: 0.5rem;
`

export const AuthSmlText = styled.small`
  color: #333;
  font-size: 12px;
  padding: 0.2em 0;
`

export const AuthForm = styled.form`
  padding: 3%;
  border-radius: 3%;
  border: 1px solid #888;
  background: linear-gradient(#7ed957 75%, #c9e265);
  margin-bottom: 2em;
`

export const AuthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1em 0;
`

export const AuthBtnFormGroup = styled.div`
  display: flex;
  justify-content: center;
`

export const AuthInput = styled.input`
  padding: 0.5rem;
  margin: 0.2rem 0;
  border: 2px solid #51b127;
  border-radius: 3px;
  color: #000;
`

export const AuthLink = styled(Link)`
  text-decoration: none;
  color: #003fe9;

  &:hover {
    text-decoration: underline;
  }
`

export const Space = styled.span`
  margin-top: 1em;
`

export const AuthBtn = styled.input`
  padding: 1rem 4rem;
  margin: 0.2em;
  color: #333;
  border: 2px solid #51b127;
  border-radius: 3px;
  background-color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #c9e265;
    box-shadow: inset 3px 3px 1em, inset 1px 1px 10px;
    border: 2px solid #667;
    font-weight: bold;
    color: #333;
  }
`
