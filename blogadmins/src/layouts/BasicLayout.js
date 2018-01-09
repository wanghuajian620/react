import React from 'react';
import { Layout } from 'antd';
import Footer from '../components/Footer';

import styles from './BasicLayout.less';

const { Sider, Header, Content } = Layout;

class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider className={styles.sider}>
            cemian
          </Sider>
          <Layout>
            <Header className={styles.header}>
              tou
            </Header>
            <Content className={styles.content}>
              neirong
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
