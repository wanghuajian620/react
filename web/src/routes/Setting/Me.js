/**
 * Revision History:
 *     Initial: 2018/05/13         Wang Huajian
 */

import React from 'react';
import { Input, Table } from 'antd';

import styles from './me.css';

const { TextArea } = Input;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Num',
  dataIndex: 'num',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `yusank ${i}`,
    num: 32,
    address: `https://images.pexels.com/photos/1054422/pexels-photo-1054422.jpeg?auto=compress&cs=tinysrgb&h=350 ${i}`,
  });
}

class Me extends React.Component {
  
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.flex}>
          <TextArea
            placeholder="Autosize height with minimum and maximum number of lines"
            autosize={{ minRows: 2, maxRows: 6 }}
            className={styles.input}
            size="large"
          />
          <div className={styles.fleximage}>
            <img
              src="https://images.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg?auto=compress&cs=tinysrgb&h=350"
              alt=""
              className={styles.image}
            />
            <h3 className={styles.username}>yusank</h3>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </div>
    );
  }
}

export default Me;
