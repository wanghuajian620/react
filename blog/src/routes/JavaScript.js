import React from 'react';
import { Layout, Menu, Card, Pagination, BackTop, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './React.less';

const { Header, Content, Footer } = Layout;


class JavaScipt extends React.Component {
  state = {
    current: 1,
    card: [{ title: '4b', essay: 'nihao', key: 'index[0]' }, { title: '4b', essay: 'nihao', key: 'index[1]' }, { title: '4b', essay: 'nihao', key: 'index[2]' }, { title: '4b', essay: 'nihao', key: 'index[3]' }],
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className={styles.header}>
            <div className={styles.logo}>
              <Link to="/">
                <img src="http://www.logobook.com/wp-content/uploads/2017/03/MorseLife_logo.svg" alt="" />
              </Link>
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              className={styles.menu}
            >
              <Menu.Item key="1" className={styles.reactnative}>
                <span>JavaScipt</span>
              </Menu.Item>
              <Menu.Item key="2" className={styles.reactnative}>
                <Link to="/react">
                  <span>React</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" className={styles.reactnative}>
                <Link to="/reactnative">
                  <span>ReactNative</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4" className={styles.reactnative}>
                <Link to="/angular">
                  <span>Angular</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.content}>
            {
              this.state.card.map(item => (
                <Card
                  title={item.title}
                  key={item.key}
                  className={styles.card}
                >
                  {item.essay}
                </Card>
              ))
            }
            <Pagination
              current={this.state.current} onChange={this.onChange} total={50}
              className={styles.page}
            />
            <BackTop />
            <strong
              className={styles.texthidden}
              style={{ color: 'rgba(50, 50, 50, 0.6)' }}
            >
              回到顶部
            </strong>
          </Content>
          <Footer>
            <div className={styles.footer}>
              <a
                className={styles.bottom}
                href="https://github.com/wanghuajian620"
              >
                开源GitHub
              </a>
              <a
                className={styles.bottom}
                href="http://gmail.com/wanghuajian620"
              >
              Gmail
              </a>
              <a
                href="http://gmail.com/wanghuajian620"
              >
              Blog个人
              </a>
              <div>
                Copyright <Icon type="copyright" /> 2017 个人博客圣诞夜出品
              </div>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default JavaScipt;
