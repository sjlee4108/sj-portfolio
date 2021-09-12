import React from 'react';
import styles from './bodySectionStyles.scss';

const BodySection = (props) => {
  const { title, id, sectionRef } = props;
  return (
    <section className={styles.bodyContainer} id={id} ref={sectionRef}>
      <h3 className={styles.title}>{title}</h3>
      {props.children}
    </section>
  );
};

export default BodySection;
