import React from 'react';
import BodySection from '../bodySection/bodySection';
import Slider from '../project/slider';
import TitleSection from '../titleSection/titleSection';
import styles from './homeScreenStyles.scss';

const projectsTesting = [
  { title: 'testing1',
  image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
description: 'hi' },
  { title: 'testing2', image: 'https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg', description: 'hi2' },
  { title: 'testing3', image: 'https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg', description: 'hi2' },

];

const Home = () => {
  return (
    <div className={styles.container}>
      <TitleSection name="Seungjae Lee" description="Idk what i want with life" />
      <BodySection title="Research">
        <Slider title="Testing here"
          contents={projectsTesting}
          image="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
          description="This is all about testing LThis is all about testing This is all about testing This is all about testingThis is all about testing  This is all about testing"
        />
      </BodySection>
    </div>
  );
};

export default Home;
