// import ROSImage from '../assets/error.png';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlinePresentationChartBar } from 'react-icons/hi';
import { RiComputerLine, RiArticleLine } from 'react-icons/ri';
import RobotImage2 from '../assets/robot2.jpeg';
import ImageVid from '../assets/version1.gif';
import ImageVidENGS21 from '../assets/engs21.gif';
import Vitalize from '../assets/2smartphones.png';
import PT from '../assets/PT.png';
import ReactNoteGIF from '../assets/reactNote.gif';
import DrinkBuzzGIF from '../assets/drinkBuzz.gif';
import Lab1GIF from '../assets/lab1.gif';
import DartConnectGIF from '../assets/dartconnect.gif';
import LinkShareIMG from '../assets/linkshare.png';
import PortfolioIMG from '../assets/portfolio.png';
import deliverer from '../assets/deliverer.gif';
import analytics from '../assets/analytics.png';

const buttonSize = 22;
const buttonStyle = { marginRight: '0.3em' };
export const logo = 'SJ';
export const name = 'Seungjae Lee';
export const projects = {
  english: [
    {
      id: 0,
      title: 'Vitalize: Wellness App for Clinician',
      position: 'Full-Stack Intern',
      tags: ['React-Native', 'Node.js', 'MongoDB'],
      term: 'Spring 2021 - Summer 2021',
      image: Vitalize,
      imageOverflow: true,
      type: 'app',
      description: `
        Vitalize is a startup that provides trauma-informed digital wellness platform tailored to healthcare providers. 
        As an intern, I worked on developing the first beta version.
      `.replace(/\n/g, ' '),
      bullets: [
      'Created app screens(Meditation, Journal, Setting Page etc) and corresponding reusable components',
      'Created admin webpage for adding new meditation(React)',
      'Created CRUD API calls for meditation, journal and user information (Node.js, JWT for Auth, MongoDB)',
      'Beta version expected to be launched in September and tested by clinicians.'],
      buttons: [],
    },
    {
      id: 1,
      title: 'Positive Tracks: Event Platform for Youth Activism',
      position: 'Designer & Front-end',
      tags: ['React', 'Figma', 'ENGS 89/90'],
      term: 'Fall 2020 - Winter 2021',
      image: PT,
      type: 'web',
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
      buttons: [{ text: 'Deployed', link: 'https://positive-tracks-66827.web.app/', icon: () => <RiComputerLine size={buttonSize} style={buttonStyle} /> }],
    },
    {
      id: 2,
      title: 'Dynamic Navigation System for Indoor Robots',
      position: 'Research Assistant',
      term: 'Summer 2019 - Fall 2019',
      tags: ['Research', 'Robotics', 'ROS/Python'],
      image: RobotImage2,
      imageOverflow: false,
      type: 'others',
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
      buttons: [],
    },
    {
      id: 3,
      title: 'Spatial Disorientation in Circular Motions',
      position: 'Research Assistant',
      tags: ['Research', 'Math Modeling', 'MATLAB'],
      image: ImageVid,
      imageOverflow: false,
      term: 'Fall 2019 - Spring 2020',
      type: 'others',
      description: `
      As a research assistant for Prof. Jan Holly, I worked on building a differential equation model that simulates a brain’s spatial disorientation,
      the inability of a person to determine his true body position, motion, and altitude relative to the earth, in circular motions. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Studied the MATLAB research codebase and modified it to provide more visualizations and simulations under different variables',
      'Studied research papers of conducted experiments of spatial disorientation and applied our model to the result',
      'Collect data for the accident of Kobe Bryant and simulate the crash under the given condition. (Image)',
      'Work presented at Vestibular-Oriented Research Meeting 2021'],
      buttons: [
        { text: 'School Article', link: 'https://www.colby.edu/magazine/when-the-body-deceives/', icon: () => <RiArticleLine size={buttonSize} style={buttonStyle} /> },
        { text: 'Poster',
          link: 'https://drive.google.com/file/d/10oRGUpBsswqGnshhlUdjkCV1y3OOoScg/view?usp=sharing',
          icon: () => <HiOutlinePresentationChartBar size={buttonSize} style={buttonStyle} /> }],
    },
    {
      id: 4,
      title: 'Pipe-bust Prevention System',
      position: 'Group Member',
      tags: ['ENGS 21', 'Arduino', 'CAD Design'],
      image: ImageVidENGS21,
      imageOverflow: false,
      term: 'Winter 2019',
      type: 'others',
      description: `
      For ENGS 21 project, our group aimed to prevent pipe burst damages of vactional homes. As our solution, we built a battery powered pipe freeze monitoring system 
      that emails the user warning them of a potential freeze, and then drains their pipes preventing damages from bursts. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Conducted research on the cause of pipe freezes, explored different solutions and asked for advice from pipe experts',
      'Wrote the codebase for running motors and reading temperature on Arduino',
      'CAD designed rack & pinion, relevant holders and temperature system container',
      'Work selected to present for Thayer open house'],
      buttons: [
        { text: 'Final Presentation',
          link: 'https://docs.google.com/presentation/d/19S30i-kro4Qkq5NJCDlZf0vWnaCq2RvJAYnHKCONvvo/edit?usp=sharing',
          icon: () => <HiOutlinePresentationChartBar size={buttonSize} style={buttonStyle} /> }],
    },
    {
      id: 5,
      title: 'CS 52: K-Gang',
      position: 'Individual',
      tags: ['HTML', 'CSS'],
      image: Lab1GIF,
      imageOverflow: true,
      term: 'Spring 2021',
      type: 'web',
      description: `
      For CS 52 Lab 1: I created a landing page by using HTML and CSS only. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Followed the structure of https://simpleanalytics.com/',
      'Replicated typewriter effect',
      'Used CSS checkbox https://css-tricks.com/the-checkbox-hack/',
      'Used media query to build a responsive web',
      ],
      buttons: [
        { text: 'Deployed', link: 'https://dartmouth-cs52-21s.github.io/lab1-landingpage-sjlee4108/', icon: () => <RiComputerLine size={buttonSize} style={buttonStyle} /> },
        { text: 'Github', link: 'https://github.com/dartmouth-cs52-21S/lab1-landingpage-sjlee4108', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> }],
    },
    {
      id: 6,
      title: 'CS 52: Drink Buzzfeed',
      position: 'Individual',
      tags: ['HTML', 'CSS', 'Javascript', 'Jquery'],
      image: DrinkBuzzGIF,
      imageOverflow: true,
      term: 'Spring 2021',
      type: 'web',
      description: `
      For CS 52 Lab 2: I created a buzzfeed quiz using HMTL, CSS, JS, and Jquery.
      `.replace(/\n/g, ' '),
      bullets: [
      'Added animation, transition to make web more interactive.',
      'Used JSON to save and load quiz contents',
      ],
       buttons: [
        { text: 'Deployed', link: 'https://dartmouth-cs52-21s.github.io/lab2-sjlee4108/', icon: () => <RiComputerLine size={buttonSize} style={buttonStyle} /> },
        { text: 'Github', link: 'https://github.com/dartmouth-cs52-21S/lab2-sjlee4108', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> }],
    },
    {
      id: 7,
      title: 'CS 52: Note Share',
      position: 'Individual',
      tags: ['HTML', 'CSS', 'Firebase', 'React'],
      image: ReactNoteGIF,
      imageOverflow: true,
      term: 'Spring 2021',
      type: 'web',
      description: `
      For CS 52 Lab 3: I created a live-editing note sharing page. Users can create, edit and share notes together live time. 
      `.replace(/\n/g, ' '),
      bullets: [
      'Used Firebase Realtime database with Google Auth as backend',
      'User can have their own boards and share code with others',
      'Notes support markdown syntax and are draggable',
      ],
      buttons: [
        { text: 'Deployed', link: 'https://compassionate-fermi-1eecdd.netlify.app/', icon: () => <RiComputerLine size={buttonSize} style={buttonStyle} /> },
        { text: 'Github', link: 'https://github.com/dartmouth-cs52-21S/react-notes-sjlee4108', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> },
      ],
    },
    {
      id: 8,
      title: 'DartConnect',
      position: 'Individual',
      tags: ['HTML', 'CSS', 'Firebase', 'React'],
      image: DartConnectGIF,
      imageOverflow: true,
      term: 'Spring 2021',
      type: 'web',
      description: `
      For the personal project, I created a school SNS that replicates the structure of Instagram and Facebook.
      `.replace(/\n/g, ' '),
      bullets: [
      'Used Firebase Realtime database with email & password auth as backend',
      'Used Mapquest API to get a map image of hometown',
      'Replicated Instagram feed structure including recommendation sidebar',
      'Web/mobile responsive using media queries',
      ],
      buttons: [
        { text: 'Deployed', link: 'https://nifty-jepsen-d9e082.netlify.app/', icon: () => <RiComputerLine size={buttonSize} style={buttonStyle} /> },
        { text: 'Github', link: 'https://github.com/sjlee4108/DALI_SNS_CHALLENGE', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> },
      ],
    },
    {
      id: 9,
      title: 'CS 52: LinkShare',
      position: 'Individual',
      tags: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
      image: LinkShareIMG,
      imageOverflow: true,
      term: 'Spring 2021',
      type: 'web',
      description: `
      For the CS 52 Lab 4 and 5, I created a full-stack webpage. Linkshare allows user to share links and relevant information about the link.
      `.replace(/\n/g, ' '),
      bullets: [
      'Used React Material ui library for the table format and redux for state management',
      'Used Node.js for backend with MongoDB as database',
      'Used jwt for authentication',
      ],
      buttons: [
        { text: 'Deployed', link: 'https://nifty-jepsen-d9e082.netlify.app/', icon: () => <RiComputerLine size={buttonSize} style={buttonStyle} /> },
        { text: 'Front-end', link: 'https://github.com/dartmouth-cs52-21S/platform-client-sjlee4108', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> },
        { text: 'Back-end', link: 'https://github.com/dartmouth-cs52-21S/platform-api-sjlee4108', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> },
      ],
    },
    {
      id: 10,
      title: 'Portfolio Page',
      position: 'Individual',
      tags: ['HTML', 'CSS', 'React'],
      image: PortfolioIMG,
      imageOverflow: true,
      term: 'Summer 2021',
      type: 'web',
      description: `
      I used React to create a personal portfolio. I focused on learning new techniques such as dark mode, transition, and animation."
      `.replace(/\n/g, ' '),
      bullets: [
      'Implemented dark mode',
      'Used AOS library for animation',
      'Used media query for responsive web',
      ],
      buttons: [
        { text: 'Github', link: 'https://github.com/sjlee4108/sj-portfolio', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> },
      ],
    },
    {
      id: 11,
      title: 'CS 81: Deliverer',
      position: 'Individual',
      tags: ['ROS', 'Python'],
      image: deliverer,
      imageOverflow: true,
      term: 'Fall 2020',
      type: 'others',
      description: `
      For CS 81 final project, our team implemented an algorithm for package delivering robot. 
      We used Dijkstra algorithm for finding an optimal path of picking/dropping items and 
      Bug2 algorithm for obstacle avoidance
      `.replace(/\n/g, ' '),
      bullets: [
      'Implemented Bug2 algorithm for obstacle avoidance (PID controller & finite state machine)',
      'Created and ran simulation on test environments to find optimal parameters and failed cases (Bug2 limit)',
      ],
      buttons: [
        { text: 'Final Report', link: 'https://drive.google.com/file/d/1zuBoj_5XLi0Cuq31u7nDDmcPcZ2AaYVQ/view?usp=sharing', icon: () => <RiArticleLine size={buttonSize} style={buttonStyle} /> },
        { text: 'Github', link: 'https://github.com/sjlee4108/robot-deliverer', icon: () => <AiOutlineGithub size={buttonSize} style={buttonStyle} /> },
      ],
    },
    {
      id: 12,
      title: 'ENGM 182: Siemens Data Prediction',
      position: 'Individual',
      tags: ['Python', 'R'],
      image: analytics,
      imageOverflow: true,
      term: 'Fall 2020',
      type: 'others',
      description: `
      For Data Analytics final project, our team worked with Siemens(Germany) to predict the internal cost by different categories and sections.
      Our team preprocessed the company data, tested different time-series forecast models and provided recommendations based on the result." 
      `.replace(/\n/g, ' '),
      bullets: [
      'Preprocessed the dataset using Python',
      'Researched different models of time-series forecasting and tested TBATS, ARIMA on the dataset',
      'Used a subset of the data to evaluate the model and then predicted with the full dataset (R)',
      ],
      buttons: [
      ],
    },

  ],
  korean: {

  },
};
