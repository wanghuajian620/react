/**
 * Revision History:
 *     Initial: 2018/04/21          Wang Huajian
 */

import React from 'react';
import { Input, Select, Button } from 'antd';

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
    const Option = Select.Option;
    const selectBefore = (
      <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
      </Select>
    );
    const selectAfter = (
      <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
      </Select>
    );
    return (
      <div>
        <Avatar />
        <div className={styles.select}>
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue="mysite"
            className={styles.input}
            id="address"
          />
        </div>
        <div className={styles.button}>
          <Button onClick={this.handlerSubmit.bind(this)} type="primary" icon="download" size="large">Download</Button>
        </div>
      </div>
    );
  }
}

export default Home;
