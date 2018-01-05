import React from 'react';
import { Layout, Card, Pagination, BackTop, Icon, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import styles from './React.less';


const { Content, Footer } = Layout;


class ReaLayout extends React.Component {
  state = {
    current: 3,
    card: [{ title: 'apple', date: '2017-01-03', tag: 'angular', essay: 'lala', key: 'index[0]' },
    { title: 'apple', date: '2017-01-03', tag: 'css3', essay: 'lala', key: 'index[1]' },
    { title: 'apple', date: '2017-01-03', tag: 'js', essay: 'lala', key: 'index[2]' },
    { title: 'apple', date: '2017-01-03', tag: 'angular', essay: 'lala', key: 'index[3]' }],
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'Reac/Firstessay',
    });
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  // usrclick = () => {
  //   this.props.dispatch({
  //     type: 'Reac/Firstessay',
  //   });
  // }
  render() {
    const { Reac } = this.props;
    console.log(Reac.essay);
    const { essay } = Reac;
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
                <Link to="/essay">
                  <Card
                    data-aos="fade-up"
                    title={item.title}
                    key={item.key}
                    className={styles.card}
                    onClick={this.usrclick}
                  >
                    <Icon type="calendar" className={styles.icon} />
                    {item.date}
                    <Tag color="#2db7f5" className={styles.tag}>{item.tag}</Tag>
                    <p>{essay}</p>
                  </Card>
                </Link>
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
export default connect(state => ({ Reac: state.Reac }))(ReaLayout);
