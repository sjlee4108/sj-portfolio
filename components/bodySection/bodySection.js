import React from 'react';
import styles from './bodySectionStyles.scss';

const BodySection = (props) => {
  const { title, id, sectionRef } = props;
  return (
    <article className={styles.bodyContainer} id={id} ref={sectionRef}>
      <h3 data-aos="fade-up" className={styles.title}>{title}</h3>
      <section className={styles.innerContainer}>
      {props.children}
      </section>
    </article>
  );
};

export default BodySection;
