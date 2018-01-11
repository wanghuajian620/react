import React from 'react';
import { Layout, Pagination, BackTop } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Artical from '../components/Artical';
import Footer from '../components/Footer';
import styles from './React.less';

const { Content } = Layout;

class Reactnative extends React.Component {
  state = {
    current: 1,
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  userclick = () => {
    this.props.dispatch({
      type: 'reactnative/secondessay',
    });
  }
  render() {
    const { reactnative } = this.props;
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
              reactnative.content.map(item => <Artical
                title={item.title}
                key={item.key}
                date={item.date}
                tag={item.tag}
                essay={item.essay}
              />)
            }
          </Content>
          <BackTop visibilityHeight={200} />
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
  reactnative: state.reactnative,
}))(Reactnative);
