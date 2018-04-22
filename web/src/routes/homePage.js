/**
 * Revision History:
 *     Initial: 2018/04/21          Wang Huajian
 */

import React from 'react';
import { Layout } from 'antd';

import styles from '../routes/home.css';

const { Header, Footer, Content } = Layout;
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className={styles.header}>头部</Header>
          <Content className={styles.content}>内容</Content>
          <Footer className={styles.footer}>底部</Footer>
        </Layout>
      </div>
    );
  }
}

export default HomePage;