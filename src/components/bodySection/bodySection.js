import React from 'react';
import styles from './bodySectionStyles.scss';

const BodySection = (props) => {
  const { title, id, sectionRef } = props;
  return (
    <div className={styles.bodyContainer} id={id} ref={sectionRef}>
      <h3 className={styles.title}>{title}</h3>
      {props.children}
    </div>
  );
};

export default BodySection;
