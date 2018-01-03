import React from 'react';
import { Layout, Menu, Card, Pagination, BackTop, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import styles from './React.less';


const { Header, Content, Footer } = Layout;


class ReaLayout extends React.Component {
  state = {
    current: 3,
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'Reac/Fisrtessay',
    });
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  render() {
    const { Reac } = this.props;
    console.log(Reac.essay);
    const { essay } = Reac;
    return (
      <div>
        <Layout className={styles.background}>
          <Header className={styles.header}>
            <div className={styles.logo}>
              <Link to="/">
                <img style={{ marginTop: '30px' }} src="http://www.logobook.com/wp-content/uploads/2017/03/MorseLife_logo.svg" alt="" />
              </Link>
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              className={styles.menu}
            >
              <Menu.Item key="1" className={styles.reactnative}>
                <span>React</span>
              </Menu.Item>
              <Menu.Item key="2" className={styles.reactnative}>
                <Link to="/reactnative">
                  <span>ReactNative</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" className={styles.reactnative}>
                <Link to="/angular">
                  <span>Angular</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4" className={styles.reactnative}>
                <Link to="/javascript">
                  <span>JavaScipt</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.content}>
            <Card title="Card title" className={styles.card}>
              <Icon type="calendar" className={styles.icon} />
              2017-01-03
              { essay }
            </Card>
            <Card title="Card title" className={styles.card}>
              <Icon type="calendar" className={styles.icon} />
              2017-01-03
              <p>圣诞了，考研又进入倒计时了。</p>
            </Card>
            <Card title="Card title" className={styles.card}>
              <Icon type="calendar" className={styles.icon} />
              2017-01-03
              <p>圣诞了，考研又进入倒计时了。</p>
            </Card>
            <Card title="Card title" className={styles.card}>
              <Icon type="calendar" className={styles.icon} />
              2017-01-03
              <p>圣诞了，考研又进入倒计时了。</p>
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
          <Footer>
            <div className={styles.footer}>
              <a
                className={styles.bottom}
                href="https://github.com/wanghuajian620"
              >
                开源GitHub
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
              Blog个人
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
export default connect(state => ({ Reac: state.Reac }))(ReaLayout);
