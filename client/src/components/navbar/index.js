import React from 'react';
import logo from '../../images/50px-trans-gears-logo.png';

import {
  Nav,
  NavLink,
  NavHighlight,
  NavPaperclip,
  NavMainMenu,
  NavMenuWrap,
  NavUserMenu,
  Bars,
  User,
  RuthChat,
  NavProject,
  NavPackage,
  NavIconbar,
} from './style/navbar.style';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='the dev 3027 gears logo' />
          <NavHighlight>Dev</NavHighlight>eloper3027
        </NavLink>
        <NavIconbar>
          <NavLink className='tooltip' to='/projects'>
            <span className='tooltiptext'>Projects</span>
            <NavProject />
          </NavLink>
          <NavLink className='tooltip' to='/packages'>
            <span className='tooltiptext'>Packages</span>
            <NavPackage />
          </NavLink>

          <a
            className='tooltip'
            href='chatbot/index.html'
            target='_blank'
            rel='noopener'>
            <span className='tooltiptext'>AI Chatbot</span>
            <RuthChat />
          </a>
          <a
            className='tooltip'
            href='Mason_Resume.pdf'
            target='_blank'
            rel='noopener'>
            <span className='tooltiptext'>Resume.PDF</span>
            <NavPaperclip />
          </a>
        </NavIconbar>
        <NavMenuWrap>
          <NavUserMenu>
            <User />
          </NavUserMenu>
          <NavMainMenu onClick={toggle}>
            <Bars />
          </NavMainMenu>
        </NavMenuWrap>
      </Nav>
    </>
  );
};

export default Navbar;
