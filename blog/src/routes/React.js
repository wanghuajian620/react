import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './React.less';

const { Header, Content, Footer } = Layout;


class ReaLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className={styles.header}>
            <div className={styles.logo}>
              <img src="http://www.logobook.com/wp-content/uploads/2017/03/MorseLife_logo.svg" alt="" />
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              className={styles.menu}
            >
              <Menu.Item key="1" className={styles.reactnative}>
                <span>ReactNative</span>
              </Menu.Item>
              <Menu.Item key="2" className={styles.reactnative}>
                <span>Angular</span>
              </Menu.Item>
              <Menu.Item key="3" className={styles.reactnative}>
                <span>JavaScipt</span>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ minHeight: '100vh' }}>Content</Content>
          <Footer>sfsf</Footer>
        </Layout>
      </div>
    );
  }
}
export default ReaLayout;
