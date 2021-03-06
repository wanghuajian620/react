/**
 * Revision History:
 *     Initial: 2018/04/25         Wang Huajian
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Switch, Link, Route } from 'dva/router';

import Home from '../routes/Download/Home';
import Record from '../routes/Record/Record';
import Reserve from '../routes/Reservation/Reserve';
import Me from '../routes/Setting/Me';

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
            <Menu.Item key="form">
              <Link to="/form">
                <Icon type="form" />我的记录
              </Link>
            </Menu.Item>
            <Menu.Item key="star">
              <Link to="/star">
                <Icon type="star-o" />预定
              </Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link to="/user">
                <Icon type="user" />我的
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className={styles.content}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/form" component={Record} />
            <Route path="/star" component={Reserve} />
            <Route path="/user" component={Me} />
          </Switch>
        </Content>
        <Footer className={styles.footer}>
          Copyright <Icon type="copyright" /> 2018 个人毕业设计
        </Footer>
      </Layout>
    )
    return (
      <div>{layout}</div>
    );
  }
}

export default BasicLayout;