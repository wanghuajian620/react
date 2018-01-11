import React from 'react';
import { Layout, Card, BackTop } from 'antd';
import Top from '../components/Top';
import Footer from '../components/Footer';
import styles from './Docs.less';

const { Content } = Layout;
// const ReactMarkdown = require('react-markdown');

class Doc extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Top />
          <Content className={styles.background}>
            <Card title="Card title" className={styles.card}>
              <p>Card content</p>
            </Card>
          </Content>
          <BackTop visibilityHeight={200} />
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default Doc;
