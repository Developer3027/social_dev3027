import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaUserCircle,
  FaBlackTie,
  FaGraduationCap
} from 'react-icons/fa'

export const FontLrg = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #000;
  margin-top: 1rem;
`

export const FontLead = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000;
`

export const FontSml = styled.small`
  font-size: 0.9rem;
  display: block;
  margin-top: 0.3rem;
  color: #333;
`

export const FormContainer = styled.div`
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

export const FormGroup = styled.div`
  margin: 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormGroupSocial = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 1.5rem 0;
`

export const FormInput = styled.input`
  display: block;
  color: #000;
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const FormLink = styled(Link)`
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

export const InputBtn = styled.input`
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

export const FormSelect = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
`

export const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  color: #000;
  border: 1px solid #ccc;
`

export const Button = styled.button`
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

export const Twitter = styled(FaTwitter)`
  font-size: 2rem;
  margin: auto 0.5rem;
  color: #38a1f3;
`

export const Facebook = styled(FaFacebook)`
  font-size: 2rem;
  margin: auto 0.5rem;
  color: #3b5998;
`

export const Instagram = styled(FaInstagram)`
  font-size: 2rem;
  margin: auto 0.5rem;
  color: #3f729b;
`

export const Youtube = styled(FaYoutube)`
  font-size: 2rem;
  margin: auto 0.5rem;
  color: #c4302b;
`

export const Linkedin = styled(FaLinkedin)`
  font-size: 2rem;
  margin: auto 0.5rem;
  color: #0077b5;
`
