/**
 * 2018-01-16 Wang huajian
 */

import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

class Manager extends React.Component {
  render() {
    return (
      <div>
        <Card title="标题" className={styles.card}>
          简介、文章
        </Card>
        <Card title="标题" className={styles.card}>
          简介、文章
        </Card>
      </div>
    );
  }
}

export default Manager;
