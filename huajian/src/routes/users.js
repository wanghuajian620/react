import React from 'react';

import UserList from '../components/Users/UserList';
import styles from './Users.less';

function Users() {
  const userListProps = {};

  return (
    <div className={styles.normal}>
      <UserList {...userListProps} />
    </div>
  );
}

export default Users;
