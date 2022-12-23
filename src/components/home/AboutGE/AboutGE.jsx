import React from 'react';
import { Container } from '@mui/material';
import styles from './AboutGE.module.scss';
import pt1 from 'assets/img/arrivals/product-type-1.jpg';
import pt2 from 'assets/img/arrivals/product-type-2.jpg';
import pt3 from 'assets/img/arrivals/product-type-3.jpg';
import pt4 from 'assets/img/arrivals/product-type-4.jpg';

const AboutGE = () => {
  return (
    <section className={styles.AboutGE}>
      <div className={styles.title}>
        <h1>
          About <span>Golden Exits</span>{' '}
        </h1>
        <p>Read the History</p>
      </div>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <div className={styles.grid}>
            <img src={pt1} alt="" />
            <img src={pt2} alt="" />
            <img src={pt3} alt="" />
            <img src={pt4} alt="" />
          </div>
          <div className={styles.textbox}>
            <div className={styles.textbox_inner}>
              <h2>MAURIS VITAE ERAT CONSEQUAT AUCTOR EU IN ELIT.</h2>
              <p>
                Golden Exits is your entance to the world of gold . Feel free to
                download, customize and use this template for your websites.
                Proin gravida nibh vel velit auctor aliquet. <br /> <br />{' '}
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Sed non mauris
                vitae erat consequat auctor eu in elit.
                <br /> <br /> Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Mauris in erat
                justo. Vivamus condimentum vel sem sed sagittis. Duis non sapien
                egestas, eleifend felis vel, consequat quam.
              </p>
              <span>
                <em>MAURIS IN ERAT JUSTO</em>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutGE;
