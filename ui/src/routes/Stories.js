import React from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from '../layouts/Stories.less';


const { Header, Content, Sider, Footer } = Layout;
class Story extends React.PureComponent {
  state = {
    collapsed: true,
  }
  componentDidMount() {
    // eslint-disable-next-line
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
              <span>Stories</span>
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
              <h2 className={styles.title}>
              Experiences from the heart of
              <br />
              the restaurant and beyond
              </h2>
            </div>
            <div>
              <Row>
                <Col span={12} className={styles.imgone}>
                  <img className={styles.img} src="https://d27shkkua6xyjc.cloudfront.net/images/05.Stories/Christian-Houge/_1440x920_crop_center-center/Irwin-with-beacon-Apollo-15_2016.jpg?mtime=20170824175735" alt="" />
                </Col>
                <Col span={12} className={styles.new}>
                  <h3 className={styles.word}>
                    New artwork on the walls of the restaurant
                  </h3>
                  <span className={styles.read}>Read story</span>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <img className={styles.img} src="https://maaemo.no/uploads/images/_1920x1080_crop_center-center/2014_06_30_tk_maaemo_mountains_alpa_1.jpg" alt="" />
                </Col>
                <Col span={12} className={styles.blog}>
                  <h3 className={styles.word}>This is a blog</h3>
                  <span className={styles.read}>Read story</span>
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles.imgone}>
                  <img className={styles.img} src="https://maaemo.no/uploads/images/_1920x1080_crop_center-center/MAAEMO-JPG-4.jpg" alt="" />
                </Col>
                <Col span={12} className={styles.new}>
                  <h3 className={styles.word}>
                  Artwork by Christian Houge
                  </h3>
                  <span className={styles.read}>Read story</span>
                </Col>
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
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/menu">
                  <span>Menu</span>
                </Link>
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
                <span>Stories</span>
              </Menu.Item>
              <Menu.Item key="8">
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
      <div>{layout}</div>
    );
  }
}
export default (Story);
