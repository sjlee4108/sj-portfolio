import React from 'react';
import BodySection from '../bodySection/bodySection';
import Project from '../project/project';
import TitleSection from '../titleSection/titleSection';
import styles from './homeScreenStyles.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <TitleSection name="Seungjae Lee" description="Idk what i want with life" />
      <BodySection title="Research">
        <Project title="Testing here"
          image="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
          description="This is all about testing LThis is all about testing This is all about testing This is all about testingThis is all about testing  This is all about testing"
        />
      </BodySection>
    </div>
  );
};

export default Home;
