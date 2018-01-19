import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import Delete from '../../components/Delete';

class Delet extends React.Component {
  handleDelete = () => {
    this.props.dispatch({
      type: 'delete/deleteessay',
      payload: 'article',
    });
  }
  render() {
    return (
      <div>
        <Delete />
        <Button onClick={this.handleDelete.bind(this)} className={styles.delet}>Delete</Button>
      </div>
    );
  }
}

export default Delet;
