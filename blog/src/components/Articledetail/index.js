import React from 'react';
import { Layout, Card } from 'antd';
import styles from './index.less';

const { Content } = Layout;

class Articledetail extends React.Component {
  componentWillMount() {
    console.log('321'); // eslint-disable-line
  }
  render() {
    return (
      <div>
        <Layout>
          <Content className={styles.background}>
            <Card title="文章标题" className={styles.card}>
              <p>具体 内容</p>
            </Card>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Articledetail;
