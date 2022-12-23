import React from 'react'
import styles from './NewArrivals.module.scss'
import na1 from 'assets/img/arrivals/new-arrival-1.jpg';
import na2 from 'assets/img/arrivals/new-arrival-2.jpg';
import na3 from 'assets/img/arrivals/new-arrival-3.jpg';

const NewArrivals = () => {
  return (
    <section className={styles.Arrivals}>
    <div className={styles.images}>
      <div className={styles.image}>
        <img src={na1} alt="" />
        <div className={styles.inner_text}>
          <span>Summer</span> collection
        </div>
      </div>
      <div className={styles.image}>
        <img src={na2} alt="" />
        <div className={styles.inner_text}>
          <span>best</span> quality
        </div>
      </div>
      <div className={styles.image}>
        <img src={na3} alt="" />
        <div className={styles.inner_text}>
          <span>Autumn</span> collection
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewArrivals