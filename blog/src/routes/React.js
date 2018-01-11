import React from 'react';
import { Layout, Pagination, BackTop } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import Artical from '../components/Artical';
import Footer from '../components/Footer';
import styles from './React.less';

const { Content } = Layout;

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
    const { react } = this.props;
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
              react.content.map(item => <Artical
                title={item.title}
                key={item.key}
                date={item.date}
                tag={item.tag}
                essay={item.essay}
              />)
            }
            <BackTop visibilityHeight={200} />
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
  react: state.react,
}))(ReaLayout);
