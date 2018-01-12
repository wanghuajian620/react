import React from 'react';
import { Icon } from 'antd';

import styles from './index.less';

function Footer() {
  return (
    <div className={styles.footer}>
      <a
        className={styles.bottom}
        href="https://github.com/wanghuajian620"
      >
        GitHub
      </a>
      <a
        className={styles.bottom}
        href="http://gmail.com/wanghuajian620"
      >
      Gmail
      </a>
      <a
        href="http://gmail.com/wanghuajian620"
      >
      Blog
      </a>
      <div>
        Copyright <Icon type="copyright" /> 2017 个人博客圣诞夜出品
      </div>
    </div>
  );
}

export default Footer;
