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
      <div className={styles.secondLightHolder} />
      <div className={styles.firstLightHolder}>
        <div className={styles.firstLightConnector} />
      </div>
      <div className={styles.mainBottom} />
      <div className={styles.mainTop}>
        <div className={styles.secondLightConnector} />
      </div>
      <div className={styles.lightblub} />
      <div className={styles.lightTrapezoid} />
    </div>
  );
};

const getWorkSection = () => {
  return (
    <div className={styles.animationSection}>
      {getLaptop()}
      {getTable()}
      {getCup()}
      {getLight()}
    </div>
  );
};

const getBoardSection = (name, description) => {
  return (
    <div className={styles.boardContainer}>
        <div className={styles.boardConnectorContainer}>
          <div className={styles.boardConnectorLeft} />
          <div className={styles.boardConnectorRight} />
        </div>
        <div className={styles.boardMiddleHolder} />
        <div className={styles.boardBottomHolder} />
        <div className={styles.markerHolder}>
          <div className={styles.blackPen} />
          <div className={styles.bluePen} />
          <div className={styles.eraser} />
        </div>
        <div className={styles.board}>
          <h1>{`Hi, I am ${name}`}</h1>
          <h2>{description}</h2>
        </div>
    </div>
  );
};

const TitleSection = (props) => {
  const { name, description } = props;
  return (
    <div className={styles.container}>
     {getBoardSection(name, description)}
     {getWorkSection()}
    </div>
  );
};

export default TitleSection;
