import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { FaUserPlus, FaUser } from 'react-icons/fa'
import { GoDashboard } from 'react-icons/go'
import { CgLogOut } from 'react-icons/cg'

export const MemberContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 100%;
  background: #7ed957;
  display: flex;
  align-items: flex-start;
  top: 80px;
  transition: 0.3sec ease-in-out;
  right: ${({ isMemberOpen }) => (isMemberOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`

export const MemberMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 90px);
  grid-row-gap: 0; */
  margin: 0;
  padding: 0;

  @media screen and (max-width: 480px) {
  }
`

export const MemberLink = styled(Link)`
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
  color: #000;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0 5px;
    padding-top: 0.5em;
    padding-bottom: 0.2em;
    padding-left: 0.2em;
    transition: 0.2sec ease-in-out;
  }
`

export const Tag = styled.a`
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
  color: #000;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0 5px;
    padding-top: 0.5em;
    padding-bottom: 0.2em;
    padding-left: 0.2em;
    transition: 0.2sec ease-in-out;
  }
`

export const TextTop = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.5em;
  padding-bottom: 1em;
  padding-left: 0.2em;
  margin-top: 1em;
  margin-left: 25px;
  font-size: 16px;
  color: #222;
`

export const Profile = styled(FaUser)`
  font-size: 1.3rem;
`

export const RegProfile = styled(FaUserPlus)`
  font-size: 1.5rem;
`

export const Dash = styled(GoDashboard)`
  font-size: 1.5rem;
`

export const Loggout = styled(CgLogOut)`
  font-size: 1.5rem;
`
