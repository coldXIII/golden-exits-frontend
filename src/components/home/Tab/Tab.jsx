import React from 'react';
import styles from './Tab.module.scss';

const Tab = ({ panel }) => {
  return (
    <div className={styles.Tab}>
      <div className={styles.tabrow}>
        <div className={styles.tabitem}>
          <h1>men fashion</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            hicperferendis id unde.
          </p>
          <button>view more</button>
        </div>
        {panel.men.map((item, index) => (
          <div className={styles.tabitem} key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
      <div className={styles.tabrow}>
        <div className={styles.tabitem}>
          <h1>women fashion</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            hicperferendis id unde.
          </p>
          <button>view more</button>
        </div>
        {panel.women.map((item, index) => (
          <div className={styles.tabitem} key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
