/**
 * 2018-01-18 Wang huajian
 */

import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

class Correct extends React.Component {
  static defaultProps = {
    title: '',
    article: '',
  }
  static PropTypes = {
    title: PropTypes.string,
    article: PropTypes.string,
  }
  render() {
    return (
      <div>
        <Card title="标题" className={styles.card}>
          简介、文章
        </Card>
      </div>
    );
  }
}

export default Correct;
