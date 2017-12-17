import React from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from '../layouts/Menu.less';


const { Header, Content, Sider, Footer } = Layout;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class Bar extends React.PureComponent {
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
              <span>Menu</span>
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
            <div className={styles.auto}>
              <img
                className={styles.img}
                src="https://d27shkkua6xyjc.cloudfront.net/images/02.About/_1344x756_crop_center-center/About_01_2500px.jpg?mtime=20141112134851"
                alt="图片"
              />
            </div>
            <div>
              <Row type="flex" justify="space-around" align="top">
                <Col span={12}><DemoBox value={200}>col-4</DemoBox></Col>
              </Row>
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
                <Link to="/home">
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <span>Menu</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/press">
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
                <Link to="/story">
                  <span>Stories</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="shop">
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
      <div>{layout}</div>
    );
  }
}
export default (Bar);
