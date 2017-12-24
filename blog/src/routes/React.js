import React from 'react';
import { Layout, Menu, Card, Pagination, BackTop } from 'antd';
import styles from './React.less';

const { Header, Content, Footer } = Layout;


class ReaLayout extends React.Component {
  state = {
    current: 3,
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
              <img src="http://www.logobook.com/wp-content/uploads/2017/03/MorseLife_logo.svg" alt="" />
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              className={styles.menu}
            >
              <Menu.Item key="1" className={styles.reactnative}>
                <span>ReactNative</span>
              </Menu.Item>
              <Menu.Item key="2" className={styles.reactnative}>
                <span>Angular</span>
              </Menu.Item>
              <Menu.Item key="3" className={styles.reactnative}>
                <span>JavaScipt</span>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.content}>
            <Card title="Card title" className={styles.card}>
              圣诞了，考研又进入倒计时了。
            </Card>
            <Card title="Card title" className={styles.card}>
              圣诞了，考研又进入倒计时了。
            </Card>
            <Card title="Card title" className={styles.card}>
              圣诞了，考研又进入倒计时了。
            </Card>
            <Card title="Card title" className={styles.card}>
              圣诞了，考研又进入倒计时了。
            </Card>
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
          <Footer>sfsf</Footer>
        </Layout>
      </div>
    );
  }
}
export default ReaLayout;
