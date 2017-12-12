import React from 'react';
import { Layout } from 'antd';
// import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends React.PureComponent {
  render() {
    const layout = (
      <Layout>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        <Sider>Sider</Sider>
      </Layout>
    );
    return (<div>{layout}</div>);
  }
}

export default(BasicLayout);
