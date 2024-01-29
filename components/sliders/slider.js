/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from './sliderStyles.scss';
import Tag from './tag';

const getProjectImages = (projects, index) => {
  return projects.map((project, i) => (
    <img
      src={project.image}
      alt=""
      key={project.title}
      className={[styles.projectImage, i === index ? styles.opacity : '', project.imageOverflow ? null : styles.coverImage].join(' ')}
    />
  ));
};

const getSliderDots = (index, total, reverse, setIndex) => {
  return (
    <div className={[styles.dots, reverse ? styles.reversedDots : null].join(' ')}>
      {Array.from(new Array(total), (e, i) => (
        <div role="button"
          key={i}
          tabIndex="-1"
          onClick={() => { if (index !== i) setIndex(i); }}
          className={[styles.dot, i === index ? styles.filledDot : null].join(' ')}
        />
      ))}
    </div>
  );
};

const getTags = (tags, position, term) => {
  return (
    <div className={styles.tagsContainer}>
        {tags.map((tag) => <Tag key={tag + term + position} value={tag} />)}
        <div className={styles.positionContainer}>
          <i>{position}</i>
          <i>{term}</i>
        </div>
    </div>
  );
};

const getBulletPoints = (bullets) => {
return bullets.map((bullet) => <li key={bullet}>{bullet}</li>);
};

const getTextSection = (contents, reverse, index, setIndex) => {
  const { title, description, tags, bullets, term, position } = contents[index];
  return (
    <div className={[styles.textSection, reverse ? styles.reversedTextSection : ''].join(' ')}>
      <div className={styles.textInnerSection}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.spacing} />
      {getTags(tags, position, term)}
      <div className={styles.spacing} />
      <p className={styles.descriptionText}> {description}</p>
      <div className={styles.spacing} />
      <ul>
        {getBulletPoints(bullets)}
      </ul>
      </div>
      {getSliderDots(index, contents.length, reverse, setIndex)}
    </div>
  );
};
const Slider = (props) => {
  const { contents } = props;
  const [isReverse, setReverse] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div data-aos="fade-up" className={styles.container}>
      <BsChevronCompactLeft className={styles.buttonLeft}
        onClick={() => {
          setReverse(!isReverse);
          if (index === 0)setIndex(contents.length - 1);
          else setIndex((index - 1) % contents.length);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setReverse(!isReverse);
            if (index === 0)setIndex(contents.length - 1);
            else setIndex((index - 1) % contents.length);
          }
        }}
        role="button"
        tabIndex={0}
      />
        <div className={[styles.imageContainer, isReverse ? styles.reversedImage : ''].join(' ')}>
          {getProjectImages(contents, index)}
        </div>
        {getTextSection(contents, isReverse, index, (i) => { setIndex(i); setReverse(!isReverse); })}
      <BsChevronCompactRight className={styles.buttonRight}
        onClick={() => {
          setReverse(!isReverse);
          setIndex((index + 1) % contents.length);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setReverse(!isReverse);
            setIndex((index + 1) % contents.length);
          }
        }}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};

export default Slider;
