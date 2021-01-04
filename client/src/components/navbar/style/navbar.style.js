import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { IoMdCube } from 'react-icons/io';
import {
  FaBars,
  FaPaperclip,
  FaRobot,
  FaMugHot,
  FaUserCircle,
} from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 3rem;
  background-color: #222222;
  height: 80px;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
`;

export const NavHighlight = styled.span`
  color: #7ed957;
  font-size: 1.3em;
  margin-left: 0.5rem;
`;

export const NavMainMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

export const NavMenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  color: white;
`;

export const NavUserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

export const NavIconbar = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 1.5em;
  margin: 0 1rem;
  padding-left: 0.5rem;
`;

export const User = styled(FaUserCircle)`
  font-size: 1.8rem;
  margin: 0 1rem;
  padding-left: 0.5rem;
`;

export const NavPaperclip = styled(FaPaperclip)`
  font-size: 1.5em;
  margin: 0 1rem;
  color: white;

  &:hover {
    color: #7ed957;
  }
`;

export const RuthChat = styled(FaRobot)`
  font-size: 1.5em;
  margin: 0 1rem;
  color: white;

  &:hover {
    color: #7ed957;
  }
`;

export const NavProject = styled(FaMugHot)`
  font-size: 1.2em;
  margin: 0 1rem;
  color: white;

  &:hover {
    color: #7ed957;
  }
`;

export const NavPackage = styled(IoMdCube)`
  font-size: 1.5em;
  margin: 0 1rem;
  color: white;

  &:hover {
    color: #7ed957;
  }
`;
