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
            <img
              className={styles.photo}
              src="https://www.robmills.com.au/files/landing/_largeImage/rma_home_architecture_01.jpg"
              alt=""
            />
            <img
              className={styles.photo}
              src="https://www.robmills.com.au/files/landing/_largeImage/rma_stuartstreet_06.jpg"
              alt=""
            />
            <img
              className={styles.photo}
              src="https://www.robmills.com.au/files/landing/_largeImage/Rob-Mills-Rural26839.jpg"
              alt=""
            />
          </Content>
          <Footer className={styles.footer}>
            <div className={styles.text}>
              Architects & Interior Designers based in Melbourne, Sydney and Perth
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default BasicLayout;
