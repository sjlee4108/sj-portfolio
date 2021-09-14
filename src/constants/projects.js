// import ROSImage from '../assets/error.png';
import RobotImage2 from '../assets/robot2.jpeg';
import ImageVid from '../assets/version1.gif';
import Vitalize from '../assets/2smartphones.png';
import PT from '../assets/PT.png';

export const logo = 'SJ';
export const name = 'Seungjae Lee';
export const projects = {
  english: [
    {
      title: 'Vitalize: Wellness App for Clinician',
      position: 'Full-Stack Developer Intern',
      tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
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
      tags: ['React', 'Figma', 'Redux'],
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
      tags: ['Research', 'Robotics', 'ROS', 'Python'],
      image: RobotImage2,
      imageOverflow: false,
      description: 'hi2',
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
      tags: ['Research', 'Mathematical Modeling', 'MATLAB'],
      image: ImageVid,
      imageOverflow: false,
      description: `
      As a research intern for Prof. Jan Holly, I worked on building a differential equation model that simulates a brain’s spatial disorientation,
      the inability of a person to determine his true body position, motion, and altitude relative to the earth, in circular motions. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Studied the MATLAB research codebase and modified it to provide more visualizations and simulations under different variables',
      'Studied research papers of conducted experiments of spatial disorientation and applied our model to the result',
      'Collect data for the accident of Kobe Bryant and simulate the crash under the given condition. (Image)',
      'Work presented at Vestibular-Oriented Research Meeting 2021'],
    },

  ],
  korean: {

  },
};
