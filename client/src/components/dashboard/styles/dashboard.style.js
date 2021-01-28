import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaBlackTie, FaGraduationCap } from 'react-icons/fa'

export const Title = styled.h1`
  color: #fff;
`

export const Text = styled.p`
  color: #999;
  margin: 0.5em 0;
`

export const Tag = styled(Link)`
  border-radius: 5px;
  background-color: #7ed957;
  margin: 1em 0;
  padding: 1em 4em;
  text-decoration: none;
`

export const DashGroup = styled.div`
  margin: 1.2rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const BoxFlex = styled.div`
  display: flex;
`

export const BoxLft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0.5em;
  padding: 0.5em;
`

export const BoxCtrCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const DashLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.5em;
  padding-bottom: 0.2em;
  padding-left: 0.2em;
  margin-left: 25px;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2sec ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #7ed957;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0 5px;
    padding-top: 0.5em;
    padding-bottom: 0.2em;
    padding-left: 0.2em;
    transition: 0.2sec ease-in-out;
  }
`

export const UserCircle = styled(FaUserCircle)`
  font-size: 2rem;
  margin: auto 0.5rem;
`
export const UserCircleWh = styled(FaUserCircle)`
  color: #fff;
  font-size: 2rem;
  margin: auto 0.5rem;
`

export const BlackTie = styled(FaBlackTie)`
  font-size: 2rem;
  margin: auto 0.5rem;
`

export const GradCap = styled(FaGraduationCap)`
  font-size: 2rem;
  margin: auto 0.5rem;
`
