import React from 'react';
import styles from './UserInfo.module.scss';

const UserInfo = ({ avatarUrl, username, createdAt }) => {
  const date = new Date(createdAt).toDateString();

  return (
    <div className={styles.UserInfo}>
      <div className={styles.avatar}>
        <img src={avatarUrl ? avatarUrl : '/noavatar.png'} alt={username} />
      </div>
      <div className={styles.userDetails}>
        <span className={styles.userName}>{username}</span>
        <span className={styles.additional}>{date}</span>
      </div>
    </div>
  );
};
export default UserInfo;
