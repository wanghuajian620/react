/**
 * Revision History:
 *     Initial: 2018/04/21          Wang Huajian
 */

import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>头部</Header>
          <Content>内容</Content>
          <Footer>底部</Footer>
        </Layout>
      </div>
    );
  }
}

export default HomePage;