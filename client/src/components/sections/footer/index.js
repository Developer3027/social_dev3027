import React from 'react';
import { DarkBox, Banner, LightText } from '../style/common.style';
import {
  FtrHighLight,
  FtrBoxTwo,
  FtrLeft,
  FtrRight,
} from './style/footer.style';

import logo from '../../../images/50px-trans-gears-logo.png';

const Footer = () => {
  return (
    <DarkBox>
      <Banner>
        <FtrBoxTwo>
          <FtrLeft>
            <img src={logo} alt='Dev 30 27' />
            <LightText>
              <FtrHighLight>Dev</FtrHighLight>eloper3027
            </LightText>
          </FtrLeft>
          <FtrRight>
            <LightText>Rock Hill, SC</LightText>
          </FtrRight>
        </FtrBoxTwo>
      </Banner>
    </DarkBox>
  );
};

export default Footer;
