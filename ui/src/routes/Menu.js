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
              <div className={styles.onpicture}>
                <h2 className={styles.h2}>
                  A journey through the
                  <br />
                  Norwegian landscape
                </h2>
                <a className={styles.play} herf="http://vimeo.com/93347724">
                  play move
                </a>
              </div>
            </div>
            <div className={styles.global}>
              <Row type="flex" justify="center" align="top">
                <Col span={12}>
                  <DemoBox>
                    <p className={styles.word}>
                    At Maaemo, our focus is on a complete experience.
                    In doing so, we want to highlight the relationship between the raw produce,
                    and the expression in the cuisine.
                    </p>
                    <p className={styles.word}>
                    We have chosen to serve a distinct and considered set menu to all guests.
                    </p>
                    <p className={styles.word}>
                    The drink menus have been carefully curated to add an extra dimension to
                    each of the courses.This way we can ensure our guests have a unique and
                    precise experience on every occasion
                    </p>
                    <table className={styles.table}>
                      <tr className={styles.word}>
                        <td>The Seasonal Menu</td>
                        <td style={{ marginright: 10 }}>kr</td>
                        <td>2 800</td>
                      </tr>
                      <tr className={styles.word}>
                        <td>Wine Pairings</td>
                        <td>kr</td>
                        <td>1 800</td>
                      </tr>
                      <tr className={styles.word}>
                        <td>Juice Pairings</td>
                        <td>kr</td>
                        <td>9 50</td>
                      </tr>
                    </table>
                    <p className={styles.word}>
                      To fully enjoy the experience, we ask that you set aside a whole evening.
                    </p>
                  </DemoBox>
                </Col>
                <Col span={12} className={styles.picture}>
                  <DemoBox>
                    <img
                      className={styles.inpicture}
                      src="https://d27shkkua6xyjc.cloudfront.net/images/01.Menu/_1600x1600_fit_center-center/Menu_01_1200px.jpg?mtime=20141112152700" alt=""
                    />
                  </DemoBox>
                </Col>
              </Row>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={12} className={styles.pictureleft}>
                  <DemoBox value={150}>
                    <img
                      className={styles.inpicture}
                      src="https://d27shkkua6xyjc.cloudfront.net/images/01.Menu/_1600x1600_fit_center-center/Menu_02_1200px.jpg?mtime=20141112152711" alt=""
                    />
                  </DemoBox>
                </Col>
                <Col span={12} className={styles.wordright}>
                  <DemoBox>
                    <blockquote className={styles.wordone}>
                      I want my cooking to reflect the rugged nature and climate of Norway.
                      I want to create a progressive environment
                      that has a emphasis on the outstanding produce of our region.
                      <cite>
                        Esben Holmboe Bang — Wang Huajian
                      </cite>
                    </blockquote>
                  </DemoBox>
                </Col>
              </Row>
            </div>
            <div>
              <img
                className={styles.picturebottom}
                src="https://d27shkkua6xyjc.cloudfront.net/images/01.Menu/_1600x1600_fit_center-center/Menu_03_2500px.jpg?mtime=20141112152721"
                alt="fish"
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
                <Link to="/">
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
