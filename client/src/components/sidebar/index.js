import React from 'react';
import { IoMdCube } from 'react-icons/io';
import { FaPaperclip, FaRobot, FaMugHot } from 'react-icons/fa';

import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarAnchor,
} from './style/sidebar.style';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarMenu>
          <SidebarLink to='/about'>About</SidebarLink>

          <SidebarAnchor
            href='https://blog.mason-roberts.com'
            alt='Blog site for Mason'
            target='_blank'
            rel='noopener'>
            &nbsp;Blog
          </SidebarAnchor>

          <SidebarLink to='/projects'>
            <FaMugHot />
            &nbsp;Projects
          </SidebarLink>

          <SidebarLink to='/packages'>
            <IoMdCube />
            &nbsp;Packages
          </SidebarLink>

          <SidebarAnchor
            href='chatbot/index.html'
            alt='A I chat bot Ruby'
            target='_blank'
            rel='noopener'>
            <FaRobot />
            &nbsp; AI Chatbot
          </SidebarAnchor>

          <SidebarAnchor
            href='Mason_Resume.pdf'
            alt='Mason Resume'
            target='_blank'
            rel='noopener'>
            <FaPaperclip />
            &nbsp;Resume.PDF
          </SidebarAnchor>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
