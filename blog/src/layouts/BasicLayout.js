import React from 'react';
import { Layout } from 'antd';
import styles from './BasicLayout.less';

const { Content, Footer } = Layout;


class BasicLayout extends React.PureComponent {
  render() {
    return (
      <div className={styles.body}>
        <Layout>
          <Content>
            <div className={styles.allphoto}>
              <img
                className={styles.firstphoto}
                src="https://www.robmills.com.au/files/landing/_largeImage/rma_home_land_01.jpg" alt="" />
              <img
                className={styles.firstphoto}
                src="https://www.robmills.com.au/files/landing/_largeImage/rma_home_architecture_01.jpg" alt="" />
              <img
                className={styles.firstphoto}
                src="https://www.robmills.com.au/files/landing/_largeImage/rma_stuartstreet_06.jpg" alt="" />
              <img
                className={styles.firstphoto}
                src="https://www.robmills.com.au/files/landing/_largeImage/Rob-Mills-Rural26839.jpg" alt="" />
            </div>
          </Content>
          <Footer className={styles.footer}>
            Architects & Interior Designers based in Melbourne, Sydney and Perth
          </Footer>
        </Layout>
      </div>
    );
  }
}
export default BasicLayout;
