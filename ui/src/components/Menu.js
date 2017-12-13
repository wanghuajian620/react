import React from 'react';
import { Layout } from 'antd';


const { Header, Content, Sider } = Layout;

class Bar extends React.PureComponent {
  render() {
    const layout = (
      <Layout>
        <Header>你好</Header>
        <Layout>
          <Content>哇</Content>
          <Sider>丝丝</Sider>
        </Layout>
      </Layout>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default (Bar);
