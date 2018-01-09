import React from 'react';
import { Layout, Menu, Card, BackTop } from 'antd';
import Footer from '../components/Footer';
import styles from './Docs.less';

const { Header, Content } = Layout;

class Doc extends React.Component {
  render() {
    return (
      <div>
        <Layout>
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
            <BackTop visibilityHeight={0} />
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default Doc;
