import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 100%;
  background: #7ed957;
  display: grid;
  align-items: center;
  top: 80px;
  transition: 0.3sec ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const SidebarMenu = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  grid-row-gap: 0;
  margin: 0;
  padding: 0;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 50px);
  }
`;

export const SidebarLink = styled(Link)`
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
`;

export const SidebarAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.5em;
  padding-bottom: 0.2em;
  padding-left: 0.2em;
  margin-left: 25px;
  text-decoration: none;
  font-size: 1.5rem;
  color: #000;

  &:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px 0 0 5px;
    padding-top: 0.5em;
    padding-bottom: 0.2em;
    padding-left: 0.2em;
    transition: 0.2sec ease-in-out;
  }
`;
