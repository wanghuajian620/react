import React from 'react';
import { Layout, Pagination } from 'antd';
import { connect } from 'dva';
import Artical from '../components/Artical';
import Footer from '../components/Footer';
import styles from './React.less';

class ReaLayout extends React.Component {
  state = {
    current: 3,
  }
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'react/firstessay',
  //   });
  // }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  usrclick = () => {
    this.props.dispatch({
      type: 'react/firstessay',
    });
  }
  render() {
    // const { content } = this.props;
    return (
      <div>
        <Layout className={styles.background}>
          <Artical />
          {/* {console.log(content, 'xxxxxx')} */}
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

export default connect(state => ({ react: state.react }))(ReaLayout);
