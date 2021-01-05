import React from 'react';
import { LightText } from '../style/common.style';
import {
  FtrContainer,
  FtrHighLight,
  FtrImg,
  FtrText,
} from './style/footer.style';

import logo from '../../../images/50px-trans-gears-logo.png';

const Footer = () => {
  return (
    <FtrContainer>
      <FtrImg src={logo} alt='Dev 30 27' />
      <FtrText>
        <FtrHighLight>Dev</FtrHighLight>eloper3027
      </FtrText>
    </FtrContainer>
  );
};

export default Footer;
