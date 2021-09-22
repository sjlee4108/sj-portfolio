/* eslint-disable max-len */
import React from 'react';
import BodySection from '../bodySection/bodySection';
// import Slider from '../sliders/slider';
import TitleSection from '../titleSection/titleSection';
import styles from './homeScreenStyles.scss';
// import { projects } from '../../constants/projects';
import SkillSection from '../skillSection/skillSection';
import { techStacks, softSkills } from '../../constants/skills';
import profileImg from '../../assets/profile.jpg';
import { aboutMeDes } from '../../constants/texts';
import ProjectSection from '../projectSection/projectSection';
import ProjectModal from '../projectSection/projectModal';

const Home = (props) => {
  const { aboutMeRef, projectsRef, skillsRef } = props;
  return (
    <div className={styles.container}>
      <TitleSection name="Seungjae Lee" description="Welcome to my dev world!" />
      <BodySection title="About Me" id="aboutme" sectionRef={aboutMeRef}>
        <div className={styles.aboutMeContainer}>
          <p>
            {aboutMeDes}
          </p>
          <img src={profileImg} alt="" className={styles.imageContainer} />
        </div>
      </BodySection>
      <BodySection title="Projects" id="projects" sectionRef={projectsRef}>
        {/* <Slider title="Testing here"
          contents={projects.english}
        /> */}
        <ProjectSection />
        <ProjectModal open />
      </BodySection>
      <BodySection title="Skills" id="skills" sectionRef={skillsRef}>
        <div className={styles.skillContainer}>
          <SkillSection skills={techStacks} skillType="tech" />
          <SkillSection skills={softSkills} skillType="soft" />
        </div>
      </BodySection>
    </div>
  );
};

export default Home;
