import React from 'react';
import { Layout } from 'antd';


const { Header, Footer, Content } = Layout;

class BasicLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const layout = (
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default BasicLayout;
