import React from 'react';
import { Layout } from 'antd';
import styles from './Docs.less';

const { Header, Content, Footer } = Layout;

class Doc extends React.Component {
  render() {
    return (
      <div>
        <Header className={styles.header}>
          2018
        </Header>
        <Content className={styles.content}>
          新年新气象
        </Content>
        <Footer className={styles.footer}>
          那可厉害了
        </Footer>
      </div>
    );
  }
}
export default Doc;
