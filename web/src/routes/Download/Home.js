/**
 * Revision History:
 *     Initial: 2018/04/21          Wang Huajian
 */

import React from 'react';
import { Input, Button, Card } from 'antd';
import { connect } from 'dva';

// import Avatar from '../../components/Avatar';
import Swiper from '../../components/Swiper';
import styles from '../../routes/Download/home.css';

class Home extends React.Component {
  handlerSubmit = () => {
    const params = {
      address: document.getElementById('address').value
    }
    this.props.dispatch({
      type: 'download/getUrl',
      payload: params
    })
  }
  render() {
    const { download } = this.props;
    return (
      <div>
        {/* <Avatar /> */}
        <Swiper />
        <div className={styles.flex}>
          <Input
            size="large"
            placeholder="Please write your site"
            id="address"
            className={styles.input}
          />
          <Button
            onClick={this.handlerSubmit.bind(this)}
            type="primary"
            size="large"
            className={styles.button}
          >立即请求地址
          </Button>
        </div>
        <div className={styles.flexcard}>
          <Card title="转换地址详情" className={styles.card}>
            <p>url: {download.urls.url}</p>
            <p>size: {download.urls.size}</p>
            <p>ext: {download.urls.ext}</p>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  download: state.download,
}))(Home);
