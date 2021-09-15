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

const getCup = () => {
  return (
    <div className={styles.coffeeContainer}>
      <div className={styles.trapezoid} />
      <div className={styles.cupHolder} />
    </div>
  );
};

const getLight = () => {
  return (
    <div className={styles.lightContainer}>
      <div className={styles.firstLightHolder} />
      <div className={styles.secondLightHolder} />
      <div className={styles.thirdLightHolder} />
      <div className={styles.mainBottom} />
      <div className={styles.mainTop} />
      <div className={styles.lightblub} />
    </div>
  );
};

const getAnimatedSection = () => {
  return (
    <div className={styles.animationSection}>
      {getLaptop()}
      {getTable()}
      {getCup()}
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
