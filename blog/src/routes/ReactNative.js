import React from 'react';
import { Layout, Card, Pagination, BackTop, Icon, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import styles from './React.less';


const { Content, Footer } = Layout;


class Reactnative extends React.Component {
  state = {
    current: 1,
    card: [{ title: 'ReactNative快速入门', date: '2017-01-03', tag: 'html', essay: 'nihao', key: 'index[0]' },
    { title: '2b', date: '2017-01-03', tag: 'css', essay: 'nihao', key: 'index[1]' },
    { title: '2b', date: '2017-01-03', tag: 'css3', essay: 'nihao', key: 'index[2]' },
    { title: '2b', date: '2017-01-03', tag: 'reactnative', essay: 'nihao', key: 'index[3]' }],
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  userclick = () => {
    this.props.dispatch({
      type: 'Native/Secondessay',
    });
  }
  render() {
    console.log('fdfdfds', this.props);// eslint-disable-line
    const { Native } = this.props;
    const { essay } = Native;
    console.log('...', essay);// eslint-disable-line
    return (
      <div>
        <Layout className={styles.background}>
          <Content className={styles.content}>
            <div className={styles.logo}>
              <Link to="/">
                <img src="http://www.logobook.com/wp-content/uploads/2017/03/MorseLife_logo.svg" alt="" />
              </Link>
            </div>
            {
              this.state.card.map(item => (
                <Card
                  title={item.title}
                  key={item.key}
                  className={styles.card}
                  onClick={this.userclick}
                >
                  <Icon type="calendar" className={styles.icon} />
                  {item.date}
                  <Tag color="#87d068" className={styles.tag}>{item.tag}</Tag>
                  <p>{ essay }</p>
                </Card>
              ))
            }
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
export default connect(state => ({ Native: state.Native }))(Reactnative);
