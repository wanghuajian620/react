import React from 'react';
import { Layout, Pagination } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Artical from '../components/Artical';
import Footer from '../components/Footer';
import styles from './React.less';

const { Content } = Layout;

class Angular extends React.Component {
  state = {
    current: 1,
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  usrclick = () => {
    this.props.dispatch({
      type: 'angular/thirdessay',
    });
  }
  render() {
    const { angular } = this.props;
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
              angular.content.map(item => <Artical
                title={item.title}
                key={item.key}
                date={item.date}
                tag={item.tag}
                essay={item.essay}
              />)
            }
          </Content>
          <Pagination
            current={this.state.current} onChange={this.onChange} total={50}
            className={styles.page}
          />
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default connect(state => ({
  angular: state.angular,
}))(Angular);
