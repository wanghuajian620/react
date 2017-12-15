import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { ContainerQuery } from 'react-container-query';
import { Link } from 'dva/router';
import classnames from 'classnames';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

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
          style={{ background: '#fff', padding: 0, height: '80px' }}
        >
          <span className={styles.header}>
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
          <Content style={{ background: '#fff', minHeight: 600, width: '100%' }}>
            <div className={styles.auto}>
              <video
                className={styles.img}
                src="https://d27shkkua6xyjc.cloudfront.net/videos/maaemo-film-2.mp4?mtime=20141113185431" autoPlay="autoplay" loop="loop"
              >
                ssss
              </video>
              <p className={styles.p}>
                My Blog
              </p>
            </div>
          </Content>
          <Sider
            width={400}
            // breakpoint="xs"
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
                <Link to="/menu">
                  <span>Menu</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/press">
                  <span>Press</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/career">
                  <span>Career</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/faq">
                  <span>FAQ</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/story">
                  <span>Stories</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/shop">
                  <span>Shop</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
        <Footer
          className={styles.Footer}
        >
          <div>
            <h4>
              <a href="http://github.com/wanghuajian620" Target="_blank">Github</a>
              <p>The project By <Icon type="copyright" /> github.com/wanghuajian620.com</p>
            </h4>
          </div>
        </Footer>
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}

export default(BasicLayout);
