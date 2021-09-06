export const logo = 'SJ';
export const name = 'Seungjae Lee';
export const projects = {
  english: [
    {
      title: 'Vitalize: Wellness App for Clinician',
      position: 'Full-Stack Developer Intern',
      tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      term: 'Spring 2021 - Summer 2021',
      image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
      description: `
        Vitalize is a startup that provides trauma-informed digital wellness platform tailored to healthcare providers. 
        As a full-stack intern, I worked on creating meditation and journal pages for the app (react-native) and created corresponding backend API calls (Node.js and MongoDB).
      `.replace(/\n/g, ' '),
      bullets: [
      'Created app screens(Meditation, Journal, Setting Page etc) and reusable components that go with them',
      'Created admin webpage for adding new meditation(React)',
      'Created API calls for meditation, journal and user information',
      'Beta version expected to be launched in September and tested by clinicians.'],
    },
    {
      title: 'Positive Tracks: Event Platform for Youth Activism',
      position: 'Designer & Front-end',
      tags: ['React', 'Figma', 'Redux'],
      term: 'Fall 2020 - Winter 2021',
      image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',

    description: `
      Positive Tracks is a non-profit organization that helps youth make social changes through physical activity.
      As a senior capstone project, our team (a group of 4 developers) created a event platform webpage where organizers can host/post an event, 
      Positive Tracks admin can assist organizers, and participants can browse/join events.
      `.replace(/\n/g, ' '),
    bullets: [
      'Designed webpage prototype (Figma). Went through 3 different iterations based on the feedbacks from Positive Tracks and past organizers',
      'Created dashboards(organizer, admin), homepage, event signup page, and event info page and highly reusable components that go with it (buttons, tabs, textboxes ...)',
      'Received positive feedbacks from Positive Tracks and past user on the beta version',
      'Full version expected to be released from Positive Tracks'],
    },
    {
      title: 'Dynamic Navigation System for Indoor Robots',
      position: 'Research Assistant',
      term: 'Summer 2019 - Fall 2019',
      tags: ['Research', 'Robotics', 'ROS', 'Python'],
      image: 'https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      description: 'hi2',
    },
    {
      title: 'Spatial Disorientation in Circular Motions',
      position: 'Research Assistant',
      tags: ['Research', 'Mathematical Modeling', 'MATLAB'],
      image: 'https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
      description: `
      As a research intern for Prof. Jan Holly, I worked on building a differential equation model that simulates a brain’s spatial disorientation,
      the inability of a person to determine his true body position, motion, and altitude relative to the earth, in circular motions. 
      This model was applied to explain the cause of the helicopter crash in 2020 that killed Kobe Bryant and 7 others. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Studied the pre-existing MATLAB codebase and modified it to provide additional visualizations and simulate under different variables',
      'Studied research papers of conducted experiments of spatial disorientation and applied our model to explain the result of these experiments',
      'Collect data for the accident of Kobe Bryant and simulate the crash under the given condition',
      'Work presented at the Vestibular-Oriented Research Meeting 2021, an international meeting hosted remotely by Ohio State University.'],
    },

  ],
  korean: {

  },
};
