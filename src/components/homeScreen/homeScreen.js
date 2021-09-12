import React from 'react';
import BodySection from '../bodySection/bodySection';
import Slider from '../sliders/slider';
import TitleSection from '../titleSection/titleSection';
import styles from './homeScreenStyles.scss';
import { projects } from '../../constants/projects';
import TechSkills from '../techSkills/techSkills';
import { techStacks } from '../../constants/skills';

const Home = (props) => {
  const { aboutMeRef, projectsRef, skillsRef } = props;
  return (
    <div className={styles.container}>
      <TitleSection name="Seungjae Lee" description="Idk what i want with life" />
      <BodySection title="About Me" id="aboutme" sectionRef={aboutMeRef}>
        Hi
      </BodySection>
      <BodySection title="Projects" id="projects" sectionRef={projectsRef}>
        <Slider title="Testing here"
          contents={projects.english}
        />
      </BodySection>
      <BodySection title="Skills" id="skills" sectionRef={skillsRef}>
        <TechSkills techStacks={techStacks} />
      </BodySection>
    </div>
  );
};

export default Home;
