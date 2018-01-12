/*
2018-01-11 Wang huajian
*/

import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

const { Header } = Layout;

function Top() {
  return (
    <Header className={styles.header}>
      <h3 className={styles.text}>Christmas blog</h3>
      <Menu
        mode="horizontal"
        className={styles.menu}
      >
        <Menu.Item key="1">
          <Link to="/">
          Back
          </Link>
        </Menu.Item>
        <Menu.Item key="2">归档</Menu.Item>
        <Menu.Item key="3">关于</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Top;

