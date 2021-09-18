import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { RiMoonClearLine } from 'react-icons/ri';
import styles from './titleSectionStyles.scss';

const preTypeWriterText = 'import React from \'react\'';
const postTypeWriterText = [`

const homeScreen = () => {
  return (
    <div className="homeContainerStyle">
      <h1>Jason the Developer</h1>
      <AboutMe name="Seungjae Lee"/>
    </div>
  );
};`];

const getLaptop = () => {
  return (
    <div className={styles.laptopContainer}>
      <div className={styles.laptopScreen}>
        <div className={styles.laptopTop}>
          <div className={styles.redCircle} />
          <div className={styles.yellowCircle} />
          <div className={styles.greenCircle} />
        </div>
        {preTypeWriterText}
        <Typewriter
          words={postTypeWriterText}
          cursor
          cursorStyle="|"
        />
      </div>
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
        <div data-aos="flip-down" className={styles.board}>
          <h1>{`Hi, I am ${name}`}</h1>
          <h2>{description}</h2>
          <RiMoonClearLine style={{ position: 'absolute', left: '0.5em', top: '1.5em' }} />
          <small className={styles.sideBoardText}>Try dark mode!!!</small>
          <small className={styles.toDoText}>* To-do</small>
          <small className={styles.postIT}>한글 패치 준비중</small>
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
