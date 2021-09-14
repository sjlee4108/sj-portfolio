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

const getSoftSkills = (skills) => {
  return (
    <div className={styles.softTopContainer}>
        {skills.map((skill) => (
          <div data-aos="fade-left" className={styles.softContainer}>
            {skill.icon()}
            <div className={styles.softDescriptionContainer}>
              <b>{skill.title}</b>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const SkillSection = (props) => {
  const { skills, skillType } = props;
  return (
    <div data-aos="fade-up" className={styles.topContainer}>
      <h5 data-aos="fade-up" className={styles.title}>{skillType === 'tech' ? 'Tech Stacks' : 'Soft Skills'}</h5>
      {skillType === 'tech' ? getTechStacks(skills) : getSoftSkills(skills)}
    </div>
  );
};

export default SkillSection;
