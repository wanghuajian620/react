/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2017/12/24        Wang Huajian
 */

import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'dva/router';

import styles from './BasicLayout.less';

const { Content } = Layout;

export default class BasicLayout extends React.PureComponent {
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
