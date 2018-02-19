/*
2018-01-11 Wang huajian
*/

import React from 'react';
import { Link } from 'dva/router';
import styles from './index.less';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img
          src="http://www.logobook.com/wp-content/uploads/2017/03/MorseLife_logo.svg"
          alt=""
        />
      </Link>
    </div>
  );
}
