import React from 'react';
import styles from './projectBoxStyles.scss';

const ProjectBox = (props) => {
  const { project } = props;
  return (
    <div className={styles.tagContainer}>
      <img className={styles.imageContainer} src={project.image} alt="" />
      <div className={styles.nameContainer}>{project.title}</div>
    </div>
  );
};

export default ProjectBox;
