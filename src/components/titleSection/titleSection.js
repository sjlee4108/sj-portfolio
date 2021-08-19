import React from 'react';
import styles from './titleSectionStyles.scss';

const TitleSection = (props) => {
  const { name, description } = props;
  return (
    <div className={styles.container}>
      <h1>{`Hi, I am ${name}`}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default TitleSection;
