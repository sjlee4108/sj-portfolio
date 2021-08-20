/* eslint-disable max-len */
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from './sliderStyles.scss';

const getProjectImages = (projects, index) => {
  return projects.map((project, i) => <img src={project.image} alt="" className={[styles.projectImage, i === index ? styles.opacity : ''].join(' ')} />);
};

const getSliderDots = (index, total, reverse) => {
  return (
  <div className={[styles.dots, reverse ? styles.reversedDots : null].join(' ')}>
    {Array.from(new Array(total), (e, i) => <div className={[styles.dot, i === index ? styles.filledDot : null].join(' ')} />)}
  </div>
);
};

const getTextSection = (contents, reverse, index) => {
  const { title, description } = contents[index];
  return (
    <div className={[styles.textSection, reverse ? styles.reversedTextSection : ''].join(' ')}>
      <div className={styles.textInnerSection}>
      <h4 className={styles.title}>{title}</h4>
      <p> {description}</p>
      </div>
      {getSliderDots(index, contents.length, reverse)}
    </div>
  );
};
const Slider = (props) => {
  const { contents } = props;
  const [isReverse, setReverse] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <BsChevronCompactLeft className={styles.buttonLeft} />
        <div className={[styles.imageContainer, isReverse ? styles.reversedImage : ''].join(' ')}>
          {getProjectImages(contents, index)}
        </div>
        {getTextSection(contents, isReverse, index)}
      <BsChevronCompactRight className={styles.buttonRight}
        onClick={() => {
          setReverse(!isReverse);
          setIndex((index + 1) % contents.length);
        }}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};

export default Slider;
