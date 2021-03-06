import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from './NavBar';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/' component={ HomeScreen } />
                <Route exact path='/about' component={ AboutScreen } />
                <Route exact path='/login' component={ LoginScreen } />

                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default AppRouter;