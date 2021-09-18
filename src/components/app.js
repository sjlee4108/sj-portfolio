import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import NavBar from './navBar/navBar';
import Home from './homeScreen/homeScreen';

const FallBack = (props) => {
    return <div>URL Not Found</div>;
};

const App = (props) => {
    const aboutMeRef = React.useRef(null);
    const projectsRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const aboutMeScroll = () => { console.log('testing'); aboutMeRef.current.scrollIntoView(); };
    const projectsScroll = () => projectsRef.current.scrollIntoView();
    const skillsScroll = () => skillsRef.current.scrollIntoView();

    React.useEffect(() => { AOS.init(); AOS.refresh(); }, []);

    return (
        <Router>
            <div>
                <NavBar onClickAboutMe={aboutMeScroll} onClickProjects={projectsScroll} onClickSkills={skillsScroll} />
                <Switch>
                    <Route exact path="/" render={() => <Home aboutMeRef={aboutMeRef} projectsRef={projectsRef} skillsRef={skillsRef} />} />
                    <Route component={FallBack} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
