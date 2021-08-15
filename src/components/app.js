import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './themeChanger/homeScreen/homeScreen';
import NavBar from './navBar/navBar';
import Home from './homeScreen/homeScreen';

const FallBack = (props) => {
    return <div>URL Not Found</div>;
};

const App = (props) => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={FallBack} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
