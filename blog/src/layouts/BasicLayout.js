import React from 'react';
import { Layout } from 'antd';
import styles from './BasicLayout.less';

const { Content, Footer } = Layout;


class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div className={styles.body}>
        <Layout className={styles.site}>
          <Content>
            <img
              className={styles.photo}
              src="https://www.robmills.com.au/files/landing/_largeImage/rma_home_land_01.jpg"
              alt=""
            />
            <h1 className={styles.h1}>
              <span>React</span>
            </h1>
            <img
              className={styles.photo}
              src="https://www.robmills.com.au/files/landing/_largeImage/rma_home_architecture_01.jpg"
              alt=""
            />
            <h1 className={styles.h2}>
              <span>ReactNative</span>
            </h1>
            <img
              className={styles.photo}
              src="https://www.robmills.com.au/files/landing/_largeImage/rma_stuartstreet_06.jpg"
              alt=""
            />
            <h1 className={styles.h3}>
              <span>Angular</span>
            </h1>
            <img
              className={styles.photo}
              src="https://www.robmills.com.au/files/landing/_largeImage/Rob-Mills-Rural26839.jpg"
              alt=""
            />
            <h1 className={styles.h4}>
              <span>JavaScript</span>
            </h1>
          </Content>
          <Footer className={styles.footer}>
            <div className={styles.foot}>
              <h1 className={styles.text}>
                Welcome to here that is my blog
              </h1>
              <div className={styles.icon}>
                <a
                  className={styles}
                  href="http://github.com/wanghuajian620"
                  target=""
                >
                  github
                </a>
                <a
                  style={{ marginLeft: '50px' }}
                  href="http://gmail.com"
                  target=""
                >
                  gmail
                </a>
              </div>
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default BasicLayout;
