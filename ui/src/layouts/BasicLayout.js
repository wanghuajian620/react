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
    collapsed: true,
  }
  componentDidMount() {
    // eslint-disable-next-line no-undef
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
      <Layout
        className={styles.global}
      >
        <Header
          className={styles.pageheader}
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
          <Content>
            <div>
              <video
                className={styles.video}
                style={{ width: 1440 }}
                src="https://d27shkkua6xyjc.cloudfront.net/videos/maaemo-film-2.mp4?mtime=20141113185431" autoPlay="autoplay" loop="loop"
              >
                ssss
              </video>
              <h1 className={styles.title}>
                My first Dining room
              </h1>
              <div className={styles.content}>
                <p className={styles.p}>
                At Maaemo, my focus is on a complete experience.
                In doing so, I want to highlight the relationship between the raw nature,
                produce and our cultural history. Welcome to my universe.
                </p>
                <artical className={styles.artical}>
                  <img
                    className={styles.img}
                    src="https://d27shkkua6xyjc.cloudfront.net/images/01.Menu/_1600x1600_fit_center-center/Menu_01_1200px.jpg?mtime=20141112152700"
                    alt="girl have food"
                  />
                  <h2 className={styles.words}>
                    Welcome to my virgo web blog,
                    Best wishes to you!!!
                  </h2>
                </artical>
                <artical className={styles.articalone}>
                  <img
                    className={styles.imgone}
                    src="https://d27shkkua6xyjc.cloudfront.net/images/02.About/_672x504_crop_center-center/About_02_2500px.jpg?mtime=20141112134904"
                    alt="river"
                  />
                  <h2 className={styles.word}>
                    WWANGHUAJIAN IS a  sunshineboy
                  </h2>
                </artical>
              </div>
              <img
                className={styles.frontblog}
                src="https://d27shkkua6xyjc.cloudfront.net/images/05.Stories/04.Munchies-Urchins/_1440x920_crop_center-center/Urchin_03_2500px.jpg?mtime=20141112093703"
                alt="My first blog"
              />
              <h2
                className={styles.word}
              >
                The first book from Maaemo is now available
              </h2>
            </div>
          </Content>
          <Sider
            width={400}
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

export default (BasicLayout);
