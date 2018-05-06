/**
 * Revision History:
 *     Initial: 2018/04/21          Wang Huajian
 */

import React from 'react';
import { Input, Button } from 'antd';
import { connect } from 'dva';

import Avatar from '../../components/Avatar';
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
    return (
      <div>
        <Avatar />
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
          >立即下载
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  download: state.download,
}))(Home);
