/**
 * Revision History:
 *     Initial: 2018/04/25         Wang Huajian
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Link, Route } from 'dva/router';

import Home from '../routes/Download/Home';
import Me from '../routes/My/Me';

import styles from '../layouts/BasicLayout.css';

const { Header, Footer, Content } = Layout;

class BasicLayout extends React.Component {
  render() {
    const layout = (
      <Layout>
        <Header className={styles.header}>
          <Menu
            mode="horizontal"
            className={styles.menu}
          >
            <Menu.Item key="home">
              <Link to="/home">
                <Icon type="home" />首页
              </Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link to="me">
                <Icon type="user" />我的
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className={styles.content}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/me" component={Me} />
          </Switch>
        </Content>
        <Footer className={styles.footer}>底部</Footer>
      </Layout>
    )
    return (
      <div>{layout}</div>
    );
  }
}

export default BasicLayout;