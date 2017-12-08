import React from 'react';

import UserList from '../components/Users/UserList';
import styles from './Users.less';

function Users() {
  const userListProps = {
    total: 3,
    current: 1,
    loading: false,
    dataSource: [
      {
        name: '张三',
        age: 23,
        address: '成都',
      },
      {
        name: '李四',
        age: 24,
        address: '杭州',
      },
      {
        name: '王五',
        age: 25,
        address: '上海',
      },
    ],
  };

  return (
    <div className={styles.normal}>
      <UserList {...userListProps} />
    </div>
  );
}

export default Users;
