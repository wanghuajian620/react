/**
 * Revision History:
 *     Initial: 2018/04/25          Wang Huajian
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import styles from '../layouts/BasicLayout.css';

const { Header, Footer, Content } = Layout;

class BasicLayout extends React.Component {
  state = {
    current: 'home',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className={styles.header}>
            <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            className={styles.menu}
          >
              <Menu.Item key="home">
              <Icon type="home" />首页
              </Menu.Item>
              <Menu.Item key="download">
                <Icon type="cloud-download" />下载文件
              </Menu.Item>
              <Menu.Item key="user">
                <Icon type="user" />我的
              </Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.content}>内容</Content>
          <Footer className={styles.footer}>底部</Footer>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;