import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const layout = (
      <Layout>
        <Header
          style={{ background: '#fff', padding: 0 }}
        >
          <span className={styles.logo}>
            <h1>Book a table</h1>
          </span>
          <Icon
            style={{ cursor: 'pointer', fontSize: 25 }}
            className={styles.trigger}
            type={this.state.collapsed ? 'left' : 'right'}
            onClick={this.toggle}
          />
        </Header>
        <Layout>
          <Content style={{ padding: 24, background: '#fff', minHeight: 600 }}>
            <div>
              <video src="https://d27shkkua6xyjc.cloudfront.net/videos/maaemo-film-2.mp4?mtime=20141113185431" autoPlay="autoplay" loop="loop">ssss</video>
            </div>
          </Content>
          <Sider
            width={400}
            breakpoint="xs"
            collapsedWidth="0" // 不显示图标，全部折叠进去
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Menu
              mode="inline"
              className={styles.menu}
            >
              <Menu.Item key="1">
                <span>Menu</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span>About</span>
              </Menu.Item>
              <Menu.Item key="3">
                <span>Press</span>
              </Menu.Item>
              <Menu.Item key="4">
                <span>Career</span>
              </Menu.Item>
              <Menu.Item key="5">
                <span>FAQ</span>
              </Menu.Item>
              <Menu.Item key="6">
                <span>Stories</span>
              </Menu.Item>
              <Menu.Item key="7">
                <span>Shop</span>
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
    return (<div>{layout}</div>);
  }
}

export default(BasicLayout);
