import React from 'react';
import { Layout, Pagination, BackTop } from 'antd';
import { connect } from 'dva';
import { Switch, Route } from 'react-router-dom';

import Logo from '../components/Logo';
import Artical from '../components/Artical';
import Articledetail from '../components/Articledetail';
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
            <Switch>
              <Route
                exact
                path="/reactnative"
                render={() => (
                  <div>
                    <Logo />
                    {
                      reactnative.content.map(item => <Artical
                        title={item.title}
                        key={item.key}
                        date={item.date}
                        tag={item.tag}
                        essay={item.essay}
                      />)
                    }
                    <Pagination
                      current={this.state.current}
                      onChange={this.onChange}
                      total={50}
                      className={styles.page}
                    />
                  </div>
                )}
              />
              <Route
                path="/reactnative/reactnative-essay"
                render={() => <Articledetail />}
              />
            </Switch>
          </Content>
          <BackTop visibilityHeight={200} />
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default connect(state => ({
  reactnative: state.reactnative,
}))(Reactnative);
