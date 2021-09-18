// import ROSImage from '../assets/error.png';
import RobotImage2 from '../assets/robot2.jpeg';
import ImageVid from '../assets/version1.gif';
import ImageVidENGS21 from '../assets/engs21.gif';
import CS52Img from '../assets/cs52.png';
import Vitalize from '../assets/2smartphones.png';
import PT from '../assets/PT.png';

export const logo = 'SJ';
export const name = 'Seungjae Lee';
export const projects = {
  english: [
    {
      title: 'Vitalize: Wellness App for Clinician',
      position: 'Full-Stack Intern',
      tags: ['React-Native', 'Node.js', 'MongoDB'],
      term: 'Spring 2021 - Summer 2021',
      image: Vitalize,
      imageOverflow: true,
      description: `
        Vitalize is a startup that provides trauma-informed digital wellness platform tailored to healthcare providers. 
        As an intern, I worked on developing the first beta version.
      `.replace(/\n/g, ' '),
      bullets: [
      'Created app screens(Meditation, Journal, Setting Page etc) and corresponding reusable components',
      'Created admin webpage for adding new meditation(React)',
      'Created CRUD API calls for meditation, journal and user information (Node.js, JWT for Auth, MongoDB)',
      'Beta version expected to be launched in September and tested by clinicians.'],
    },
    {
      title: 'Positive Tracks: Event Platform for Youth Activism',
      position: 'Designer & Front-end',
      tags: ['React', 'Figma', 'ENGS 89/90'],
      term: 'Fall 2020 - Winter 2021',
      image: PT,
      imageOverflow: true,
      description: `
        Positive Tracks(PT) is a non-profit org that helps youth make social changes through physical activity.
        Our capstone team (4 dev) created an event platform in which organizers can host/post an event, 
        admins can assist organizers, and participants can join events.
        `.replace(/\n/g, ' '),
      bullets: [
        'Designed webpage prototype. Reiterated based on feedbacks from sponsor and past users',
        'Created dashboards, homepage, and event pages and highly reusable components(buttons, tabs ...)',
        'Received positive feedbacks from Positive Tracks and past user on the beta',
        'Full version expected to be released from PT'],
    },
    {
      title: 'Dynamic Navigation System for Indoor Robots',
      position: 'Research Assistant',
      term: 'Summer 2019 - Fall 2019',
      tags: ['Research', 'Robotics', 'ROS/Python'],
      image: RobotImage2,
      imageOverflow: false,
      description: `
      As a research assistant for Prof. Eric Aaron, I worked on dynamic robot navigation for indoor environment, 
      a system which guides a robot to a target location based on local obstacles.
      `.replace(/\n/g, ' '),
      bullets: [
        'Self-studied ROS framework and applied it to build a simple obstacle avoidance.',
        'Upgraded the robot(turtlebot2) to use LIDAR instead of Xbox Kinect and modified the codebase',
        'Created maps of real-environments using SLAM and simulation environment using Gazebo',
        'Debugged the current system and improved the performance using Rviz',
        'Work presented at Colby Undergraduate Summer Research Retreat'],
    },
    {
      title: 'Spatial Disorientation in Circular Motions',
      position: 'Research Assistant',
      tags: ['Research', 'Math Modeling', 'MATLAB'],
      image: ImageVid,
      imageOverflow: false,
      term: 'Fall 2019 - Spring 2020',
      description: `
      As a research assistant for Prof. Jan Holly, I worked on building a differential equation model that simulates a brain’s spatial disorientation,
      the inability of a person to determine his true body position, motion, and altitude relative to the earth, in circular motions. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Studied the MATLAB research codebase and modified it to provide more visualizations and simulations under different variables',
      'Studied research papers of conducted experiments of spatial disorientation and applied our model to the result',
      'Collect data for the accident of Kobe Bryant and simulate the crash under the given condition. (Image)',
      'Work presented at Vestibular-Oriented Research Meeting 2021'],
    },
    {
      title: 'Pipe-bust Prevention System',
      position: 'Group Member',
      tags: ['ENGS 21', 'Arduino', 'CAD Design'],
      image: ImageVidENGS21,
      imageOverflow: false,
      term: 'Winter 2019',
      description: `
      For ENGS 21 project, our group aimed to prevent pipe burst damages of vactional homes. As our solution, we built a battery powered pipe freeze monitoring system 
      that emails the user warning them of a potential freeze, and then drains their pipes preventing damages from bursts. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Conducted research on the cause of pipe freezes, explored different solutions and asked for advice from pipe experts',
      'Wrote the codebase for running motors and reading temperature on Arduino',
      'CAD designed rack & pinion, relevant holders and temperature system container',
      'Work selected to present for Thayer open house'],
    },
    {
      title: 'CS 52: Full-Stack Web Development & Personal Web projects',
      position: 'Individual',
      tags: ['HTML/CSS', 'React', 'Node.js', 'Firebase'],
      image: CS52Img,
      imageOverflow: true,
      term: 'Spring 2021',
      description: `
      The following items are projects from CS 52 and personal web projects pursued after:
      `.replace(/\n/g, ' '),
      bullets: [
      'Lab 1: K-hiphop community landing page(only HTML & CSS)',
      'Lab 2: Drink buzzfeed quiz(Javascript)',
      'Lab 3: Live-editing note page(React, Firebase)',
      'Lab 4, 5: Linksharing page(Full-stack, React, Node.js, MongoDB)',
      'DartConnect: SNS page for school, followed instagram design (React, Firebase)',
      'Portfolio Page: Personal page with projects, skills(React)',
      ],
    },

  ],
  korean: {

  },
};
