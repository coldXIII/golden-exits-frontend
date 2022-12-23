import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, selectIsAuth } from '../../../redux/slices/auth';
import styles from './Header.module.scss';

const Header = ({ title, buttonTitle, to }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector((state) => state.auth.data);

  const onClickLogout = () => {
    if (window.confirm('Do you really want to log out?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.logo}>
          <span>Golden Exits</span> {title}
        </div>

        <div className={styles.buttons}>
          {isAuth ? (
            <div className={styles.userActions}>
              <div className={styles.avatarBox}>
                <img src={user.avatarUrl} alt={user.username} />
              </div>
              <Link to={to}>
                <button className={styles.writepost}>{buttonTitle}</button>
              </Link>
              <button onClick={onClickLogout} className={styles.logout}>
                LogOut
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className={styles.login}>LogIn</button>
              </Link>
              <Link to="/register">
                <button className={styles.register}>Create Account</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
