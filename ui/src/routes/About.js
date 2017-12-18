import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from '../layouts/Menu.less';


const { Header, Content, Sider, Footer } = Layout;
const window = window;// 这句话没用，window是全局的，写上反而不起作用，未消除eslint 报错。
class About extends React.PureComponent {
  state = {
    collapsed: false,
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (!this.state.collapsed) {
        this.setState({
          collapsed: true,
        });
      }
    });
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
          style={{ background: '#888', padding: 0, width: '100%', height: '71px' }}
        >
          <Menu
            className={styles.header}
            mode="horizontal"
            style={{ width: '100%' }}
          >
            <Menu.Item key="1">
              <span>Book a table</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>About Maaemo</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon
                style={{ cursor: 'pointer', fontSize: 25 }}
                className={styles.trigger}
                type={this.state.collapsed ? 'left' : 'right'}
                onClick={this.toggle}
              />
            </Menu.Item>
          </Menu>

        </Header>
        <Layout>
          <Content style={{ background: '#fff', minHeight: 600 }}>
            <div>
              <img
                src="https://d27shkkua6xyjc.cloudfront.net/images/02.About/_1344x756_crop_center-center/About_02_2500px.jpg?mtime=20141112134904"
                alt="图片"
              />
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
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/menu">
                  <span>Menu</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <span>About</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="press">
                  <span>Press</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/career">
                  <span>Career</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/faq">
                  <span>FAQ</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <span>Stories</span>
              </Menu.Item>
              <Menu.Item key="8">
                <span>Shop</span>
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
      <div>{layout}</div>
    );
  }
}
export default (About);
