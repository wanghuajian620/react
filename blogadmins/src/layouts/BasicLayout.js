import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Footer from '../components/Footer';

import styles from './BasicLayout.less';

const { Sider, Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends React.Component {
  state = {
    openKeys: ['sub1'],
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
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  render() {
    return (
      <div>
        <Layout>
          <Sider className={styles.sider}>
            <div className={styles.logo}>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>Christmas Blog</h1>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ margin: '16px 0', width: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>写文章</span></span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>文章管理</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>标签管理</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
              </SubMenu>
            </Menu>
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
