import React from 'react';
import BodySection from '../bodySection/bodySection';
import Slider from '../sliders/slider';
import TitleSection from '../titleSection/titleSection';
import styles from './homeScreenStyles.scss';
import { projects } from '../../constants/projects';

const Home = () => {
  return (
    <div className={styles.container}>
      <TitleSection name="Seungjae Lee" description="Idk what i want with life" />
      <BodySection title="About Me">
        Hi
      </BodySection>
      <BodySection title="Projects">
        <Slider title="Testing here"
          contents={projects.english}
        />
      </BodySection>
      <BodySection title="Skills">
        Hi
      </BodySection>
    </div>
  );
};

export default Home;
