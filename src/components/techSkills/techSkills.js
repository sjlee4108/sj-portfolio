import React from 'react';
import styles from './techSkillsStyles.scss';

const getTechStacks = (stacks) => {
  return stacks.map((stack) => (
    <div className={styles.techContainer}>
      {stack.icon()}
      <div className={styles.infoContainer}>
        <b>{stack.name}</b>
        <div className={styles.techBarContainer}>
          <div className={styles.filledTechBar} />
        </div>
      </div>
    </div>
  ));
};

const TechSkills = (props) => {
  const { techStacks } = props;
  return (
    <div className={styles.topContainer}>
      <h5 className={styles.title}>Tech Stacks</h5>
      {getTechStacks(techStacks)}
    </div>
  );
};

export default TechSkills;
