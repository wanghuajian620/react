import React from 'react';
import { Layout, Pagination } from 'antd';
import { connect } from 'dva';
import Artical from '../components/Artical';
import Footer from '../components/Footer';
import styles from './React.less';

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
    return (
      <div>
        <Layout className={styles.background}>
          <Artical />
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

export default connect(state => ({ reactnative: state.reactnative }))(Reactnative);
