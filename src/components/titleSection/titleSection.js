import React from 'react';
import styles from './titleSectionStyles.scss';

const getLaptop = () => {
  return (
    <div className={styles.laptopContainer}>
      <div className={styles.laptopScreen} />
      <div className={styles.laptopBottom} />
    </div>
  );
};

const getTable = () => {
  return (
    <div className={styles.table}>
      <div className={styles.tableSide}>
        <div className={styles.tableCabinet}>
          <div className={styles.tableHolder} />
        </div>
      </div>
    </div>
  );
};

const getAnimatedSection = () => {
  return (
    <div className={styles.animationSection}>
      {getLaptop()}
      {getTable()}
    </div>
  );
};

const TitleSection = (props) => {
  const { name, description } = props;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{`Hi, I am ${name}`}</h1>
        <h2>{description}</h2>
      </div>
     {getAnimatedSection()}
    </div>
  );
};

export default TitleSection;
