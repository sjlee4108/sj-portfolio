/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './projectStyles.scss';

const projectsTesting = [
  { title: 'testing1', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg', description: 'hi' },
  { title: 'testing2', image: 'https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg', description: 'hi2' },

];

const getProjectImages = (projects, index) => {
  return projects.map((project, i) => <img src={project.image} alt="" className={[styles.projectImage, i === index ? styles.opacity : ''].join(' ')} />);
};
const Project = (props) => {
  const [reverse, setReverse] = useState(false);
  const [index, setIndex] = useState(0);
  const { title, description } = projectsTesting[index];

  return (
    <div className={styles.container}>
      <div className={styles.button} />
      <div className={[styles.slidersContainer, reverse ? styles.slidersReverse : ''].join(' ')}>
        <div className={styles.leftContainer}>
          <div className={[styles.imageContainer, reverse ? styles.reversedImage : ''].join(' ')}>
            {getProjectImages(projectsTesting, index)}
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={[styles.textSection, reverse ? styles.reversedTextSection : ''].join(' ')}>
            <h4 className={styles.title}>{title}</h4>
            <p> {description}</p>
          </div>
        </div>
      </div>
      <div className={styles.button}
        onClick={() => {
          setReverse(!reverse);
          setIndex((index + 1) % projectsTesting.length);
        }}
        role="button"
        tabIndex={0}
      >c
      </div>
    </div>
  );
};

export default Project;
