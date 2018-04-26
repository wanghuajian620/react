/**
 * Revision History:
 *     Initial: 2018/04/26          Wang Huajian
 */

import React from 'react';
import styles from './avatar.css';

const Avatar = (props) => {
  return (
    <div className={styles.flex}>
      <img
        src="https://images.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg?auto=compress&cs=tinysrgb&h=350"
        alt=""
        className={styles.image}
      />
      <h3 className={styles.username}>mingzi</h3>
    </div>
  );
};

Avatar.propTypes = {
};

export default Avatar;
