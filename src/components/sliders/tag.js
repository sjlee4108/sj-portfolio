import React from 'react';
import styles from './tagStyles.scss';

const Tag = (props) => {
  const { value } = props;
  return (
    <div className={styles.tagContainer}>
      {`#${value}`}
    </div>
  );
};

export default Tag;
