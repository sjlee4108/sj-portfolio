import React from 'react';
import styles from './bodySectionStyles.scss';

const BodySection = (props) => {
  const { title } = props;
  return (
    <div className={styles.bodyContainer}>
      <h3 className={styles.title}>{title}</h3>
      {props.children}
    </div>
  );
};

export default BodySection;
