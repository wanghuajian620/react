import React from 'react';
import { Layout, Menu, Card, Icon, BackTop } from 'antd';
import styles from './Docs.less';

const { Header, Content, Footer } = Layout;

class Doc extends React.Component {
  render() {
    return (
      <div>
        <Layout id="canvas">
          <Header className={styles.header}>
            <h3 className={styles.text}>Christmas blog</h3>
            <Menu
              mode="horizontal"
              className={styles.menu}
            >
              <Menu.Item key="1">Back</Menu.Item>
              <Menu.Item key="2">归档</Menu.Item>
              <Menu.Item key="3">关于</Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.background}>
            <Card title="Card title" className={styles.card}>
              <p>Card content</p>
            </Card>
            <div className={styles.backtop}>
              <BackTop visibilityHeight={0} />
            </div>
          </Content>
          <Footer>
            <div className={styles.footer}>
              <a
                className={styles.bottom}
                href="https://github.com/wanghuajian620"
              >
                GitHub
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
              Blog
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
export default Doc;
