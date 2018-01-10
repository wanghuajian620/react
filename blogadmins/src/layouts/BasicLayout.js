import React from 'react';
import { Layout, Menu, Icon } from 'antd';
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
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  render() {
    // const { currentUser } = this.props;

    // const menu = (
    //   <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
    //     <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
    //     <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
    //     <Menu.Divider />
    //     <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
    //   </Menu>
    // );
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
              <SubMenu key="sub1" title={<span><Icon type="edit" /><span>写文章</span></span>}>
                <Menu.Item key="1">Option 1</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>文章管理</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="tag" /><span>标签管理</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
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
              {/* <div>
                {currentUser.name ? (
                  <Dropdown overlay={menu}>
                    <span className={`${styles.action} ${styles.account}`}>
                      <Avatar size="small" className={styles.avatar} src={currentUser.avatar} />
                      {currentUser.name}
                    </span>
                  </Dropdown>
                ) : <Spin size="small" style={{ marginLeft: 8 }} />}
              </div> */}
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
