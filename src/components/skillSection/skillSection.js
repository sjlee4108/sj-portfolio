import React from 'react';
import styles from './skillSectionStyles.scss';

const getTechStacks = (stacks) => {
  return stacks.map((stack) => (
    <div key={stack.name} data-aos="fade-up" className={styles.techContainer}>
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
          <div key={skill.title} data-aos="fade-up" className={styles.softContainer}>
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
      <h4 data-aos="fade-up" className={styles.title}>{skillType === 'tech' ? 'Tech Stacks' : 'Soft Skills'}</h4>
      {skillType === 'tech' ? getTechStacks(skills) : getSoftSkills(skills)}
    </div>
  );
};

export default SkillSection;
