import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div>
      <div>
        <div className={styles.header}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              <span>Golden</span> exits
            </h1>
          </div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.nav}>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Intro;
