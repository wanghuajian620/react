import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch } from 'dva/router';
import Write from '../routes/Write';
import Footer from '../components/Footer';

import styles from './BasicLayout.less';

const { Sider, Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>
        <Layout>
          <Sider
            className={styles.sider}
            breakpoint="md"
            width={256}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className={styles.logo}>
              <img src="https://cdn.magdeleine.co/wp-content/uploads/2017/12/kyle-szegedi-55847-1400x1750.jpg" alt="logo" />
              <h1>Christmas Blog</h1>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              onOpenChange={this.onOpenChange}
              style={{ margin: '16px 0', width: '100%' }}
            >
              <SubMenu title={<span><Icon type="appstore" /><span>文章管理</span></span>}>
                <Menu.Item key="1">写文章</Menu.Item>
                <Menu.Item key="2">改文章</Menu.Item>
                <Menu.Item key="3">删文章</Menu.Item>
              </SubMenu>
              <SubMenu title={<span><Icon type="tag" /><span>标签管理</span></span>}>
                <Menu.Item key="7">标签</Menu.Item>
              </SubMenu>
              <SubMenu title={<span><Icon type="tag" /><span>评论管理</span></span>}>
                <Menu.Item key="8">Opti</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header className={styles.header}>
              <Icon
                className={styles.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content className={styles.content}>
              <Switch>
                <Route path="/main" component={Write} />
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
