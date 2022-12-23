import React from 'react';
import { news } from 'utils/news';
import styles from './BlogAside.module.scss';

export const BlogAside = () => {
  return (
    <aside className={styles.BlogAside}>
      <article className={styles.recentposts}>
        <ul>
          <h4>RECENT NEWS</h4>
          {news.map((item) => (
            <li key={item.id}>
              <div className={styles.flex}>
                <img src={item.image} alt="" />
                <h5 className={styles.post_title}>{item.title}</h5>
              </div>
              <span className={styles.post_date}>
                {new Date(item.publishedAt).toLocaleString()}
              </span>
              <p className={styles.post_text}>{item.description}</p>
              <cite>{item.author}</cite>
            </li>
          ))}
        </ul>
        <div></div>
      </article>
    </aside>
  );
};

