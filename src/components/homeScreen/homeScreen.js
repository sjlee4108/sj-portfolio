import React from 'react';
import BodySection from '../bodySection/bodySection';
import Slider from '../sliders/slider';
import TitleSection from '../titleSection/titleSection';
import styles from './homeScreenStyles.scss';
import { projects } from '../../constants/projects';
import SkillSection from '../skillSection/skillSection';
import { techStacks, softSkills } from '../../constants/skills';
import profileImg from '../../assets/profile.jpg';

const Home = (props) => {
  const { aboutMeRef, projectsRef, skillsRef } = props;
  return (
    <div className={styles.container}>
      <TitleSection name="Seungjae Lee" description="Welcome to my dev world!" />
      <BodySection title="About Me" id="aboutme" sectionRef={aboutMeRef}>
        <div className={styles.aboutMeContainer}>
          <p>{`Hi. I am Seungjae Lee, a developer from South Korea and a recent graduate of Dartmouth College. 
            While my current interest is in the front-end, I do have some knowledge of the backend. 
            Outside of web/app developement, I am interested in math-heavy applications such as machine learning and robotics
            I am actively looking for an entry software developer positions, so please feel free to reach out to me if you think I would be a good fit.`.replace(/\n/g, ' ')}
          </p>
          <img src={profileImg} alt="" className={styles.imageContainer} />
        </div>
      </BodySection>
      <BodySection title="Projects" id="projects" sectionRef={projectsRef}>
        <Slider title="Testing here"
          contents={projects.english}
        />
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
