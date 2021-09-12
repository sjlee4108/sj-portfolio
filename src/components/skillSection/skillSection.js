import React from 'react';
import styles from './skillSectionStyles.scss';

const getTechStacks = (stacks) => {
  return stacks.map((stack) => (
    <div data-aos="fade-right" className={styles.techContainer}>
      {stack.icon()}
      <div className={styles.infoContainer}>
        <b>{stack.name}</b>
        <div className={styles.techBarContainer}>
          <div className={styles.filledTechBar} style={{ width: `calc(${stack.weight} * 100%)` }} />
        </div>
      </div>
    </div>
  ));
};

const SkillSection = (props) => {
  const { techStacks } = props;
  return (
    <div data-aos="fade-right" className={styles.topContainer}>
      <h5 className={styles.title}>Tech Stacks</h5>
      {getTechStacks(techStacks)}
    </div>
  );
};

export default SkillSection;
