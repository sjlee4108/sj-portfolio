import React from 'react';
import styles from './projectBoxStyles.scss';

const ProjectBox = (props) => {
  const { project, onClick } = props;
  return (
    <div data-aos="fade-up" className={styles.tagContainer}>
      <img className={styles.imageContainer} src={project.image} alt="" />
      <div className={styles.nameContainer} onClick={onClick} role="button" tabIndex={0}>{project.title}</div>
    </div>
  );
};

export default ProjectBox;
