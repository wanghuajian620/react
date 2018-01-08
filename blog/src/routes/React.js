import React from 'react';
import { Layout, Pagination } from 'antd';
import Artical from '../components/Artical';
import Footer from '../components/Footer';
import styles from './React.less';

class ReaLayout extends React.Component {
  state = {
    current: 3,
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'react/firstessay',
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

export default ReaLayout;
