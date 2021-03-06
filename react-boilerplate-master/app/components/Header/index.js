import React from 'react';
import { FormattedMessage } from 'react-intl';// 这个库提供了响应组件和API来格式化日期、数字和字符串，包括复数和处理翻译。

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.你好} />
          </HeaderLink>
          <HeaderLink to="/dva">
            <FormattedMessage {...messages.dva} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
