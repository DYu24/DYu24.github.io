import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { Fab } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';

import { NavBar } from './components/navbar/NavBar';
import { Landing } from './components/landing/Landing';
import { AboutMe } from './components/about-me/AboutMe';
import { WorkExperience } from './components/work-experience/WorkExperience';
import { Projects } from './components/projects/Projects';

import './App.css';

class App extends React.Component {
    scrollToTop = () => {
        animateScroll.scrollToTop({
            smooth: 'easeOutCubic',
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <NavBar />
                    <Landing />
                    <AboutMe />
                    <WorkExperience />
                    <Projects />

                    <Fab
                        className='fab'
                        color='primary'
                        onClick={this.scrollToTop}
                    >
                        <ExpandLess />
                    </Fab>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
