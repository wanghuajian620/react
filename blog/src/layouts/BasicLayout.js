import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './BasicLayout.less';

const { Content } = Layout;


class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div className={styles.body}>
        <Layout className={styles.site}>
          <Content>
            <Row>
              <Col xs={24} sm={24} md={12} lg={6} xl={6} >
                <Link to="/react" style={{ position: 'relative' }}>
                  <img
                    className={styles.photo}
                    src="https://www.robmills.com.au/files/landing/_largeImage/rma_home_land_01.jpg"
                    alt=""
                  />
                  <h1 className={styles.h1}>
                    <span>React</span>
                  </h1>
                </Link>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <Link to="/reactnative" style={{ position: 'relative' }}>
                  <img
                    className={styles.photo}
                    src="https://www.robmills.com.au/files/landing/_largeImage/rma_home_architecture_01.jpg"
                    alt=""
                  />
                  <h1 className={styles.h2}>
                    <span>ReactNative</span>
                  </h1>
                </Link>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <Link to="/angular" style={{ position: 'relative' }}>
                  <img
                    className={styles.photo}
                    src="https://www.robmills.com.au/files/landing/_largeImage/rma_stuartstreet_06.jpg"
                    alt=""
                  />
                  <h1 className={styles.h3}>
                    <span>Angular</span>
                  </h1>
                </Link>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <Link to="/javascript" style={{ position: 'relative' }}>
                  <img
                    className={styles.photo}
                    src="https://www.robmills.com.au/files/landing/_largeImage/Rob-Mills-Rural26839.jpg"
                    alt=""
                  />
                  <h1 className={styles.h4}>
                    <span>JavaScript</span>
                  </h1>
                </Link>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default BasicLayout;
